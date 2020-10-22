from datetime import datetime, timedelta
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.exceptions import PermissionDenied
# from rest_framework.permissions import IsAuthenticated
from rest_framework import status
from django.contrib.auth import get_user_model
from django.conf import settings
import jwt

from .serializers.common import UserSerializer

User = get_user_model()

# Create your views here.

class RegisterView(APIView):

    def post(self, request):
        create_user = UserSerializer(data=request.data)
        if create_user.is_valid():
            create_user.save()
            return Response({'message': 'Registration Successful'}, status=status.HTTP_201_CREATED)
        return Response(create_user.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)

class LoginView(APIView):

    def get_user(self, email):
        try:
            return User.objects.get(email=email)
        except User.DoesNotExist:
            raise PermissionDenied(detail='Invalid Credentials')

    def post(self, request):
        email = request.data.get('email')
        password = request.data.get('password')
        login_user = self.get_user(email=email)
        if not login_user.check_password(password):
            raise PermissionDenied(detail='Invalid Credentials')
        dt = datetime.now() + timedelta(days=7)
        token = jwt.encode(
            { 'sub': login_user.id, 'exp': int(dt.strftime('%s')) },
            settings.SECRET_KEY,
            algorithm='HS256'
        )
        return Response({'token': token, 'message': f'Welcome Back {login_user.username}'})

# class ProfileView(APIView):

#     permission_classes = (IsAuthenticated, ) #? Comma at the end to be a tuple

#     def get(self, request):
#         user = User.objects.get(pk=request.user.id)
#         serialized_user = UserSerializer(user)
#         return Response(serialized_user.data, status=status.HTTP_200_OK)
