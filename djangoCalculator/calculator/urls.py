from django.urls import path
from . import views
from calculator.views import CalcView

urlpatterns = [
    path('', CalcView.as_view(), name = 'calc-home'),
]