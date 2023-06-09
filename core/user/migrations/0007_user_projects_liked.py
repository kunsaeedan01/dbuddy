# Generated by Django 4.0 on 2023-04-04 06:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core_project', '0003_project_edited'),
        ('core_user', '0006_alter_user_created_alter_user_updated'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='projects_liked',
            field=models.ManyToManyField(related_name='liked_by', to='core_project.Project'),
        ),
    ]
