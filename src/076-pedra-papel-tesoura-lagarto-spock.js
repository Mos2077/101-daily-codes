// EXERCÍCIO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

// URL: https://www.urionlinejudge.com.br/judge/pt/problems/view/1873

// Pedra-papel-tesoura-lagarto-Spock é uma expansão do clássico método de seleção em jogo de pedra-papel-tesoura.
// Atua sob o mesmo princípio básico, mas inclui outras duas armas adicionais:
// o lagarto (formado pela mão igual a uma boca de fantoche) e Spock (formada pela saudação dos vulcanos em Star Trek). 
// Isso reduz as chances de uma rodada terminar em um empate. 
// O jogo foi inventado por Sam Kass e Karen Bryla, como "Rock Paper Scissors Lizard Spock". As regras de vantagem são as seguintes:

// Tesoura corta papel
// Papel cobre pedra
// Pedra derruba lagarto
// Lagarto adormece Spock
// Spock derrete tesoura
// Tesoura prende lagarto
// Lagarto come papel
// Papel refuta Spock
// ck vaporiza pedra
// Pedra quebra tesoura
// Um dia, dois amigos, Rajesh e Sheldon, decidiram apostar quem pagaria um almoço para o outro, com esta brincadeira.
// Sua missão será fazer um algoritmo que, baseado no que eles escolherem, informe quem irá ganhar ou se dará empate.

// Entrada
// Haverá diversos casos de teste. O primeiro número a ser lido será um inteiro C, representando a quantidade de casos de teste. 
// Cada caso de teste tem duas palavras, representando a escolha de Rajesh e de Sheldon, respectivamente.

// Saída
// Para cada caso de teste, imprima quem venceu, ou se houve empate.


// CÓDIGO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

// Array no formato:
// [
//   ["NOME_DO_QUE_VENCE", "NOME_DO_QUE_PERDE"],
//   ...
// ]
const enumGame = [
  ["tesoura", "papel"],
  ["papel", "pedra"],
  ["pedra", "lagarto"],
  ["lagarto", "spock"],
  ["spock", "tesoura"],
  ["tesoura", "lagarto"],
  ["lagarto", "papel"],
  ["papel", "spock"],
  ["spock", "pedra"],
  ["pedra", "tesoura"]
];

// Pegamos a jogada do player 1 (rajesh) e a jogada do player 2 (sheldon)
const [p1, p2] = ["tesoura", "spock"];

// Caso as jogadas forem iguais, então deu empate
if (p1 === p2) {
  console.log("empate");
} 
// Se não...
else {
  // Criamos um for que percorre todas as jogadas possíveis, que são os arrays dentro do array enumGame
  for (const en of enumGame) {
    // Pegamos qual jogada vence e qual jogada perde, dentro do array atual
    // Obs: o array atual que é uma combinação possível dentro do jogo
    const [winner, loser] = en;
    
    // Se a jogada vencedora for a do player 1 e a jogada perdedora for do player 2, então:
    if (winner === p1 && loser === p2) {
      // O player 1 venceu, logo mostramos o nome dele no console
      console.log("rajesh");
      // E em seguida paramos o laço de repetição
      break;
    } 
    // Mas se não, verificamos:
    // Se a jogada vencedora for do player 2 e a perdedora for do player 1, então:
    else if (winner === p2 && loser === p1) {
      // Mostramos o nome do jogador 2 no console
      console.log("sheldon");
      
      // E paramos o laço
      break;
    }
  }
}

// Saída esperada para a jogada "tesoura" para o primeiro jogador (rajesh) e "spock" como a do segundo jogador (sheldon)
// 'sheldon'
