# Generated by Django 3.1.2 on 2020-10-22 18:02

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('categories', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Lifehack',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50, unique=True)),
                ('image', models.CharField(max_length=300)),
                ('text', models.CharField(max_length=300)),
                ('category', models.ManyToManyField(related_name='lifehack', to='categories.LifehackCategory')),
            ],
        ),
    ]
