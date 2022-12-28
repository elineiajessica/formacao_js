/*
Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta
e a escolha da consição de pagamento. 
Utilize os códigos da tabela abaixo para ler qual a condição de pagamento escolha para efetuar o cálculo adequado. 

Código para condição de pagamento:

- À vista no débito: 10% de desconto;
- À vista no dinheiro ou pix: 15% de desconto;
- Parcelamento em duas vezes: preco normal da etiqueta sem juros;
- Parcelamento acima de duas vezes: preço normal da etiqueta mais juros de 10%;
*/

function aplicarDesconto(valor, desconto) {
    return (valor - (valor * (desconto / 100)));
}

function aplicarJuros (valor, juros) {
    return (valor + (valor * (juros / 100)));
}

const precoEtiqueta = 59.90;
const formaDePagamento = 1;

if (formaDePagamento === 1) {
    console.log(aplicarDesconto(precoEtiqueta, 10));
} else if ( formaDePagamento === 2) {
    console.log(aplicarDesconto(precoEtiqueta, 15));
} else if (formaDePagamento === 3) {
    console.log(precoEtiqueta);
} else {
    console.log(aplicarJuros(precoEtiqueta, 10));
}