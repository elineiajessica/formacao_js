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

// const precoProduto = 59.90;
// const descontoDebito = 0.1;
// const descontoDinheiroPix = 0.15;
// const parcelaAcimaDuas = 0.1;
// const parceladoDuas = precoProduto;
// let formaDePagamento = 'parceladoDuas';

// if (formaDePagamento === 'debito') {
//     const valorPago = precoProduto - (precoProduto* descontoDebito);
//     console.log(valorPago.toFixed(2));
// } else if (formaDePagamento === 'dinheiro' || formaDePagamento === 'pix') {
//         const valorPago = precoProduto - (precoProduto * descontoDinheiroPix);
//         console.log(valorPago.toFixed(2));
//     } else if (formaDePagamento === 'parcelaAcimaDuas') {
//         const valorPago = precoProduto + (precoProduto * parcelaAcimaDuas);
//         console.log(valorPago.toFixed(2));
//     } else {
//             console.log(precoProduto.toFixed(2));
//     }


    

    const precoEtiqueta = 59.90;
    let formaPagamento = 3;

    if (formaPagamento === 1) {
        const valorPago = precoEtiqueta - (precoEtiqueta * 0.1);
        console.log('Pagamento à vista por débito: ' + valorPago.toFixed(2));
    } else if (formaPagamento === 2) {
        const valorPago = precoEtiqueta - (precoEtiqueta * 0.15);
        console.log('Pagamento à vista em dinheiro/pix ' + valorPago.toFixed(2));
    } else if (formaPagamento === 3) {
        const valorPago = precoEtiqueta;
        console.log('Pagamento à vista no cartão ou parcelado em duas vezes: ' + valorPago.toFixed(2));
    } else {
        const valorPago = precoEtiqueta + (precoEtiqueta * 0.1);
        console.log('Pagamento parcelado de 3 a 12x com juros: ' + valorPago.toFixed(2));
    }







    