from django.contrib import admin

from home.models import Produto,Categoria

class detCategoria(admin.ModelAdmin):
    list_display = ('id','nome')

class detProduto(admin.ModelAdmin):
    list_display = ('id','nome','preco','quantidade','tamanho','status')
    list_editable = ('status',)
    list_display_links = ('nome',)
    search_fields = ('nome',)
    list_per_page = 10

admin.site.register(Produto,detProduto)
admin.site.register(Categoria,detCategoria)
