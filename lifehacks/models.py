from django.db import models

# Create your models here.
class Lifehack(models.Model):
    title = models.CharField(max_length=50, unique=True)
    image = models.CharField(max_length=300)
    text =  models.CharField(max_length=300)

    def __str__(self):
        return f'{self.title}'
        