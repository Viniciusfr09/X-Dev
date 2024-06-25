const btnAvancar = document.getElementById("btn-avancar");
const btnVoltar = document.getElementById('btn-voltar');
let cartaoAtual = 0;
const cartoes = document.querySelectorAll('.cartao');

btnAvancar.addEventListener("click", function () {
    const ehUltimoCartao = cartaoAtual === cartoes.length - 1;
    if (ehUltimoCartao) return;

    esconterCartoesSelecionado();

    cartaoAtual++;
    mostrarCartao();

});

btnVoltar.addEventListener("click", function () {
    const ehPrimeiroCartao = cartaoAtual === 0;
    if (ehPrimeiroCartao) return;

    esconterCartoesSelecionado();

    cartaoAtual--;
    mostrarCartao();

});

function mostrarCartao() {
    cartoes[cartaoAtual].classList.add('selecionado');
}

function esconterCartoesSelecionado() {
    const cartaoselecionado = document.querySelector('.selecionado');
    cartaoselecionado.classList.remove('selecionado');
}
