from django.urls import path
from .views import LifehackListView

urlpatterns = [
    path('', LifehackListView.as_view()),
    # path('<int:pk>/', LifehackDetailView.as_view()),
]
