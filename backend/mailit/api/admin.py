from django.contrib import admin
from .models import TempInbox, Email

admin.site.register(TempInbox)
admin.site.register(Email)