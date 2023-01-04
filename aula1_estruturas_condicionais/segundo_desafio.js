/*
Desenvolva um programa para calcular o gasto de gasolina de uma viagem.
Será dado cinco variáveis:
1 - Preço da gasolina;
2 - Preço do etanol;
3 - O tipo de combustivel usado no carro;
4 - Gasto médio do combustivel carro em Km;
5 - Distância em Km da viagem;
*/

const precoGasolina = 5.29;
const precoEtanol = 3.99;
const gastoMedioEmKm = 12;
const kmViagem = 120;
const tipoCombustivel = 'Etanol';
const litrosConsumidos = kmViagem / gastoMedioEmKm;


if (tipoCombustivel === 'Gasolina') {
    const valorGasto = litrosConsumidos * precoGasolina;
    console.log(valorGasto.toFixed(2));
} else {
    const valorGasto = litrosConsumidos * precoEtanol;
    console.log(valorGasto.toFixed(2));
}