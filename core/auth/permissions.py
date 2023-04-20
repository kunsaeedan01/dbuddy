from rest_framework.permissions import BasePermission, SAFE_METHODS


class UserPermission(BasePermission):

    def has_object_permission(self, request, view, obj):
        if request.user.is_anonymous:
            return request.method in SAFE_METHODS
        if view.basename in ["project"]:
            return bool(request.user and request.user.is_authenticated)
        if view.basename in ["project-comment"]:
            if request.method in ['DELETE']:
                return bool(request.user.is_superuser or request.user in [obj.author, obj.project.author])
            return bool(request.user and request.user.is_authenticated)
        return False

    def has_permission(self, request, view):
        if view.basename in ["project"]:
            if request.user.is_anonymous:
                return request.method in SAFE_METHODS
            return bool(request.user and request.user.is_authenticated)
        return False



class JoinPermission(BasePermission):
    
    def has_object_permission(self, request, view, obj):
        if request.method in ['PUT', 'PATCH']:
            if obj.accepted:
                return False
            if request.user == obj.project.author:
                return True
        elif request.method == 'DELETE':
            if request.user == obj.applicant:
                return True
            if request.user == obj.project.author:
                return True
        return False

    def has_permission(self, request, view):
        return request.user
