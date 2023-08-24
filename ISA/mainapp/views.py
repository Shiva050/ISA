# mainapp/views.py
from django.shortcuts import render

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
    return render(request, 'mainapp/about.html')

def join(request):
    return render(request, 'mainapp/join.html')

def donate(request):
    return render(request, 'mainapp/donate.html')

def login(request):
    return render(request, 'mainapp/login.html')
