from django.shortcuts import render

from home.models import Produto


def index(request):
  sql = Produto.objects.all()
  return render(request, 'home/index.html', {'produtos': sql})


def detalhes(request, idpro):
  sql = Produto.objects.get(id=idpro)
  contexto = {
    'detProduto': sql,
  }
  return render(request, 'home/det_produto.html', contexto)

def salvar_produto(request):
  if str(request.method) != "POST":
    return render(request, 'home/produto_cadastro.html')

  nome_ = request.POST.get('nome')
  preco_ = request.POST.get('preco')
  quantidade_ = request.POST.get('quantidade')
  tamanho_ = request.POST.get('tamanho')
  categoria_ = request.POST.get('categoria')
  foto_ = request.FILES.get('foto')
  status_ = request.POST.get('status')

  dados = Produto.objects.create(
    nome = nome_,
    preco = preco_,
    quantidade = quantidade_,
    tamanho = tamanho_,
    categoria_id = categoria_,
    foto = foto_,
    status = status_,
  )

  dados.save();

  return render(request, 'home/produto_cadastro.html')
