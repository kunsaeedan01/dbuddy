from django.shortcuts import render
from core.abstract.viewsets import AbstractViewSet
from core.join.models import Join
from core.join.serializers import JoinSerializer
from rest_framework.decorators import action
from core.project.models import Project
from django.http import QueryDict
from django.shortcuts import get_object_or_404
from rest_framework.response import Response
from rest_framework import status
# Create your views here.


class JoinViewSet(AbstractViewSet):
    queryset = Join.objects.all()
    serializer_class = JoinSerializer

    def perform_create(self, serializer):
        serializer.save(applicant=self.request.user)

    def get_object(self, *args, **kwargs):
        queryset = self.filter_queryset(self.get_queryset())
        obj = queryset.get(public_id=self.kwargs["pk"])
        self.check_object_permissions(self.request, obj)
        return obj

    @action(detail=True, methods=['patch'])
    def accept(self, request, pk, *args, **kwargs):
        join = self.get_object()
        if join.project.author == request.user:
            join.accepted = True
            join.save()
            # update project and assign user as student1 if spot is empty
            project = join.project
            if not project.participant1:
                project.participant1 = join.applicant
                project.save()
            elif not project.participant2:
                project.participant2 = join.applicant
                project.save()
            # check if the user is instructor
            if join.applicant.status == 'Instructor':
                # assign user as instructor if spot is empty
                if not project.instructor:
                    project.instructor = join.applicant
                    project.save()
            return Response({'detail': 'Join request accepted'})
        else:
            return Response({'detail': 'Only author can accept join request'}, status=status.HTTP_403_FORBIDDEN)