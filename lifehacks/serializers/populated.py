# pylint: disable=no-name-in-module, import-error
from jwt_auth.serializers.nested import NestedUserSerializer
from ..serializers.common import LifehackSerializer

class PopulatedLifehackSerializer(LifehackSerializer):
    owner = NestedUserSerializer()
    category = NestedUserSerializer(many=True)
