const btnAvancar = document.getElementById("btn-avancar");
let cartaoAtual = 0;
btnAvancar.addEventListener("click", function (){
    console.log('cliquei');
    
    const cartoes = document.querySelectorAll('.cartao');
    cartaoAtual++;
    cartoes[cartaoAtual].classList.add('selecionado');

    
});