/* let titulo = document.querySelector('h1');
titulo.innerHTML = 'Jogo do número secreto';

let paragrafo = document.querySelector('p');
paragrafo.innerHTML = 'Escolha um número secreto entre 1 e 10'; */

let listaDeNumerosSorteados = [];
let numeroLimite = 8;
let numeroSecreto = gerarNumeroAleatorio();
console.log ('Esse é o número secreto: ' + numeroSecreto);
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let nome = document.querySelector(tag);
    nome.innerHTML = texto;
    // responsiveVoice.speak (texto, 'Brazilian Portuguese Female', {rate:1.2}); TESTAR DEPOIS
    }

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1); 
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;
    if (quantidadeDeElementosNaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    }
    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
    return gerarNumeroAleatorio();
    } else {
    listaDeNumerosSorteados.push(numeroEscolhido);
    console.log (listaDeNumerosSorteados);
    console.log ('Esse é o número escolhido: ' + numeroEscolhido); // USEI PARA DEBUG, VOU RETIRAR DEPOIS
    return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    let mensagemParaExibicao = ('Escolha um número secreto entre 1 e ' + numeroLimite);
    exibirTextoNaTela('p', mensagemParaExibicao);
}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = 'Você acertou o número secreto com ' + tentativas + ' ' + palavraTentativa;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
        exibirTextoNaTela('p', 'O número secreto é menor!');
        } else {
            exibirTextoNaTela('p', 'O número secreto é maior!');
        }
    }
tentativas++;  
limparCampo();
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').removeAttribute('disabled');
    document.getElementById('reiniciar').setAttribute('disabled', true);
}