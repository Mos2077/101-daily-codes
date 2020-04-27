// EXERCÍCIO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

// https://www.urionlinejudge.com.br/judge/pt/problems/view/1873

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

CÓDIGO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');


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

const cases = Number(lines.shift());

for (let cas = 0; cas < cases; cas++) {
  const str = lines.shift();

  if (!str) break;

  const [p1, p2] = str.split(" ");

  if (p1 === p2) {
    console.log("empate");
  } else {
    for (const en of enumGame) {
      const [winner, loser] = en;

      if (winner === p1 && loser === p2) {
        console.log("rajesh");
        break;
      } else if (winner === p2 && loser === p1) {
        console.log("sheldon");
        break;
      }
    }
  }
}
