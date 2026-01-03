from django.urls import path
from .views import create_inbox, get_inbox, get_emails, dummy_emails

urlpatterns = [
    path("inbox/create/", create_inbox),
    path("inbox/<str:email>/", get_inbox),
    path("inbox/<str:email>/emails/", get_emails),
    path("inbox/<str:email>/add-email/", dummy_emails)
]
