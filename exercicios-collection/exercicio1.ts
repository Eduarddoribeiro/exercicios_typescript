//Escreva um programa para criar uma Collection Array de Objetos do tipo string. O programa deverá solir ao 
// usuário, que ele digite via teclado 5 cores e deverá adicioná-las individualmente no Array. 
// Em seguida, faça o que se pede:Mostre na tela todas as cores adicionadas. Mostre na tela todas as cores adicionadas, ordenadas em ordem crescente




const readline = require('readline-sync');

const cores: Array<string> = new Array<string>()


for (let i = 1; i < 6; i++) {
    let cor = readline.question(`Digite a ${i}ª cor:`); //usuário digita e o valor fica na variável cor
    cores.push(cor); //adiciona a cor ao array cores
}

console.log("\nAs cores escolhidas foram:");
for (let i = 0; i < cores.length; i++) {  //exibe cada cor em uma linha
    console.log(cores[i]);
}

//organiza em order alfabética
console.log("\nAs cores em ordem crescente são:");
cores.sort();

for (let i = 0; i < cores.length; i++) { //exibe cada cor em uma linha
    console.log(cores[i]);
}