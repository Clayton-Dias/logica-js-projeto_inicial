/*
Desafios

1. Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.

2. Crie um contador que começa em 10 e vá até 0 usando um loop while. Mostre cada número.

3. Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, usando um loop while no console do navegador.

4. Crie um programa de contagem progressiva. Peça um número e conte de 0 até esse número, usando um loop while no console do navegador.
*/

//1
let contador = 1; // Inicializa o contador em 1
while(contador <= 10){ // Enquanto o contador for menor ou igual a 10
    console.log(contador); // Mostra o número atual no console
    contador++; // Incrementa o contador em 1
}

//2
let cont = 10; // Inicia o contador para 10
while(cont >= 0){ // Enquanto o contador for maior ou igual a 0
    console.log(cont); // Mostra o número atual
    cont--;  // Decrementa o contador em 1
} 

//3
let number = prompt("Digite um número para a contagem regressiva:"); // Pede um número ao usuário
while(number >= 0){ // Enquanto a number for maior ou igual a 0
    console.log(number); // Mostra o número atual
    number--;  // Decrementa o contador em 1
}

//4
let numeroMax = prompt("Digite um número para a contagem progressiva:"); // Pede um número ao usuário
let incremantador = 0; // Inicializa a contagem progressiva em 0

while(incremantador <= numeroMax){  // Enquanto a contagem progressiva for menor ou igual ao número fornecido
    console.log(incremantador); // / Mostra o número atual no console
    incremantador++; // Incrementa a contagem em 1
}