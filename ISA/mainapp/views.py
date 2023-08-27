# mainapp/views.py
from django.shortcuts import render
from .models import TeamMembers

# Create your views here.

def home(request):
    return render(request, 'mainapp/home.html')

def membership(request):
    return render(request, 'mainapp/membership.html')

def housing(request):
    return render(request, 'mainapp/housing.html')

def events(request):
    return render(request, 'mainapp/events.html')

def about(request):
    advisor = TeamMembers.objects.filter(role='Faculty-Advisor').first()
    team_members = TeamMembers.objects.exclude(pk=advisor.pk)
    return render(request, 'team.html', {'advisor': advisor, 'team_members': team_members})

def join(request):
    return render(request, 'mainapp/join.html')

def donate(request):
    return render(request, 'mainapp/donate.html')

def login(request):
    return render(request, 'mainapp/login.html')
