from django.db import models


# Create your models here.

class Curso(models.Model):
    nome = models.CharField(max_length=50)
    date_create = models.DateTimeField(verbose_name='Data de Criação', auto_now_add=True)
    descricao = models.CharField(max_length=100, default='')
    ativo = models.BooleanField()
    preco = models.DecimalField(max_digits=10, decimal_places=2)
    categoria = models.CharField(max_length=30, default='')

    def __str__(self):
        return self.nome
