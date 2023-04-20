import pytest
from core.user.models import User

# Create your tests here.
data_user = {
"username": "test_user",
"password": "0512unit",
"first_name": "Test",
"last_name": "User",
"email": "test_user@gmail.com",
"gender": "M",
"status": 0,
"faculty": "MT"
}

data_superuser = {
    "username": "test_superuser",
    "email": "testsuperuser@gmail.com",
    "first_name": "Test",
    "last_name": "Superuser",
    "password": "test_password"
} 

@pytest.mark.django_db
def test_create_user():
    user = User.objects.create_user(**data_user)
    assert user.username == data_user["username"]
    assert user.email == data_user["email"]
    assert user.first_name == data_user["first_name"]
    assert user.last_name == data_user["last_name"]
    assert user.gender == data_user["gender"]
    assert user.status == data_user["status"]
    assert user.faculty == data_user["faculty"]


@pytest.mark.django_db
def test_create_superuser():
    user = User.objects.create_superuser(**data_superuser)
    assert user.username == data_superuser["username"]
    assert user.email == data_superuser["email"]
    assert user.first_name == data_superuser["first_name"]
    assert user.last_name == data_superuser["last_name"]
    assert user.is_superuser == True
    assert user.is_staff == True