from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework import status
from core.user.models import User
from core.user.serializers import UserSerializer
from core.user.models import UserManager


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
        user_manager = UserManager()
        user = user_manager.create_user(username=data.get('username'), email=data.get('email'), password=password)

        return Response(serializer.data, status=status.HTTP_201_CREATED)