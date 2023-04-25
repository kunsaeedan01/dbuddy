from rest_framework import status
from core.fixtures.user import user
from core.fixtures.project import project


class TestProjectViewSet:
    endpoint = '/api/project'

    def test_like(self, client, user, project):
        client.force_authenticate(user=user)
        response = client.get(self.endpoint)
        assert response.status_code == status.HTTP_200_OK
        assert response.data["count"] == 1

    def test_retrieve(self, client, user, project):
        client.force_authenticate(user=user)
        response = client.get(self.endpoint + str(project.public_id) + '/')
        assert response.status_code == status.HTTP_200_OK
        assert response.data['id'] == project.public_id.hex
        assert response.data['description'] == project.description
        assert response.data['author']['id'] == project.auhtor.public_id.hex

    def test_create(self, client, user):
        client.force_authenticate(user=user)
        data = {
            "description": "Test body description",
            "author": user.public_id.hex
        }
        response = client.post(self.endpoint, data)
        assert response.status_code == status.HTTP_201_CREATED
        assert response.data["description"] == data["description"]
        assert response.data['author']['id'] == user.public_id.hex

    def test_update(self, client, user, project):
        client.force_authenticate(user=user)
        data = {
            "description": "Test body description",
            "author": user.public_id.hex
        }
        response = client.put(self.endpoint + str(project.public_id) + "/", data)
        assert response.status_code == status.HTTP_200_OK
        assert response.data["description"] == data["description"]

    def test_delete(self, client, user, project):
        client.force_authenticate(user=user)
        response = client.delete(self.endpoint + str(project.public_id) + "/")
        assert response.status_code == status.HTTP_204_NO_CONTENT

    def test_create_anonymous(self, client):
        data = {
            "description": "Test body description",
            "author": "test_user"
        }
        response = client.post(self.endpoint, data)
        assert response.status_code ==status.HTTP_401_UNAUTHORIZED

    def test_update_anonymous(self, client, project):
        data = {
            "description": "Test body description",
            "author": "test_user"
        }
        response = client.put(self.endpoint + str(project.public_id) + "/", data)
        assert response.status_code == status.HTTP_401_UNAUTHORIZED

    def test_delete_anonymous(self, client, project):
        response = client.delete(self.endpoint + str(project.public_id) + "/")
        assert response.status_code == status.HTTP_401_UNAUTHORIZED
        
