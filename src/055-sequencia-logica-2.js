// EXERCÍCIO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

// URL: https://www.urionlinejudge.com.br/judge/pt/problems/view/1145

// Escreva um programa que leia dois valores X e Y. 
// A seguir, mostre uma sequência de 1 até Y, passando para a próxima linha a cada X números.

// Entrada
// O arquivo de entrada contém dois valores inteiros, (1 < X < 20) e (X < Y < 100000).

// Saída
// Cada sequência deve ser impressa em uma linha apenas, com 1 espaço em branco entre cada número, conforme exemplo abaixo. 
// Não deve haver espaço em branco após o último valor da linha.


// CÓDIGO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

// Variável de entrada, que vai armazenar de quanto em quanto que devemos quebrar a linha
const interval = 5;

// Variável de entrada, que vai armazenar o valor máximo, onde vamos para o laço de repetição
const max = 30;

// Criamos o laço de repetição da seguinte forma:
// Iniciamos a variável "a" com o valor 1
// Vamos continuar repetindo esse laço enquanto a variável "a" for menor que o valor máximo
// A cada repetição vamos incrementar ao valor de "a" o valor da variável intervalo
for (let a = 1; a <= max; a += interval) {
  
  // Agora, pensando isoladamente para cada repetição (ou seja, para cada linha):
  
  // Iniciamos uma variável que vai conter o valor inicial da linha
  const initial = a;
  // E o valor final da linha
  const final = a + interval;
  
  // A String que vamos imprimir no console, iniciando vazia
  let currentString = "";

  // Segundo laço de repetição que vai:
  // Instanciar uma nova variável "a", difente da instanciada acima, com o valor inicial da variável "initial"
  // Vamos percorrer esse laço enquanto essa variável for menor que a variável "final"
  // A cada repetição, vamos incrementar 1 à essa variável
  for (let a = initial; a < final; a++) {
    // Caso seja o último número da linha, então a String vai receber apenas o número
    if (a === final - 1) currentString += a;
    
    // Se não, vai receber o número mais um espaço vazio na frente
    else currentString += a + " ";
  }
  // Ao final, mostramos a String no console
  console.log(currentString);
}

// Saída esperada para o valor 5 como intervalo e o valor 30 como máximo:
// '1 2 3 4 5'
// '6 7 8 9 10'
// '11 12 13 14 15'
// '16 17 18 19 20'
// '21 22 23 24 25'
// '26 27 28 29 30'
