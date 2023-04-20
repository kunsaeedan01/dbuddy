import pytest 
from core.user.models import User

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

@pytest.fixture
def user(db) -> User:
    return User.objects.create(**data_user)