//Aqui rodará o código JavaScript da aplicação.
 
// const play = document.querySelector('#play');
// const seta1 = document.querySelector('#seta1');
// const seta2 = document.querySelector('#seta2');

//Som + navegação incial 
function playSoundAndNavegate(){
    const audio = new Audio("./public/sounds/play_sound.wav");
    audio.play();
    setTimeout(() => {
    window.location.assign("./src/page2/pagina2.html");
  }, 1000); // espera 1s
}

//Som das setinhas da página 2
function playSound(){
    const audio2 = new Audio("../../public/sounds/select.mp3");
    audio2.play();
}

function escreverDevagar(texto,intervalo =100){
let i = 0;
const saida = document.getElementById("saida"); //resgada tag do html
saida.innerHTML = "" //limpa o conteúdo

const timer = setInterval(() => {
    saida.innerHTML += texto[i];
    i++;
    if (i >= texto.length) clearInterval(timer);
}, intervalo);  
};

//escreverDevagar("texto devagar",100);