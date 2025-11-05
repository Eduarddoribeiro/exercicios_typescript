//Escreva um programa contendo uma Collection Queue (Fila) de Objetos do tipo string, para organizar uma fila por ordem de chegada dos Clientes de um Banco. 
// O programa deverá ter um Menu que aceitará as opções 0, 1, 2 e 3:
// 1: Adicionar um novo Cliente na fila. Deve solicitar o nome do Cliente.
// 2: Listar todos os Clientes na fila
// 3: Chamar (retirar) uma pessoa da fila 
// 0: O programa deve ser finalizado. 
// Caso a fila esteja vazia, o programa deverá informar que a fila está vazia ao tentar retirar (chamar) um cliente da fila



import { Queue } from "./Queue";
import * as readline from 'readline-sync';

//cria fila;
const fila = new Queue<string>();
let opcao: number;

do { //exiba pelo menos uma vez
    //exibe menu
    console.log("\n1 - Adicionar cliente na fila");
    console.log("2 - Listar todos os clientes");
    console.log("3 - Retirar cliente da fila");
    console.log("0 - Sair");
    opcao = readline.questionInt("Entre com a opcao desejada:")
    //menu com  base na opção escolhida
    switch (opcao) {
        case 1:
            let nomeCliente = readline.question("Digite o nome do cliente: ")
            fila.enqueue(nomeCliente);
            console.log(`O cliente ${nomeCliente} foi adicionado com sucesso!`);
            console.log("\nFila:");
            fila.printQueue();
            break;

        case 2:
            if (fila.isEmpty()) {
                console.log("A fila está vazia!")
            } else {
                console.log("\nFila:")
                fila.printQueue();
            }
            break;

        case 3:
            if (fila.isEmpty()) {
                console.log("A fila está vazia!")
            } else {
                fila.dequeue()
                console.log("O cliente foi chamado!")
            }
            break;

        case 0:
            console.log("Programa finalizado!")
            break;

        default:
            console.log("Opção inválida! Tente novamente.") //caracteres diferente do menu
    }
} while (opcao != 0) //enquanto for diferente de zero, continua rodando