// EXERCÍCIO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

// URL: https://www.urionlinejudge.com.br/judge/pt/problems/view/1158

// Leia um valor inteiro N que é a quantidade de casos de teste que vem a seguir. Cada caso de teste consiste de dois inteiros X e Y. Você deve apresentar a soma de Y ímpares consecutivos a partir de X inclusive o próprio X se ele for ímpar. Por exemplo:
// para a entrada 4 5, a saída deve ser 45, que é equivalente à: 5 + 7 + 9 + 11 + 13
// para a entrada 7 4, a saída deve ser 40, que é equivalente à: 7 + 9 + 11 + 13

// Entrada
// A primeira linha de entrada é um inteiro N que é a quantidade de casos de teste que vem a seguir. Cada caso de teste consiste em uma linha contendo dois inteiros X e Y.

// Saída
// Imprima a soma dos consecutivos números ímpares a partir do valor X.


// CÓDIGO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

const cases = Number(lines.shift());

const isEven = n => n % 2 === 0;

for (let caseIndex = 0; caseIndex < cases; caseIndex++) {
  let [n, sequence] = lines.shift().split(" ").map(item => Number(item));

  if (isEven(n)) n++;

  let ac = n;

  let increment = 2;

  ac = n * sequence;

  for (let a = 0; a < sequence - 1; a++) {
    ac += increment;
    increment += 2;
  }

  console.log(ac);
}
