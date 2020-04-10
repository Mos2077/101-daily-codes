// EXERCÍCIO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

// URL: https://www.urionlinejudge.com.br/judge/pt/problems/view/1180

// RESUMO: Ler um valor N (tamanho do array) e em seguida ler o array (Como uma string separada por espaços)
// e mostrar qual o menor valor e a posição dele no array

// Faça um programa que leia um valor N. Este N será o tamanho de um vetor X[N].
// A seguir, leia cada um dos valores de X, encontre o menor elemento deste vetor e a sua posição dentro do vetor, 
// mostrando esta informação.

// Entrada
// A primeira linha de entrada contem um único inteiro N (1 < N < 1000), 
// indicando o número de elementos que deverão ser lidos em seguida para o vetor X[N] de inteiros.
// A segunda linha contém cada um dos N valores, separados por um espaço.

// Saída
// A primeira linha apresenta a mensagem “Menor valor:” seguida de um espaço e do menor valor lido na entrada.
// A segunda linha apresenta a mensagem “Posicao:” 
// seguido de um espaço e da posição do vetor na qual se encontra o menor valor lido, 
// lembrando que o vetor inicia na posição zero.


// CÓDIGO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

// Tamanho do array
const n = 5;

// Array de números a ser extraído o menor
const arrayN = [2, 6, 2, 5, -6];

// Variável que armazena o menor, começando pelo primeiro elemento
let lowest = arrayN[0];

// Variável que armazena o index do menor número, começando pelo primeiro
let lowestIndex = 0;

// Array que vai percorrer os restantes elementos do array
for (let index = 1; index < n; index++) {
  // Pegamos o atual elemento a partir do index do "for"
  const currentNumber = arrayN[index];
  
  // Caso esse número seja ainda menor que o menor número que temos registrado...
  if (currentNumber < lowest) {
    // ... então registramos esse número como o menor já registrado
    lowest = currentNumber;
    
    // O mesmo para o index
    lowestIndex = index;
  }
}

// Mostramos no console o valor e o index do menor valor
console.log("Menor valor: " + lowest);
console.log("Posicao: " + lowestIndex);


// Saída esperada para o array [2, 6, 2, 5, -6]
// 'Menor valor: -6'
// 'Posicao: 4'

