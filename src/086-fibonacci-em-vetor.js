https://www.urionlinejudge.com.br/judge/pt/problems/view/1176

Faça um programa que leia um valor e apresente o número de Fibonacci correspondente a este valor lido. Lembre que os 2 primeiros elementos da série de Fibonacci são 0 e 1 e cada próximo termo é a soma dos 2 anteriores a ele. Todos os valores de Fibonacci calculados neste problema devem caber em um inteiro de 64 bits sem sinal.

Entrada
A primeira linha da entrada contém um inteiro T, indicando o número de casos de teste. Cada caso de teste contém um único inteiro N (0 ≤ N ≤ 60), correspondente ao N-esimo termo da série de Fibonacci.

Saída
Para cada caso de teste da entrada, imprima a mensagem "Fib(N) = X", onde X é o N-ésimo termo da série de Fibonacci.

const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

const cases = Number(lines.shift());

const fib = n => {
  if (n === 0) return [0];

  if (n === 1) return [0, 1];

  const s = fib(n - 1);
  s.push(s[s.length - 1] + s[s.length - 2]);
  return s;
};

for (let cas = 0; cas < cases; cas++) {
  const n = Number(lines[cas]);

  const sequence = fib(n);

  const lastValue = sequence[sequence.length - 1];

  console.log(`Fib(${n}) = ${lastValue}`);
}
