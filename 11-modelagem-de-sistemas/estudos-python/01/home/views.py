from django.shortcuts import render


# Create your views here.
from home.models import Curso


def index(request):
    data = Curso.objects.all()
    return render(request, 'home/index.html', {'data': data})

