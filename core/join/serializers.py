from core.abstract.serializers import AbstractSerializer
from core.join.models import Join
from core.user.models import User
from core.user.serializers import UserSerializer
from core.project.models import Project
from rest_framework import serializers
from rest_framework.exceptions import ValidationError


class JoinSerializer(AbstractSerializer):
    applicant = serializers.SlugRelatedField(queryset=User.objects.all(), slug_field='public_id')
    project = serializers.SlugRelatedField(queryset=Project.objects.all(), slug_field='public_id')

    
    def to_representation(self, instance):
        rep = super().to_representation(instance)
        author = User.objects.get(public_id=rep["applicant"])
        rep["applicant"] = UserSerializer(author).data
        return rep
    
    def validate_project(self, value):
        if self.instance:
            return self.instance.post
        return value

    class Meta:
        model = Join
        fields = ['id', 'project', 'applicant', 'message', 'accepted', 'edited', 'created', 'updated']
        read_only_fields = ["edited"]
