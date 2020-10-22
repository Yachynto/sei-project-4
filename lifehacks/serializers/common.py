from rest_framework import serializers
from ..models import Lifehack

class LifehackSerializer(serializers.ModelSerializer):

    class Meta:
        model = Lifehack
        fields = '__all__'
        