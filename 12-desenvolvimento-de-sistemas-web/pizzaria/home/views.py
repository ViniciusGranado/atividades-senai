from django.shortcuts import render

# Create your views here.
from home.models import Produto


def index(request):
    sql = Produto.objects.all()
    return render(request,'home/index.html',{'produtos':sql})