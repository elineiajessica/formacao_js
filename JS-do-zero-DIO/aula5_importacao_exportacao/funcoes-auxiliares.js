/*
UMa sala contém 5 alunos e para cada aluno foi sorteado um número de 1 - 100. 
Faça um programa que receba os 5 números sorteados para os alunos e mostre o maior número sorteado.

Dados para entrada:

5
50
10
98
23

Dados para saída:
98

*/

const quantidadeEntradas = [5, 50, 10, 98, 23];
let i = 0;

function gets() {
    const valor = quantidadeEntradas[i];
    i++;
    return valor;
}

function print(texto) {
    console.log(texto);
}

module.exports = { gets, print };