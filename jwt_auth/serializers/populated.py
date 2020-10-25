from .lifehacks.serializers.common import LifehackSerializer
from ..serializers.common import UserSerializer

class PopulatedUserSerializer(UserSerializer):

    created_lifehack = LifehackSerializer(many=True)
    category = LifehackSerializer(many=True)
