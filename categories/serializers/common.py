from rest_framework import serializers

from ..models import LifehackCategory

class LifehackCategorySerializer(serializers.ModelSerializer):

    class Meta:
        model = LifehackCategory
        fields = '__all__'
