const botaoNao = document.querySelector('.botao-nao');

botaoNao.addEventListener('click', () => {
  window.alert(
    'Apenas usuários maiores de idade podem participar das promoções.'
  );
});
