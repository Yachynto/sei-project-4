# pylint: disable=no-name-in-module, import-error
from lifehacks.serializers.common import LifehackSerializer
from ..serializers.common import UserSerializer

class PopulatedUserSerializer(UserSerializer):

    createdLifehack = LifehackSerializer(many=True)
