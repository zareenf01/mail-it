from django.urls import path
from .views import create_inbox, get_inbox, get_emails, dummy_emails, inbox_details, mark_read

urlpatterns = [
    path("inbox/create/", create_inbox),
    path("inbox/<str:email>/", get_inbox),
    path("inbox/<str:email>/emails/", get_emails),
    path("inbox/<int:inbox_id>/add-email/", dummy_emails),
    path("inbox/<int:inbox_id>/detail/", inbox_details),
    path("inbox/<int:email_id>/read/", mark_read)
]
