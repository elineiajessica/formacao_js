

/*
Desenvolva um programa para calcular o gasto de gasolina de uma viagem.
Será dado três variáveis:
Preço de combustível;
Valor médio do carro em Km;
Distância em Km;
*/

const precoCombustivel = 5.79;
const kmPorLitros = 10;
const distanciaEmKm = 100;
const gastoViagem = (distanciaEmKm / kmPorLitros) * precoCombustivel; 

console.log(gastoViagem.toFixed(2));
