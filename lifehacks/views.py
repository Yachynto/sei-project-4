from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from .models import Lifehack
from .serializers.common import LifehackSerializer

# Create your views here.

class LifehackListView(APIView):
    '''Handles GET and POST of lifehacks'''

    def get(self, _request):
        lifehacks_list = Lifehack.objects.all()
        serialized_lifehacks_list = LifehackSerializer(lifehacks_list, many=True)
        return Response(serialized_lifehacks_list.data, status=status.HTTP_200_OK)

    def post(self, request):
        request.data['owner'] = request.user.id
        lifehack_create = LifehackSerializer(data=request.data)
        if lifehack_create.is_valid():
            lifehack_create.save()
            return Response(lifehack_create.data, status=status.HTTP_201_CREATED)
        return Response(lifehack_create.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)
        