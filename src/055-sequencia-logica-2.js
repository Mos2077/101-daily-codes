// EXERCÍCIO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

// URL: https://www.urionlinejudge.com.br/judge/pt/problems/view/1145

// Escreva um programa que leia dois valores X e Y. A seguir, mostre uma sequência de 1 até Y, passando para a próxima linha a cada X números.

// Entrada
// O arquivo de entrada contém dois valores inteiros, (1 < X < 20) e (X < Y < 100000).

// Saída
// Cada sequência deve ser impressa em uma linha apenas, com 1 espaço em branco entre cada número, conforme exemplo abaixo. Não deve haver espaço em branco após o último valor da linha.


// CÓDIGO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

const interval = 5;
const max = 30;

for (let a = 1; a <= max; a += interval) {
  const initial = a;
  const final = a + interval;

  let currentString = "";

  for (let a = initial; a < final; a++) {
    if (a === final - 1) currentString += a;
    else currentString += a + " ";
  }
  console.log(currentString);
}

// Saída esperada para o valor 5 como intervalo e o valor 30 como máximo:
// '1 2 3 4 5'
// '6 7 8 9 10'
// '11 12 13 14 15'
// '16 17 18 19 20'
// '21 22 23 24 25'
// '26 27 28 29 30'
