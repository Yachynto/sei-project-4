from rest_framework import serializers

from ..models import LifehackType

class LifehackTypeSerializer(serializers.ModelSerializer):

    class Meta:
        model = LifehackType
        fields = '__all__'
