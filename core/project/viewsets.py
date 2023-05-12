from rest_framework.permissions import IsAuthenticated
from core.abstract.viewsets import AbstractViewSet
from core.project.models import Project
from core.project.serializers import ProjectSerializer
from rest_framework.response import Response
from rest_framework import status
from django.db.models import Q 
from rest_framework.decorators import action
from core.auth.permissions import UserPermission
from rest_framework.decorators import action
from rest_framework import status


class ProjectViewSet(AbstractViewSet):
    http_method_names = ('post', 'get', 'put', 'delete')
    permission_classes = (UserPermission, )
    serializer_class = ProjectSerializer

    @action(methods=['post'], detail=True)
    def like(self, request, *args, **kwargs):
        project = self.get_object()
        user = self.request.user
        user.like(project)
        serializer = self.serializer_class(project)
        return Response(serializer.data, status=status.HTTP_200_OK)

    @action(methods=['post'], detail=True)
    def remove_like(self, request, *args, **kwargs):
        project = self.get_object()
        user = self.request.user
        user.remove_like(project)
        serializer = self.serializer_class(project)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def get_queryset(self):
        queryrset = Project.objects.all()
        return queryrset
    
    def get_object(self):
        obj = Project.objects.get_object_by_public_id(self.kwargs['pk'])
        self.check_object_permissions(self.request, obj)
        return obj

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        return Response(serializer.data, status=status.HTTP_201_CREATED)

    @action(detail=False, methods=['GET'], url_path='search')
    def search_projects(self, request):
        search_query = self.request.query_params.get('search')

        if search_query:
            projects = Project.objects.filter(
                Q(title__icontains=search_query) |
                Q(description__icontains=search_query) |
                Q(type__icontains=search_query) |
                Q(technologies__icontains=search_query)
            )
            serializer = ProjectSerializer(projects, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response("No search query provided", status=status.HTTP_400_BAD_REQUEST)
        
