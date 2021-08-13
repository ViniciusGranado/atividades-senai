const modal = document.querySelector('.fundo-modal');
const imagens = document.querySelectorAll('img');
const imagemModal = document.querySelector('.imagem-modal');

const adicionarSrcImagemModal = (source) => {
  imagemModal.setAttribute('src', source);
};
const removerSrcImagemModal = () => {
  imagemModal.removeAttribute('src');
}

const abrirModal = (event) => {
  adicionarSrcImagemModal(event.target.attributes.src.value);
  modal.classList.add('active');
};
const fecharModal = () => {
  removerSrcImagemModal();
  modal.classList.remove('active');
};

modal.addEventListener('click', fecharModal);
imagens.forEach((imagem) => {
  imagem.addEventListener('click', abrirModal);
});
