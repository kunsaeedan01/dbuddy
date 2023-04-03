from django.db import models
from core.abstract.models import AbstractModel, AbstractManager


class ProjectManager(AbstractManager):
    pass


class Project(AbstractModel):

    TYPES = [
        ('WA', 'Web-application'),
        ('MA', 'Mobile application'),
        ('GM', 'Game'), 
        ('HW', 'Hardware'),
        ('MD', 'Media'), 
        ('NN', 'Neural Network'),
        ('RT', 'Research')
    ]

    author = models.ForeignKey(to='core_user.User', on_delete=models.CASCADE)
    title = models.CharField(max_length=128, default='Project Title', null=False, blank=False)
    description = models.TextField(null=True, blank=True)
    type = models.CharField(max_length=2, choices=TYPES)
    participant1 = models.ForeignKey(to='core_user.User', related_name='participant1', on_delete=models.SET_NULL, null=True, blank=True)
    participant2 = models.ForeignKey(to='core_user.User', related_name='participant2', on_delete=models.SET_NULL, null=True, blank=True)
    participant3 = models.ForeignKey(to='core_user.User', related_name='participant3', on_delete=models.SET_NULL, null=True, blank=True)
    edited = models.BooleanField(default=False)

    objects = ProjectManager()

    def __str__(self):
        return f"{self.author.title}"

    class Meta:
        db_table = "'core.post'"
