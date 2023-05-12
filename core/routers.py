from rest_framework_nested import routers
from core.user.viewsets import UserViewSet
from core.auth.viewsets import RegisterViewSet, LoginViewSet, RefreshViewSet
from core.project.viewsets import ProjectViewSet
from core.comment.viewsets import CommentViewSet
from core.join.viewsets import JoinViewSet
from django.urls import path

router = routers.SimpleRouter()
router.register(r'user', UserViewSet, basename='user')
router.register(r'auth/register', RegisterViewSet, basename='auth-register')
router.register(r'auth/login', LoginViewSet, basename='auth-login')
router.register(r'auth/refresh', RefreshViewSet, basename='auth-refresh')
router.register(r'project', ProjectViewSet, basename='project')

projects_router = routers.NestedSimpleRouter(router, r'project', lookup='project')
projects_router.register(r'join', JoinViewSet, basename='project-join')

urlpatterns = [
    *router.urls,
    *projects_router.urls,
    path('project/<slug:project__slug>/join/<slug:join__public_id>/accept/', JoinViewSet.as_view({'patch': 'accept'}), name='project-join-accept'),
    path('project/search/', ProjectViewSet.as_view({'get': 'list'}), name='project-search'),
]