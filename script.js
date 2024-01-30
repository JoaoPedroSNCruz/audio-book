const audioCapitulo = document.getElementById('audio-capitulo');
const botaoAnterior = document.getElementById('anterior');
const botaoPlayPause = document.getElementById('play-pause');
const botaoAvancar = document.getElementById('avancar');
const nomeCapitulo = document.getElementById('capitulo');

const numeroCapitulos = 10;
let isPlaying = 0;
let capituloAtual = 1;

function tocarFaixa() {
  audioCapitulo.play();
  botaoPlayPause.classList.remove('bi-play-circle-fill');
  botaoPlayPause.classList.add('bi-pause-circle-fill');
  isPlaying = 1;
};

function pausarFaixa() {
  audioCapitulo.pause();
  botaoPlayPause.classList.remove('bi-pause-circle-fill');
  botaoPlayPause.classList.add('bi-play-circle-fill');
  isPlaying = 0;
}

function voltarFaixa() {
  if (capituloAtual === 1) {
    capituloAtual = numeroCapitulos;
  } else {
    capituloAtual = capituloAtual - 1;
  }
  audioCapitulo.src = "./books/dom-casmurro/"+ capituloAtual +".mp3";
  tocarFaixa();
  trocarNomeFaixa();
}

function tocarOuPausar() {
  if (isPlaying === 0) {
    tocarFaixa();
  } else {
    pausarFaixa();
  };
}

function proximaFaixa() {
  if (capituloAtual === numeroCapitulos) {
    capituloAtual = 1;
  } else {
    capituloAtual = capituloAtual + 1;
  }
  audioCapitulo.src = "./books/dom-casmurro/"+ capituloAtual +".mp3";
  tocarFaixa();
  trocarNomeFaixa();
}

function trocarNomeFaixa() {
  nomeCapitulo.innerText = 'Capítulo '+ capituloAtual;
}

botaoAnterior.addEventListener('click', voltarFaixa);
botaoPlayPause.addEventListener('click', tocarOuPausar);
botaoAvancar.addEventListener('click', proximaFaixa);