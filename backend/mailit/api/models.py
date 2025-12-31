from django.db import models

class TempInbox(models.Model):
    email = models.EmailField(unique=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.email


class Email(models.Model):
    inbox = models.ForeignKey(TempInbox, related_name='emails', on_delete=models.CASCADE)
    subject = models.CharField(max_length=200)
    body = models.TextField()
    sender = models.EmailField()
    received_at = models.DateTimeField(auto_now_add=True)
    is_read = models.BooleanField(default=False)


 
    
    def __str__(self):
        return self.subject
