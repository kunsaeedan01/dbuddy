import uuid
from django.contrib.auth.hashers import make_password
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
from django.core.exceptions import ObjectDoesNotExist
from django.db import models
from django.http import Http404
from django.utils.translation import gettext_lazy as _
from core.abstract.models import AbstractModel, AbstractManager


def user_directory_path(instance, filename):
    return 'user_{0}/{1}'.format(instance.public_id, filename)


class UserManager(BaseUserManager, AbstractManager):

    def create_user(self, username, email, password=None, **kwargs):
        if username is None:
            raise TypeError('User must have an username')
        # if email is None:
        #     raise TypeError('User must have an email')
        if password is None:
            raise TypeError('User must have a password')
        user = self.model(username=username, email=self.normalize_email(email), **kwargs)
        user.set_password(password)  # hash the password before storing
        user.save(using=self._db)
        return user

    def create_superuser(self, username, email, password, **kwargs):
        if password is None:
            raise TypeError('Superusers must have a password.')
        # if email is None:
        #     raise TypeError('Superusers must have an email.')
        if username is None:
            raise TypeError('Superusers must have a username.')
        kwargs.setdefault('is_staff', True)
        kwargs.setdefault('is_superuser', True)
        user = self.create_user(username, email, password, **kwargs)
        user.is_superuser = True
        user.save(using=self._db)

        return user


class User(AbstractModel, AbstractBaseUser, PermissionsMixin):

    GENDER_CHOICE = (
		("M", _("Male")),
		("F", _("Female")),
	)

    STATUS_CHOICE = (
        ("0", _('Coordinator')),
        ("1", _('Instructor')),
        ("2", _('Student')),
    )

    FACULTY_CHOICE = (
        ('SE', _('Software engineering')), 
        ('BDA', _('Big Data Analysis')),
        ('IT', _('Computer Science')), 
        ('MT', _('Media Technologies')), 
        ('IA', _('Industrial Automation')),
        ('TS', _('Telecommunication Systems')), 
        ('CS', _('Cyber Security')),
        ('DJ', _('Digital Journalism')), 
        ('ITM', _('IT-management')),
    )

    username = models.CharField(db_index=True, max_length=255, unique=True)
    password = models.CharField(max_length=128)
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    email = models.EmailField(db_index=True, unique=True)
    gender = models.CharField(_("Gender"), choices=GENDER_CHOICE, default="M", max_length=1)
    status = models.CharField(_('Role status'), choices=STATUS_CHOICE, null=True, blank=True, default="2", max_length=10)
    faculty = models.CharField(_('Study/work faculty'), choices=FACULTY_CHOICE, max_length=4)
    group = models.CharField(max_length=16, null=True, blank=True)
    skills = models.ManyToManyField('core_user.Skill', blank=True, null=True)
    bio = models.TextField(null=True)
    avatar=models.ImageField(null=True, blank=True, upload_to=user_directory_path)
    is_active = models.BooleanField(default=True)
    is_superuser = models.BooleanField(default=False)
    projects_liked = models.ManyToManyField("core_project.Project", related_name="liked_by")
    is_staff = models.BooleanField(default=False)

    def like(self, project):
        return self.projects_liked.add(project)
    
    def remove_like(self, project):
        return self.projects_liked.remove(project)

    def has_liked(self, project):
        return self.projects_liked.filter(pk=project.pk).exists()
    
    def name(self): 
        return f"{self.first_name} {self.last_name}"

    USERNAME_FIELD = 'username'
    # REQUIRED_FIELDS = ['username']

    objects = UserManager()

    def __str__ (self):
        return f"{self.email}"


class Skill(AbstractModel):
    owner = models.ForeignKey('core_user.User', on_delete=models.CASCADE)
    nane = models.CharField(max_length=64)

    def __str__(self) -> str:
        return self.name