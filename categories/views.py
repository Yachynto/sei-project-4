# Create your views here.
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticatedOrReadOnly

from .models import Category
from .serializers.common import CategorySerializer


class CategoryListView(APIView):

    permission_classes = (IsAuthenticatedOrReadOnly, )

    def get(self, _request):
        category_list = Category.objects.all()
        serialized_category_list = CategorySerializer(category_list, many=True)
        return Response(serialized_category_list.data, status=status.HTTP_200_OK)

    def post(self, request):
        request.data['owner'] = request.user.id
        category_to_create = CategorySerializer(data=request.data)
        if category_to_create.is_valid():
            category_to_create.save()
            return Response(category_to_create.data, status=status.HTTP_201_CREATED)
        return Response(category_to_create.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)
