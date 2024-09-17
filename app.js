let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

exibirMensagemInicial();

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto){
            exibirTextoNaTela('p', 'O número secreto é menor!');
        } else {
            exibirTextoNaTela('p', 'O número secreto é maior!');
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroLimite){
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

/*
// Exercicios Aula 02
//1.
function olaMundo(){
    console.log('Olá Mundo');
}
olaMundo();

//2.
function olaNome(nome){
    console.log(`Olá ${nome}`);
}
olaNome('Tasso');

//3.
function dobraNumero(numero)
    return numero*2;
}
dobraNumero(10);

//4.
function media(num1, num2, num3){
    let resultado = (num1 + num2 + num3)/3;
    console.log(resultado);
    return resultado;
}
media(20,50,99);

//5.
function maior(num1, num2) {
    if (num1 > num2){
        console.log(num1);
        return num1;
    } else {
        console.log(num2);
        return num2;

    }
}
maior(1845,84);

//6.
function quadrado(numero){
    numero = numero*numero;
    console.log(numero);
    return numero;
}
quadrado(8);


// Exercicios Aula 03
//1.
function calcularIMC(peso, altura){
    return peso / (altura*altura);
}
console.log(calcularIMC(85.3,1.89));

//2.
function calcularVetorial(numero){
    if (numero == 0 || numero == 1){
        return 1;
    }

    let fatorial = 1;
    for (let i = 2; i <= numero; i++){
        fatorial *= i;
    }
    
    return fatorial;
}
let numero = 123;
let resultado = calcularVetorial(numero);
console.log(`O fatorial de ${numero} é ${resultado}`);

//3.
function dolarParaReal(dolares){
    let cotacao = 4.80;
    return dolares * cotacao;
}
console.log(dolarParaReal(50));

//4.
function calcularAreaPerimetro(altura,largura){
    let area = altura * largura;
    let perimetro = 2 * (altura + largura);

    console.log(`Área da sala: ${area}m².`);
    console.log(`Perímetro da sala: ${perimetro}m.`);
}
calcularAreaPerimetro(3,5);

//5.
function calcularAreaPerimetroCircular(raio){
    let area = Math.PI * raio * raio;
    let perimetro = 2 * Math.PI * raio;
  
    console.log(`Área da sala circular: ${area.toFixed(2)}m².`);
    console.log(`Perímetro da sala circular: ${perimetro.toFixed(2)}m.`); 
}
calcularAreaPerimetroCircular(4);

//6.
function imprimeTabuada(numero){
    let resultado;
    for (let i = 1; i <=10; i++){
        resultado = numero*i;
        console.log(`${numero} * ${i} = ${resultado}`);
    }
}
imprimeTabuada(98); 


Exercícios Aula 04
//1.
let listaGenerica = [];

//2.
let linguagensDeProgramacao = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];

//3.
linguagensDeProgramacao.push('Java', 'Ruby', 'GoLang');
console.log(linguagensDeProgramacao);

//4.
let nomes = ['Tasso', 'Aline', 'Maria'];
console.log(nomes[0]);

//5.
let nomes = ['Tasso', 'Aline', 'Maria'];
console.log(nomes[1]);

//6.
let nomes = ['Tasso', 'Aline', 'Maria'];
console.log(nomes[2]);*/