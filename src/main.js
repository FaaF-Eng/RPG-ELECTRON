//Aqui rodará o código JavaScript da aplicação.
 
// const play = document.querySelector('#play');
// const seta1 = document.querySelector('#seta1');
// const seta2 = document.querySelector('#seta2');




// [ TELA INICIAL ]
//Som + navegação incial 
function playSoundAndNavegate(){
    const audio = new Audio("./public/sounds/play_sound.wav");
    audio.play();
    setTimeout(() => {
    window.location.assign("./src/page2/pagina2.html");
  }, 1000); // espera 1s
}

// [ PAGINA 2 ]
//Som das setinhas da página 2 + seleção de personagens
function playSoundAndNavegate2(){
    const audio3 = new Audio("../../public/sounds/select.mp3");
    audio3.play();
    setTimeout(() => {
    window.location.assign("../../src/page3/pagina3.html");
  }, 1000); // espera 1s
}
// botão play para iniciar o jogo
function StartGame(){
    const audio5 = new Audio("../../public/sounds/play_sound.wav");
    audio5.play();
    setTimeout(() => {
    window.location.assign("../../src/page4/pagina4.html");
  }, 1000); // espera 1s
}


// [ PAGINA 3 ]
//Som das setinhas da página 3 + seleção de personagens
function playSoundAndNavegate3(){
    const audio4 = new Audio("../../public/sounds/select.mp3");
    audio4.play();
    setTimeout(() => {
    window.location.assign("../../src/page2/pagina2.html");
  }, 1000); // espera 1s
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

//escreverDevagar("BATATA",100);