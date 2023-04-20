import pytest
from core.fixtures.user import user
from core.project.models import Project


@pytest.fixture
def project(db, user):
    return Project.objects.create(author=user, description="test project description")
    