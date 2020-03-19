
// URL: https://www.urionlinejudge.com.br/judge/pt/problems/view/1101

// Leia um conjunto não determinado de pares de valores M e N (parar quando algum dos valores for menor ou igual a zero). Para cada par lido, mostre a sequência do menor até o maior e a soma dos inteiros consecutivos entre eles (incluindo o N e M).

// Entrada
// O arquivo de entrada contém um número não determinado de valores M e N. A última linha de entrada vai conter um número nulo ou negativo.

// Saída
// Para cada dupla de valores, imprima a sequência do menor até o maior e a soma deles, conforme exemplo abaixo

let min = 20;
let max = 25;

let sum = 0;
let string = "";

for (; min <= max; min++) {
  sum += min;
  string += !string.length ? min : " " + min;
}

console.log(string + " Sum=" + sum);
