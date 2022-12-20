

/* Programa para calcular o gasto de gasolina de uma viagem 
variavel preco_combustivel; valor_medio_gasto_carro; distancia_km;*/

const precoCombustivel = 5.79;
const kmPorLitros = 10;
const distanciaEmKm = 100;
const gastoViagem = (distanciaEmKm / kmPorLitros) * precoCombustivel; 

console.log(gastoViagem.toFixed(2));
