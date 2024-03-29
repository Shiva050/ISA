# mainapp/views.py
from django.shortcuts import render
from .models import TeamMembers

# Create your views here.

def home(request):
    advisor = TeamMembers.objects.filter(role='Faculty-Advisor').first()
    team_members = TeamMembers.objects.exclude(pk=advisor.pk)
    return render(request, 'mainapp/home.html', {'advisor': advisor, 'team_members': team_members})

def membership(request):
    return render(request, 'mainapp/membership.html')

def housing(request):
    return render(request, 'mainapp/housing.html')

def events(request):
    return render(request, 'mainapp/events.html')

def about(request):
    return render(request, 'mainapp/about.html')

def join(request):
    return render(request, 'mainapp/join.html')

def donate(request):
    return render(request, 'mainapp/donate.html')

def login(request):
    return render(request, 'mainapp/login.html')
