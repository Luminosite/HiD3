from django.http import HttpResponse
from django.shortcuts import render


def index(request):
	return render(request, 't.html')


def hello(_):
	return HttpResponse("Hello World!")
