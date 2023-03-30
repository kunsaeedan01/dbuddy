from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework import status
from core.user.models import User
from core.user.serializers import UserSerializer
from core.user.models import UserManager
from rest_framework_simplejwt.tokens import RefreshToken


class RegisterViewSet(viewsets.ViewSet):
    permission_classes = []
    serializer_class = UserSerializer

    def create(self, request):
        data = request.data.copy()
        password = data.pop('password', None)

        if not password:
            return Response({'password': ['This field is required.']}, status=status.HTTP_400_BAD_REQUEST)

        serializer = self.serializer_class(data=data)
        serializer.is_valid(raise_exception=True)
        user = User.objects.create_user(username=data.get('username'), email=data.get('email'), password=password)

        refresh = RefreshToken.for_user(user)
        tokens = {
            'refresh': str(refresh),
            'access': str(refresh.access_token),
        }

        serialized_user = UserSerializer(user).data

        response_data = {
            'user': serialized_user,
            'tokens': tokens,
        }

        return Response(response_data, status=status.HTTP_201_CREATED)