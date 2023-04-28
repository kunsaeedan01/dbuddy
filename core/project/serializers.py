from rest_framework import serializers
from rest_framework.exceptions import ValidationError
from core.abstract.serializers import AbstractSerializer
from core.project.models import Project, Tag
from core.user.models import User
from core.user.serializers import UserSerializer


class ProjectSerializer(AbstractSerializer):
    author = serializers.SlugRelatedField(queryset=User.objects.all(), slug_field='public_id')
    liked = serializers.SerializerMethodField()
    likes_count = serializers.SerializerMethodField()

    def get_liked(self, instance):
        request = self.context.get('request', None)
        if request is None or request.user.is_anonymous:
            return False
        return request.user.has_liked(instance)

    def get_likes_count(self, instance): 
        return instance.liked_by.count()

    def validate_author(self, value):
        if self.context["request"].user != value:
            raise ValidationError("You can't create a project for another user.")
        return value
    
    def to_representation(self, instance):
        rep = super().to_representation(instance)
        author = User.objects.get_object_by_public_id(rep["author"])
        rep["author"] = UserSerializer(author).data
        return rep

    def update(self, instance, validated_data):
        if not instance.edited:
            validated_data['edited'] = True
        instance = super().update(instance, validated_data)
        return instance

    class Meta:
        model = Project
        fields = ['id', 'author', 'title', 'description', 'liked', 'likes_count', 'edited', 'created', 'updated']
        read_only_fields = ['edited']

        
class TagSerializer(AbstractSerializer):
    class Meta:
        model = Tag
        fields = ['id', 'project', 'name', 'edited', 'updated', 'created']
        read_only_fields = ['edited']