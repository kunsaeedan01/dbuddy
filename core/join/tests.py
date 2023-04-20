import pytest 
from core.fixtures.user import user
from core.fixtures.project import project
from core.join.models import Join


@pytest.mark.django_db
def test_create_join(user, project):
    join = Join.objects.create(applicant=user, project=project, message="I want to join, I have experience in React")
    assert join.applicant == user
    assert join.project == project
    assert join.message == "I want to join, I have experience in React"