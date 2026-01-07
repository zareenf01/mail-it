from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

from .models import TempInbox, Email
from .serializer import TempInboxSerializer, EmailSerializer
import uuid

@api_view(['POST'])
def create_inbox(request):
    random_email = f"{uuid.uuid4().hex[:8]}@temp.mailit.dev"
    inbox = TempInbox.objects.create(email= random_email)
    serializer = TempInboxSerializer(inbox)

    return Response(serializer.data, status=status.HTTP_201_CREATED)


@api_view(['GET'])
def get_inbox(request, email):
    try:
        inbox = TempInbox.objects.get(email=email)
    except TempInbox.DoesNotExist:
        return Response(
            {"error": "Inbox not found"},
            status=status.HTTP_404_NOT_FOUND
        )

    serializer = TempInboxSerializer(inbox)
    return Response(serializer.data, status=status.HTTP_200_OK)

@api_view(['GET'])
def get_emails(request, email):
    try:
        inbox = TempInbox.objects.get(email=email)
    except TempInbox.DoesNotExist:
        return Response({
            "error": "inbox does not exists"
        },
        status=status.HTTP_404_NOT_FOUND)
    
    emails = inbox.emails.all().order_by("-recieved_at")
    serializer = EmailSerializer(emails, many=True)

    return Response(serializer.data)
    

@api_view(['POST'])
def dummy_emails(request, email):
    try:
        inbox = TempInbox.objects.get(email=email)
    except TempInbox.DoesNotExist:
        return Response({
            "error": "inbox does not exists"
        },
        status=status.HTTP_404_NOT_FOUND
        )
    email_obj = Email.objects.create(
        inbox=inbox,
        subject = "Welcome to Mailit",
        sender = "noreply@example.com",
        body = "This is a dummy email for testing"
    )

    serializer = EmailSerializer(email_obj)
    return Response(serializer.data, status=status.HTTP_201_CREATED)

@api_view(['GET'])
def inbox_details(request, email):
    try:
        inbox = TempInbox.objects.get(email=email)
    except TempInbox.DoesNotExist:
        return Response({
            "error": "inbox does not exists"
        },
        status=status.HTTP_404_NOT_FOUND)
    
    inbox_data = TempInboxSerializer(inbox).data
    email_data = EmailSerializer(inbox.emails.all().order_by("-received_at"), many=True).data

    return Response({
        "inbox": inbox_data,
        "emails": email_data
    })