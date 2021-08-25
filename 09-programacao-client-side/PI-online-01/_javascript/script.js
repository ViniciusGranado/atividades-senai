const video = document.querySelector('.player');
video.width = 640;

const play = () => {
  video.paused ? video.play() : video.pause();
};
const ampliar = () => {
  video.width += 100;
};
const reduzir = () => {
  video.width !== 340 && (video.width -= 100);
};
const tamanhoNormal = () => {
  video.width = 640;
};
const telaCheia = () => {
  video.requestFullscreen();
};
const aumentaVolume = () => {
  video.volume !== 1 && (video.volume += 0.2);
};
const diminuiVolume = () => {
  video.volume >= 0.1 && (video.volume -= 0.2);
};
const mute = () => {
  video.muted = !video.muted;
};

const btnPlay = document.querySelector('.play');
btnPlay.addEventListener('click', play);

const btnAmpliar = document.querySelector('.ampliar');
btnAmpliar.addEventListener('click', ampliar);

const btnReduzir = document.querySelector('.reduzir');
btnReduzir.addEventListener('click', reduzir);

const btnTamanhoNormal = document.querySelector('.tamanho-normal');
btnTamanhoNormal.addEventListener('click', tamanhoNormal);

const btnTelaCheia = document.querySelector('.tela-cheia');
btnTelaCheia.addEventListener('click', telaCheia);

const btnAumentaVolume = document.querySelector('.aumenta-volume');
btnAumentaVolume.addEventListener('click', aumentaVolume);

const btnDiminuiVolume = document.querySelector('.diminui-volume');
btnDiminuiVolume.addEventListener('click', diminuiVolume);

const btnMute = document.querySelector('.mute');
btnMute.addEventListener('click', mute);

