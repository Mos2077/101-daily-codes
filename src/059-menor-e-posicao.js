// URL: https://www.urionlinejudge.com.br/judge/pt/problems/view/1180

// RESUMO: Ler um valor N (tamanho do array) e em seguida ler o array (Como uma string separada por espaços) e mostrar qual o menor valor e a posição dele no array

// Faça um programa que leia um valor N. Este N será o tamanho de um vetor X[N]. A seguir, leia cada um dos valores de X, encontre o menor elemento deste vetor e a sua posição dentro do vetor, mostrando esta informação.

// Entrada
// A primeira linha de entrada contem um único inteiro N (1 < N < 1000), indicando o número de elementos que deverão ser lidos em seguida para o vetor X[N] de inteiros. A segunda linha contém cada um dos N valores, separados por um espaço.

// Saída
// A primeira linha apresenta a mensagem “Menor valor:” seguida de um espaço e do menor valor lido na entrada. A segunda linha apresenta a mensagem “Posicao:” seguido de um espaço e da posição do vetor na qual se encontra o menor valor lido, lembrando que o vetor inicia na posição zero.


const n = 5;
const arrayN = [2, 6, 2, 5, -6];

let lowest = arrayN[0];
let lowestIndex = 0;

for (let index = 1; index < n; index++) {
  const currentNumber = arrayN[index];
  if (currentNumber < lowest) {
    lowest = currentNumber;
    lowestIndex = index;
  }
}

console.log("Menor valor: " + lowest);
console.log("Posicao: " + lowestIndex);
