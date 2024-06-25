const btnAvancar = document.getElementById("btn-avancar");
const btnVoltar = document.getElementById('btn-voltar');
let cartaoAtual = 0;
const cartoes = document.querySelectorAll('.cartao');

btnAvancar.addEventListener("click", function () {

    if (cartaoAtual === cartoes.length - 1) return;

    const cartaoselecionado = document.querySelector('.selecionado');
    cartaoselecionado.classList.remove('selecionado')

    cartaoAtual++;
    cartoes[cartaoAtual].classList.add('selecionado');

});

btnVoltar.addEventListener("click", function () {
    if (cartaoAtual === 0) return;
    
    const cartaoselecionado = document.querySelector('.selecionado');
    cartaoselecionado.classList.remove('selecionado')

    cartaoAtual--;
    cartoes[cartaoAtual].classList.add('selecionado');

});