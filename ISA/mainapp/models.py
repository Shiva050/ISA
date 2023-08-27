from django.db import models

# Create your models here.
class TeamMembers(models.Model):
    name = models.CharField(max_length=100)
    role = models.CharField(max_length=100)
    image = models.ImageField(upload_to='team_images/')
    facebook_link = models.URLField(blank=True)
    instagram_link = models.URLField(blank=True)
    email = models.EmailField(blank=True)