from django.urls import path
from .views import *

urlpatterns = [
    path('chest/', ChestView.as_view()),
    path('reward/category/', RewardCategoryView.as_view()),
    path('reward/items/', RewardItemsView.as_view()),
    path('chest/records/', ChestRecordsView.as_view()),
    path('hest/records/<int:id>/', ChestRecordsView.as_view()),
]