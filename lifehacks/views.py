from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from rest_framework.exceptions import NotFound, PermissionDenied
from rest_framework.permissions import IsAuthenticatedOrReadOnly

from .serializers.populated import PopulatedLifehackSerializer
from .models import Lifehack
from .serializers.common import LifehackSerializer

# Create your views here.

class LifehackListView(APIView):
    '''Handles GET and POST of lifehacks'''

    permission_classes = (IsAuthenticatedOrReadOnly, )

    def get(self, _request):
        lifehacks_list = Lifehack.objects.all()
        serialized_lifehacks_list = PopulatedLifehackSerializer(lifehacks_list, many=True)
        return Response(serialized_lifehacks_list.data, status=status.HTTP_200_OK)

    def post(self, request):
        request.data['owner'] = request.user.id
        lifehack_create = LifehackSerializer(data=request.data)
        if lifehack_create.is_valid():
            lifehack_create.save()
            return Response(lifehack_create.data, status=status.HTTP_201_CREATED)
        return Response(lifehack_create.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)
        

class LifehackDetailView(APIView):

    permission_classes = (IsAuthenticatedOrReadOnly, )

    def get_lifehack(self, pk):
        try:
            return Lifehack.objects.get(pk=pk)
        except Lifehack.DoesNotExist:
            raise NotFound()

    def is_lifehack_owner(self, lifehack, user):
        if lifehack.owner.id != user.id:
            raise PermissionDenied()

    def get(self, _request, pk):
        lifehack = self.get_lifehack(pk=pk)
        serialized_lifehack = PopulatedLifehackSerializer(lifehack)
        return Response(serialized_lifehack.data, status=status.HTTP_200_OK)

    def put(self, request, pk):
        lifehack_update = self.get_lifehack(pk=pk)
        self.is_lifehack_owner(lifehack_update, request.user)
        updated_lifehack = LifehackSerializer(lifehack_update, data=request.data)
        if updated_lifehack.is_valid():
            updated_lifehack.save()
            return Response(updated_lifehack.data, status=status.HTTP_202_ACCEPTED)
        return Response(updated_lifehack.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)

    def delete(self, request, pk):
        lifehack_delete = self.get_lifehack(pk=pk)
        self.is_lifehack_owner(lifehack_delete, request.user)
        lifehack_delete.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
        