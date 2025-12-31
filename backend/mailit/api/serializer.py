from rest_framework import serializers
from .models import TempInbox, Email


class EmailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Email
        fields = "__all__"



class TempInboxSerializer(serializers.ModelSerializer):
    class Meta:
        model = TempInbox
        fields = "__all__"

