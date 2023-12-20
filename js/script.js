const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const clouds = document.querySelector ('.clouds');
const gameover = document.querySelector ('.gameover');
const restartButton = document.querySelector ('.restartButton');
const desenvolvido = document.querySelector ('.desenvolvido')


const jump = () => {
mario.classList.add ('jump');

setTimeout (() => {
mario.classList.remove('jump');

}, 500);
}


var pontuacao = 0;
function aumentarPontuacao() {

    pontuacao += 1;

    document.getElementById('displayPontuacao').innerText = pontuacao;
}


const loop = setInterval (() => {

const pipePosition = pipe.offsetLeft;
const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','');
const cloudsPosition = clouds.offsetLeft;
aumentarPontuacao();

if (pipePosition <120 && pipePosition > 0 && marioPosition < 80) {

    pipe.style.animation= 'none';
    pipe.style.left = `${pipePosition}px`;

    mario.style.animation= 'none';
    mario.style.bottom = `${marioPosition}px`;


    mario.src = './imagens/game-over.png';
    mario.style.width = '75px';
    mario.style.marginLeft = '50px';


    gameover.style.zIndex = '1';

    restartButton.style.zIndex = '1';

    desenvolvido.style.zIndex = '1';

    clouds.style.animation ='none';
    clouds.style.left = `${cloudsPosition}px`;

    displayPontuacao

    clearInterval (loop);

}
}, 10);

document.addEventListener('keydown', jump); 
document.addEventListener('touchstart', jump); 