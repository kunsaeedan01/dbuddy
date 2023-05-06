from rest_framework import serializers
from core.user.models import User, Skill
from core.abstract.serializers import AbstractSerializer
from django.conf import settings


class UserSerializer(AbstractSerializer):

    def to_representation(self, instance):
        representation = super().to_representation(instance)
        if not representation['avatar']:
            representation['avatar'] = settings.DEFAULT_AUTO_FIELD
            return representation
        if settings.DEBUG:
            request = self.context.get('request')
            representation['avatar'] = request.build_absolute_uri(representation['avatar'])
        return representation

    class Meta:
        model = User
        fields =  ['id', 'username', 'first_name', 'last_name', 'email', 'gender', 
        'status', 'faculty',  'group', 'skills', 'bio', 'avatar', 'is_active', 'created', 'updated']
        read_only_field = ['is_active']




class SkillSerializer(AbstractSerializer):
    class Meta:
        model = Skill
        fields = ['id', 'owner', 'name', 'created', 'updated']
