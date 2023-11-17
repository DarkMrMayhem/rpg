var secretNum = parseInt(Math.random() * 1001);
if (secretNum == 0){
  secretNum++;
}

var chute = prompt("Digite um número entre 1 e 1000");
var loop = true;
var iteracoes = 0;

while (loop == true){
  if (chute == secretNum){
    alert("Você acertou o número Secreto!");
    loop = false;
  } else {
    alert("Você errou o número Secreto!");
    if (chute > secretNum){
      alert("O número secreto é MENOR que " + chute + "!");
    } else if (chute < secretNum){
      alert("O número secreto é MAIOR que " + chute + "!");
    }
    iteracoes++;
    chute = prompt("Tente Novamente! (Número entre 1 e 1000)");
  }
}

if (iteracoes > 8) {
  alert("Você tentou " + iteracoes + " vezes, até acertar o número " + secretNum + "!\nVocê fez " + (iteracoes-8) + " tentativa(s) a mais que o número de tentativas do nosso recordista!");
  } else if (iteracoes <= 8) {
      alert("Você tentou " + iteracoes + " vezes, até acertar o número " + secretNum + "!\n\nVocê fez " + (8-iteracoes) + " tentativa(s) a menos que o número de tentativas do nosso recordista!");
  }
    