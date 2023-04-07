from rest_framework_nested import routers
from core.user.viewsets import UserViewSet
from core.auth.viewsets import RegisterViewSet, LoginViewSet, RefreshViewSet
from core.project.viewsets import ProjectViewSet
from core.comment.viewsets import CommentViewSet

router = routers.SimpleRouter()
router.register(r'user', UserViewSet, basename='user')
router.register(r'auth/register', RegisterViewSet, basename='auth-register')
router.register(r'auth/login', LoginViewSet, basename='auth-login')
router.register(r'auth/refresh', RefreshViewSet, basename='auth-refresh')
router.register(r'project', ProjectViewSet, basename='project')
projects_router = routers.NestedSimpleRouter(router, r'project', lookup='project')
projects_router.register(r'comment',CommentViewSet, basename='project-comment')


urlpatterns = [
    *router.urls,
    *projects_router.urls
]