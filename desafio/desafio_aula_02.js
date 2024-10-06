/**
Desafios

1. Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".

2. Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.

3. Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar.".

4. Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.

5. Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.
*/

//1
// Pede ao usuário que insira o dia da semana
let diaDaSemana = prompt("Qual dia da semana é hoje ?");


if(diaDaSemana == "Sábado" || diaDaSemana == "Domingo"){ // Se for Sábado ou Domingo, exibe mensagem de bom fim de semana
    alert("Bom fim de semana");
} else {
    alert("Boa semana"); // Caso contrário, exibe mensagem de boa semana
}


//2
// Pede ao usuário que insira um número positivo ou negativo
let num = prompt("Digite um número positivo ou negativo: ");
if(num > 0){
    alert("Número positivo"); // Se o número for maior que 0, exibe que é positivo
}else{
    alert("Número negativo"); // Se o número for menor que 0, exibe que é negativo
}


//3
let pontuação = parseInt(prompt("Digite sua pontuação:")); // Pede ao usuário que insira a pontuação e converte para inteiro
//let pontuação = 110;

if (pontuação => 100){
    alert("Parabéns, você venceu!"); // Se a pontuação for maior ou igual a 100, exibe mensagem de vitória
}else{
    alert("Tente novamente para ganhar."); // Caso contrário, incentiva o usuário a tentar novamente
}


// 4 
//saldo = parseFloat(prompt("Qual é o seu saldo?")); // Pede ao usuário que insira o saldo e converte para float
let saldo = 450;

//alert(`Saldo da conta é de R$ ${saldo}`);
alert(`Seu saldo é R$ ${saldo.toFixed(2)}`); // Exibe o saldo formatado com duas casas decimais usando template string


//5
let nome = prompt("Digite seu nome: ");  //Pede ao usuário que insira seu nome

alert(`Seja Bem-vindo, ${nome}.`); // Exibe uma mensagem de boas-vindas personalizada usando o nome inserido


