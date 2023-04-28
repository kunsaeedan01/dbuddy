from rest_framework import serializers
from core.user.models import User, Skill
from core.abstract.serializers import AbstractSerializer


class UserSerializer(AbstractSerializer):
    class Meta:
        model = User
        fields =  ['id', 'username', 'first_name', 'last_name', 'email', 'gender', 
        'status', 'faculty',  'is_active', 'created', 'updated']
        read_only_field = ['is_active']


class SkillSerializer(AbstractSerializer):
    class Meta:
        model = Skill
        fields = ['id', 'owner', 'name', 'created', 'updated']
