alert('Bem vinda a brincadeira do número secreto');

let numeroSecreto = 25;

let chute = prompt('Escolha um número entre 1 e 30 :');

if (numeroSecreto == chute){
    console.log("Acertou o número secreto. Parabéns !!!")
} else{
    console.log("Humm... Que pena, você errou. Tente Novamente")
}