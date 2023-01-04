/*
1- Cria uma classe para representar carros. 
Os carros possuem uma marca, uma cor e um gasto médio de combustível por km rodado. 
Crie um método que dado a quantidade de km e o preço do combustível nos dê o valor gasto em reais para realizar o percurso.

*/

class Carro {
    marca;
    cor;
    gastoMedio;

    constructor (marca, cor, gastoMedio) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedio = gastoMedio;
    }

    calcularGastoViagem(distancia, precoCombustivel) {
        return distancia * this.gastoMedio * precoCombustivel;
    }

}

const corolla = new Carro('Toyota', 'Prata', 1 / 10);
console.log(corolla.calcularGastoViagem(70, 5));
