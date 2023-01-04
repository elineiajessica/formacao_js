const { gets, print } = require('./funcoes-auxiliares');

const quantidadeEntradas = gets();
let maiorValor = 0;


for (let i = 0; i < quantidadeEntradas; i++) {
    const numeroSorteado = gets();
    if(numeroSorteado > maiorValor) {
        maiorValor = numeroSorteado;
    }
}
 
print(maiorValor);