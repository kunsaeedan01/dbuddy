from drf_yasg.views import get_schema_view
from drf_yasg import openapi


schema_view = get_schema_view(
    openapi.Info(
        title = "DiploMate API", 
        default_version='v1', 
        description='Endpoints of DiploMate API',
        contact = openapi.Contact(email="rakhat.erezhepov02@gmail.com"),
        license=openapi.License(name="MIT License")
    ),
    public=True,
)