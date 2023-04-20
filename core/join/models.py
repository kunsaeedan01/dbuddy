from django.db import models
from core.abstract.models import AbstractModel, AbstractManager

# Create your models here.

class JoinManager(AbstractManager):
    pass


class Join(AbstractModel):
    applicant = models.ForeignKey('core_user.User', on_delete=models.PROTECT)
    project = models.ForeignKey('core_project.Project', on_delete=models.PROTECT)
    message = models.TextField(default='I want to join your project')
    accepted = models.BooleanField(default=False)
    edited = models.BooleanField(default=False)

    objects = JoinManager()

    def __str__(self):
        return self.applicant.username
    