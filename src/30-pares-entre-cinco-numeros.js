// EXERCÍCIO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

// URL: https://www.urionlinejudge.com.br/judge/pt/problems/view/1065

// Faça um programa que leia 5 valores inteiros. Conte quantos destes valores digitados são pares e mostre esta informação.

// Entrada
// O arquivo de entrada contém 5 valores inteiros quaisquer.

// Saída
// Imprima a mensagem conforme o exemplo fornecido, indicando a quantidade de valores pares lidos.


// CÓDIGO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

// Números que vamos analisar, um por um, e contar quantos deles são pares
const numbers = [7, -5, 6, -4, 12];

// Variável que conta quantos números pares têm no array fixo de 5 posições
let evenCount = 0;

// For que vai permitir percorrer por cada elemento do array numbers e verificar se o número é par ou não
for (let i = 0; i < numbers.length; i++) {
  // Em cada repetição, pegamos o número atual
  const num = numbers[i];
  
  // E verificamos: se o resto da divisão desse número por 2 for igual a 0, então este número é par, se for, então adicionamos 1 à variável evenCount
  // Nota: a instrução ++ é uma abreviação para: evenCount = evenCount + 1
  if (num % 2 === 0) evenCount++;
}

// Mostramos no console a quantidade de números pares
console.log(evenCount + " valores pares");

// Saída esperada com esse valor de entrada: [7, -5, 6, -4, 12]
// '3 valores pares'
