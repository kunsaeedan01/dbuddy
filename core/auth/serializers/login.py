from django.contrib.auth import get_user_model, password_validation
from django.core.exceptions import ValidationError
from rest_framework import serializers
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from core.user.serializers import UserSerializer
from rest_framework_simplejwt.settings import api_settings

User = get_user_model()


class LoginSerializer(TokenObtainPairSerializer):
    email = serializers.EmailField()
    password = serializers.CharField(write_only=True, style={'input_type': 'password'})
    access_token = serializers.CharField(read_only=True)
    refresh_token = serializers.CharField(read_only=True)

    def validate(self, attrs):
        data = super().validate(attrs)
        refresh = self.get_token(self.user)
        data['user'] = UserSerializer(self.user).data
        data['refresh'] = str(refresh)
        data['access'] = str(refresh.access_token)
        if api_settings.UPDATE_LAST_LOGIN:
            update_last_login(None, self.user)
        return data
        # email = attrs.get('email')
        # password = attrs.get('password')

        # if email and password:
        #     user = User.objects.filter(email=email).first()

        #     if user is None:
        #         raise serializers.ValidationError('A user with this email and password was not found.')
        #     if not user.check_password(password):
        #         raise serializers.ValidationError('Incorrect password.')

        #     refresh = RefreshToken.for_user(user)
        #     access = str(refresh.access_token)
        #     refresh = str(refresh)

        #     attrs['access_token'] = access
        #     attrs['refresh'] = refresh
        #     attrs['user'] = user

        #     return attrs

        # raise serializers.ValidationError('Must include "email" and "password".')