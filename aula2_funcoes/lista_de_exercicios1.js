/*

Faça um algoritmo que dado as 3 notas tiradas por um launo em um semestre, calcule e imprima a 
sua média e a sua classificação conforme tabela abaixo:

Classificação:
- Média menor que 5: reprovado;
- Média entre 5 e 7: recuperação;
- Média maior que 7: aprovado;

*/

let nota1 = 7;
let nota2 = 3;
let nota3 = 7.4;

const media = (nota1 + nota2 + nota3) / 3;

console.log(media)

if (media > 5) {
    console.log('Reprovado');
} else if (media < 5 && media <= 7) {
    console.log('Recuperação');
    } else{
            console.log('Aprovado');
        }
