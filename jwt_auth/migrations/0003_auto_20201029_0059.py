# Generated by Django 3.1.2 on 2020-10-29 00:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('jwt_auth', '0002_auto_20201025_1400'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='firstName',
            field=models.CharField(blank=True, max_length=20),
        ),
        migrations.AddField(
            model_name='user',
            name='lastName',
            field=models.CharField(blank=True, max_length=20),
        ),
    ]
