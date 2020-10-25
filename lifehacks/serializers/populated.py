# pylint: disable=no-name-in-module, import-error
from jwt_auth.serializers.nested import NestedUserSerializer
from categories.serializers.common import CategorySerializer
from ..serializers.common import LifehackSerializer

class PopulatedLifehackSerializer(LifehackSerializer):
    owner = NestedUserSerializer()
    category = CategorySerializer(many=True)
