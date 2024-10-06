// Exibe uma mensagem de boas-vindas ao jogador
alert('Bem-vinda à brincadeira do número secreto');

const numberMax = 5000; // Define o valor máximo para o número secreto
let numeroSecreto = parseInt(Math.random()* numberMax +1); // Gera um número secreto aleatório entre 1 e numberMax

// Adicione um console.log para verificar o valor de "numeroSecreto"
console.log(numeroSecreto);

let chute; // Variável para armazenar o palpite do jogador
let tentativas = 0; // Contador de tentativas

// Enquanto o chute não for igual a número Secreto
while (chute != numeroSecreto) {
    
    // Pede ao jogador para escolher um número e converte para inteiro
    chute = parseInt(prompt(`Escolha um número entre 1 e ${numberMax}:`));
    
    // Adicione um console.log para verificar o valor de "chute" após a entrada do usuário
    //console.log('Valor do chute:', chute);

    // Adicione um console.log para verificar a comparação entre "chute" e "numeroSecreto"
    //console.log('Resultado da comparação:', chute == numeroSecreto);

    // Verifica se o chute é igual ao número secreto
    if (numeroSecreto == chute) {        
        break; // Se o palpite estiver correto, sai do loop
    } else {
        // Adicione um console.log para verificar o valor de "numeroSecreto" quando o jogador erra
        //console.log('Valor do número secreto:', numeroSecreto);
        
         // Informa ao jogador se o número secreto é maior ou menor que o chute
        if (numeroSecreto > chute) {
            alert(`O número secreto é maior que ${chute}`);
        } else {
            alert(`O número secreto é menor que ${chute}`);
        }
    }
    // tentativas = tentativas + 1;
    tentativas++; // Incrementa o contador de tentativas

}

// Usando operador ternário para definir a palavra "tentativa" ou "tentativas"
let palavraTentativa = tentativas > 1? 'tentativas' : 'tentativa';
// Exibe a mensagem de parabéns ao jogador com o número secreto e tentativas
alert(`Parabéns !!! Acertou o número secreto: ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);

/*if(tentativas>1){
    alert(`Parabéns !!! Acertou o número secreto: ${numeroSecreto} com ${tentativas} tentativa.`);
}else{
    alert(`Parabéns !!! Acertou o número secreto: ${numeroSecreto} com ${tentativas} tentativas.`);
}*/
