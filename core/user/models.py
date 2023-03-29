import uuid
from django.contrib.auth.hashers import make_password
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
from django.core.exceptions import ObjectDoesNotExist
from django.db import models
from django.http import Http404
from django.utils.translation import gettext_lazy as _

class UserManager(BaseUserManager):

    def get_user_by_public_id(self, public_id):
        try:
            instance = self.get(public_id=public_id)
            return instance
        except(ObjectDoesNotExist, ValueError, TypeError):
            return Http404

    def create_user(self, username, email, password=None, **kwargs):
        if username is None:
            raise TypeError('User must have an username')
        if email is None:
            raise TypeError('User must have an email')
        if password is None:
            raise TypeError('User must have a password')
        user = self.model(username=username, email=self.normalize_email(email))
        user.set_password(password)  # hash the password before storing
        user.save(using=self._db)
        return user

    def create_superuser(self, username, email, password, **kwargs):
        if password is None:
            raise TypeError('Superusers must have a password.')
        if email is None:
            raise TypeError('Superusers must have an email.')
        if username is None:
            raise TypeError('Superusers must have a username.')
        user = self.create_user(username, email, password, **kwargs)
        user.is_superuser = True
        user.save(using=self._db)

        return user


class User(AbstractBaseUser, PermissionsMixin):

    GENDER_CHOICE = (
		("M", _("Male")),
		("F", _("Female")),
	)

    STATUS_CHOICE = (
        (0, _('Coordinator')),
        (1, _('Instructor')),
        (2, _('Student')),
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

    public_id = models.UUIDField(db_index=True, unique=True, default=uuid.uuid4, editable=False)
    username = models.CharField(db_index=True, max_length=255, unique=True)
    password = models.CharField(max_length=128)
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    email = models.EmailField(db_index=True, unique=True)
    gender = models.CharField(_("Gender"), choices=GENDER_CHOICE, default="M", max_length=1)
    status = models.IntegerField(_('Role status'), choices=STATUS_CHOICE, null=True, blank=True, default=2)
    faculty = models.CharField(_('Study/work faculty'), choices=FACULTY_CHOICE, max_length=4)
    group = models.CharField(max_length=16, null=True, blank=True)
    is_active = models.BooleanField(default=True)
    is_superuser = models.BooleanField(default=False)
    created = models.DateTimeField(auto_now=True)
    updated = models.DateTimeField(auto_now_add=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

    objects = UserManager()

    def __str__ (self):
        return f"{self.email}"

