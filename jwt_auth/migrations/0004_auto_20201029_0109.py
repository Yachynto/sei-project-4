# Generated by Django 3.1.2 on 2020-10-29 01:09

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('jwt_auth', '0003_auto_20201029_0059'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='user',
            name='firstName',
        ),
        migrations.RemoveField(
            model_name='user',
            name='lastName',
        ),
    ]
