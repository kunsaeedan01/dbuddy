from rest_framework.permissions import IsAuthenticated
from core.abstract.viewsets import AbstactViewSet
from core.project.models import Project
from core.project.serializers import ProjectSerializer
from rest_framework.response import Response
from rest_framework import status


class ProjectViewSet(AbstactViewSet):
    http_method_names = ('post', 'get')
    permission_classes = (IsAuthenticated, )
    serializer_class = ProjectSerializer

    def get_queryset(self):
        return Project.objects.all()
    
    def get_object(self):
        obj = Project.objects.get_object_by_public_id(self.kwargs['pk'])
        self.check_object_permissions(self.request, obj)
        return obj

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        return Response(serializer.data, status=status.HTTP_201_CREATED)

        
