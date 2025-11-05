import * as readline from 'readline-sync';

import { Stack } from "./Stack";

//Criar a pilha (stack)
const pilha = new Stack<string>();

let opcao:number;

do { //repete pelo menos uma vez o menu
    console.log("\n1 - Adicionar Livro na pilha");
    console.log("2 - Listar todos os livros");
    console.log("3 - Retirar livro da pilha");
    console.log("0 - Sair");
    opcao = readline.questionInt("Entre com a opcao desejada: ");

    switch(opcao) {
        case 1: 
        let nomeLivro = readline.question("Digite o nome do livro:"); //cria a variável com base no que o usuário digitar
        pilha.push(nomeLivro); //adiciona na pilha
        console.log("\nPilha:") //avisa que foi adicionado
        pilha.printStack(); //mostra a lista
        console.log(`O livro '${nomeLivro}' foi adicionado com sucesso na pilha!`)
        break;

        case 2:
        if (pilha.isEmpty()) {
            console.log("A pilha está vazia!");
        } else {
            console.log("\nLista de livros na pilha;");
            pilha.printStack();
        }
        break;

        case 3:
           if (pilha.isEmpty()) {
            console.log("A pilha está vazia!");
        } else {
            console.log("\nPilha:")
            pilha.pop();
            pilha.printStack();
            console.log("Um livro foi retirado da pilha!")
        } 
        break;

        case 0:
            console.log("Programa finalizado. Até breve!");
            break;
    }

} while (opcao !=0 )