// Função de informar o nome e imprimir no console;

function myName(name) {
    console.log('Meu nome é: ' + name);
    return name;
    //ao colocar o return, pode-se usar essa função nas funções abaixo ou demais funções desejadas.
}

 myName('Jéssica');

 

 // Função verificadora de idade;


 function verificadorIdade(idade) {
    if (idade < 18) {
        console.log('Você é menor de idade');
    } else {
        console.log('Você é maior de idade');
    }
 }

 verificadorIdade(12);
 verificadorIdade(18);
 verificadorIdade(29);