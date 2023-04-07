from django.db import models
from core.abstract.models import AbstractManager, AbstractModel


class CommentManager(AbstractManager):
    pass


class Comment(AbstractModel):
    project = models.ForeignKey('core_project.Project', on_delete=models.PROTECT)
    author = models.ForeignKey('core_user.User', on_delete=models.PROTECT)
    body = models.TextField()
    edited = models.BooleanField(default=False)

    objects = CommentManager()

    def __str__(self):
        return self.body
    
    