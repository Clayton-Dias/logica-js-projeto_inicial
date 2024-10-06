alert('Bem vinda a brincadeira do número secreto');

let numberMax = 5000;
let numeroSecreto = parseInt(Math.random()* numberMax +1);

// Adicione um console.log para verificar o valor de "numeroSecreto"
console.log(numeroSecreto);

let chute;

let tentativas = 0;

// Enquanto o chute não for igual a número Secreto
while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e  ${numberMax} :`);
    // Adicione um console.log para verificar o valor de "chute" após a entrada do usuário
    //console.log('Valor do chute:', chute);

    // Adicione um console.log para verificar a comparação entre "chute" e "numeroSecreto"
    //console.log('Resultado da comparação:', chute == numeroSecreto);

    // Se chute for igual ao número secreto
    if (numeroSecreto == chute) {        
        break;
    } else {
        // Adicione um console.log para verificar o valor de "numeroSecreto" quando o jogador erra
        //console.log('Valor do número secreto:', numeroSecreto);
        //alert("Humm... Que pena, você errou. Tente Novamente");
        if (numeroSecreto > chute) {
            alert(`O número secreto é maior que ${chute}`);
        } else {
            alert(`O número secreto é menor que ${chute}`);
        }
    }
    // tentativas = tentativas + 1;
    tentativas++;

}

// Usando operator ternário ":" 
let palavraTentativa = tentativas > 1? 'tentativas' : 'tentativa';
alert(`Parabéns !!! Acertou o número secreto: ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);

/*if(tentativas>1){
    alert(`Parabéns !!! Acertou o número secreto: ${numeroSecreto} com ${tentativas} tentativa.`);
}else{
    alert(`Parabéns !!! Acertou o número secreto: ${numeroSecreto} com ${tentativas} tentativas.`);
}*/
