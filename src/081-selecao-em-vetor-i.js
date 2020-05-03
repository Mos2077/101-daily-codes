// EXERCÍCIO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

// Faça um programa que leia um vetor A[100]. 
// No final, mostre todas as posições do vetor que armazenam um valor menor ou igual a 10 
// e o valor armazenado em cada uma das posições.

// Entrada
// A entrada contém 100 valores, podendo ser inteiros, reais, positivos ou negativos.

// Saída
// Para cada valor do vetor menor ou igual a 10, escreva "A[i] = x", onde i é a posição do vetor e x é o valor armazenado na posição,
// com uma casa após o ponto decimal.


// CÓDIGO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

for (let i = 0; i < 100; i++) {
  const current = Number(lines[i]);

  if (current > 10) continue;

  console.log(`A[${i}] = ${current.toFixed(1)}`);
}
