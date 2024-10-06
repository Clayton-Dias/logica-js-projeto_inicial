alert('Bem vinda a brincadeira do número secreto');

let numeroSecreto = 25;

// Adicione um console.log para verificar o valor de "numeroSecreto"
console.log(numeroSecreto);

let chute = prompt('Escolha um número entre 1 e 30 :');
// Adicione um console.log para verificar o valor de "chute" após a entrada do usuário
console.log('Valor do chute:', chute);

// Adicione um console.log para verificar a comparação entre "chute" e "numeroSecreto"
console.log('Resultado da comparação:', chute == numeroSecreto);


// Se chute for igual ao número secreto
if (numeroSecreto == chute){
    alert(`Parabéns !!! Acertou o número secreto: ${numeroSecreto}.`);
} 
// 
else{
    // Adicione um console.log para verificar o valor de "numeroSecreto" quando o jogador erra
    console.log('Valor do número secreto:', numeroSecreto);
    alert("Humm... Que pena, você errou. Tente Novamente");
}