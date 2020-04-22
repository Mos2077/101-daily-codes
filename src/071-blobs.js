// EXERCÍCIO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

// URL: https://www.urionlinejudge.com.br/judge/pt/problems/view/1170

// No planeta Alpha vive a criatura Blobs, que come precisamente 1/2 de seu suprimento de comida disponível todos os dias. 
// Escreva um algoritmo que leia a capacidade inicial de suprimento de comida (em Kg),
// e calcule quantos dias passarão antes que Blobs coma todo esse suprimento até restar um quilo ou menos.

// Entrada
// A primeira linha de entrada contem um único inteiro N (1 ≤ N ≤ 1000), indicando o número de casos de teste. 
// As N linhas seguintes contém um valor de ponto flutuante C (1 ≤ C ≤ 1000) correspondente à quantidade de comida disponível para Blobs.

// Saída
// Para cada caso de teste, imprima uma linha contendo o número de dias que Blobs
// irá demorar para comer todo seu suprimento de comida, seguido da palavra "dias".


// CÓDIGO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

// Entrada para a quantidade de comida
let kg = 100;

// Variável que armazena por quantos dias Blobs terá comida
let days = 0;

// Vamos criar um for que repete enquanto a comida de Blobs não tiver menos que 1kg
for (; kg > 1; ) {
  // A cada repetição, os dias são contados, pois a comida ainda não chegou a menos de 1kg ou 1kg
  days++;
  
  // E a cada repetição, também dividimos a comida de blob à metade
  kg /= 2;
}

// Então mostramos no console os dias
console.log(days + " dias");

// Saída esperada para 100kg:
// '7 dias'

