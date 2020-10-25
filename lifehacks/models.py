from django.db import models

# Create your models here.
class Lifehack(models.Model):
    name = models.CharField(max_length=50, unique=True)
    image = models.CharField(max_length=300)
    text =  models.CharField(max_length=300)
    category = models.ManyToManyField(
        'categories.Category',
        related_name='lifehack'
    )
    owner = models.ForeignKey(
        'jwt_auth.User',
        related_name="created_lifehack",
        on_delete=models.CASCADE
    )

    def __str__(self):
        return f'{self.name}'
        