// EXERCÍCIO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

// URL: https://www.urionlinejudge.com.br/judge/en/problems/view/1064

// Leia 6 valores. Em seguida, mostre quantos destes valores digitados foram positivos. 
// Na próxima linha, deve-se mostrar a média de todos os valores positivos digitados, com um dígito após o ponto decimal.

// Entrada
// A entrada contém 6 números que podem ser valores inteiros ou de ponto flutuante. 
// Pelo menos um destes números será positivo.

// Saída
//O primeiro valor de saída é a quantidade de valores positivos. 
// A próxima linha deve mostrar a média dos valores positivos digitados.


// CÓDIGO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

// Array de números de tamanho fixo (6) 
// Pegaremos os valores positivos e faremos média entre os valores positivos
let numbers = [6, 9, 7, 2, 9, 1];

// Array que vai armazenas os valores positivos
// Basicamente vamos copiar os elementos positivos fo array anterior para este
let positives = [];

// Variável que armazena a soma dos valores positivos
let sum = 0;

// For que vai percorrer cada elemento do array numbers
for(let i = 0; i < numbers.length; i++){
  // Pegamos o número atual usando como base o index (i) do for
  const num = numbers[i];

  // Se esse número for maior ou igual a zero, vamos adicionar ao array de números
  // E somar à variável sum
  if(num >= 0){
    // Nota: é o push() que adiciona o elemento ao array positives
    positives.push(num);
    // Short sintaxe para sum = sum + num
    sum += num;
  }
}

// Aqui calcularemos a média, ou seja, pegamos a soma dos elementos positivos
// E dividimos pela quantidade de números positivos (o positives.length)
const average = sum / positives.length;


// Mostramos no console a quantidade de valores positivos
console.log(positives.length + " valores positivos");

// Mostramos no console a média dedses valores positivos com uma casa decimal
// Nota: é o toFixed() que permite formatar o número com uma casa decimal
console.log(average.toFixed(1));
