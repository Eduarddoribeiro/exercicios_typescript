//Escreva um programa para criar uma Collection Set do tipo number. O programa deverá solicitar ao usuário, que ele digite via teclado 10 valores inteiros não repetidos e adicione-os individualmente na Collection Set. Em seguida, faça o que se pede:
// Mostre na tela todos os elementos da Collection Set. 

const readline = require('readline-sync');

//Sintaxe do Collection Set sem a inicialização de dados:
//const nome_do_set: Set<T> = new Set<T>()

const dados: Set<number> = new Set<number>();

for (let i = 1; i < 11; i++) { //loop para iniciar em 1 e ir até o 10
    let setDado = readline.questionInt("Digite um dado:"); //variável para armazenar o dado
    dados.add(setDado); //adicionar o setDado digitado pelo usuário na coleção dados

}

console.log("\nOs dados digitados foram: ");

for (let dado of dados) { //para cada valor dentro do conjunto dados, chame esse valor de dado e execute o código abaixo
    console.log(dado);
}