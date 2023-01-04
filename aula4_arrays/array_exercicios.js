/* Crie um programa que imprima a tabuada de um número. */

const numero =  5;

for (let i = 0; i <= 10; i++) {
    console.log (i * numero);    
}


/*

2) Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número par;

*/

const numeros = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

for (let i = 0; i < numeros.length; i++) {
    const numero = numeros[i];
    if (numero % 2 === 0) {
        console.log('Números pares: ' + numero);
    } 
}