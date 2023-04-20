import pytest
from core.fixtures.user import user
from core.project.models import Project

@pytest.mark.django_db
def test_create_project(user):
    project = Project.objects.create(author=user, description="Test Project description")
    assert project.author == user
    assert project.description == "Test Project description"