/*
Desafios

1. Crie um programa que utilize o console.log para exibir uma mensagem de boas-vindas.

2. Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o console.log para exibir a mensagem "Olá, [seu nome]!" no console do navegador.

3. Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o alert para exibir a mensagem "Olá, [seu nome]!".

4. Utilize o prompt e faça a seguinte pergunta: Qual  a linguagem de programação que você mais gosta?. Em seguida, armazene a resposta em uma variável e mostre no console do navegador.

5. Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a soma desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A soma de [valor1] e [valor2] é igual a [resultado]." no console.

6. Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a subtração desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A diferença entre [valor1] e [valor2] é igual a [resultado]." no console.

7. Peça ao usuário para inserir sua idade com prompt. Com base na idade inserida, utilize um if para verificar se a pessoa é maior ou menor de idade, exibindo uma mensagem apropriada no console.

8. Crie uma variável "numero" e peça um valor com prompt verifique se é positivo, negativo ou zero. Use if-else para imprimir a respectiva mensagem.

9. Use um loop while para imprimir os números de 1 a 10 no console.

10. Crie uma variável "nota" e atribua um valor numérico a ela. Use if-else para determinar se a nota é maior ou igual a 7 e exiba "Aprovado" ou "Reprovado" no console.

11. Use o Math.ramdon para gerar qualquer número aleatório e exiba esse número no console.

12. Use o Math.ramdon para gerar um número inteiro entre 1 e 10 e exiba esse número no console.

13. Use o Math.ramdon para gerar um número inteiro entre 1 e 1000 e exiba esse número no console.
*/

//1
console.log('Boas vindas'); // Exibe uma mensagem de boas-vindas no console

//2
let nome = "XYZ";
console.log(`Olá, ${nome}!`); // Exibe uma mensagem de saudação no console

//3
let name = "XYZ";
alert(`Olá, ${name}!`); // Exibe uma mensagem de saudação em um alerta

//4
let linguagemFavorita = prompt("Qual a linguagem de programação que você mais gosta?"); // Pede ao usuário que insira sua linguagem favorita
console.log(`Você gosta de ${linguagemFavorita}.`); // Exibe a resposta no console

//5
let valor1 = 5; // Atribui um valor numérico a valor1
let valor2 = 15; // Atribui um valor numérico a valor2
let result = valor1 + valor2; // Realiza a soma e armazena em resultado
console.log(`A soma de ${valor1} e ${valor2} é igual a ${resultado}.`); // Exibe a soma no console

//6
let valor3 = 15; // Atribui um valor numérico a valor3
let valor4 = 5; // Atribui um valor numérico a valor4
let resultado = valor3 - valor4; // Realiza a subtração e armazena em resultadoSubtracao
console.log(`A diferença entre ${valor3} e ${valor4} é igual a ${resultado}.`); // Exibe a diferença no console

//7
let idade = parseInt(prompt("Insira sua idade:")); // Pede ao usuário para inserir a idade
if (idade >= 18) { // Verifica se a idade é maior ou igual a 18
    console.log("Você é maior de idade."); // Exibe mensagem para maior de idade
} else {
    console.log("Você é menor de idade."); // Exibe mensagem para menor de idade
}

//8
let numero = parseFloat(prompt("Digite um número:")); // Pede ao usuário para inserir um número
if (numero > 0) {
    console.log("O número é positivo."); // Exibe mensagem se o número for positivo
} else if (numero < 0) {
    console.log("O número é negativo."); // Exibe mensagem se o número for negativo
} else {
    console.log("O número é zero."); // Exibe mensagem se o número for zero
}

//9
let contador = 1; // Inicializa o contador em 1
while (contador <= 10) { // Enquanto o contador for menor ou igual a 10
    console.log(contador); // Exibe o número atual no console
    contador++; // Incrementa o contador em 1
}

//10
const nota = 8; // Atribui um valor numérico à nota
if (nota >= 7) {
    console.log("Aprovado"); // Exibe mensagem de aprovado se a nota for maior ou igual a 7
} else {
    console.log("Reprovado"); // Exibe mensagem de reprovado caso contrário
}

//11
let numeroAleatorio = Math.random(); // Gera um número aleatório entre 0 e 1
console.log(`Número aleatório: ${numeroAleatorio}`); // Exibe o número aleatório no console

//12
let numeroInteiro1a10 = Math.floor(Math.random() * 10 + 1) ; // Gera um número inteiro entre 1 e 10
console.log(`Número inteiro entre 1 e 10: ${numeroInteiro1a10}`); // Exibe o número no console

//13
let numeroInteiro1a1000 = Math.floor(Math.random() * 1000 + 1) ; // Gera um número inteiro entre 1 e 1000
console.log(`Número inteiro entre 1 e 1000: ${numeroInteiro1a1000}`); // Exibe o número no console
