// EXERCÍCIO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

// URL: https://www.urionlinejudge.com.br/judge/pt/problems/view/1164

// RESUMO: Ler um número N, somar todos os seus números divisores entre um até N - 1 
// e imprimir o "número é perfeito" se a soma for igual ao número, caso contrário, imprima "o número não é perfeito"

// Na matemática, um número perfeito é um número inteiro para o qual a soma de todos os seus divisores positivos próprios 
// (excluindo ele mesmo) é igual ao próprio número. Por exemplo o número 6 é perfeito, pois 1+2+3 é igual a 6.
// Sua tarefa é escrever um programa que imprima se um determinado número é perfeito ou não.

// Entrada
// A entrada contém vários casos de teste. A primeira linha da entrada contém um inteiro N (1 ≤ N ≤ 20), 
// indicando o número de casos de teste da entrada. Cada uma das N linhas seguintes contém um valor inteiro X (1 ≤ X ≤ 108),
// que pode ser ou não, um número perfeito.

// Saída
// Para cada caso de teste de entrada, imprima a mensagem “X eh perfeito” ou “X nao eh perfeito”, 
// de acordo com a especificação fornecida.

// Nota: tenho um pequeno toc com palavras substituindo acento por "h",
// então vou usar acento ao invés de "h" e quebrar um pouco a saída exercício

// CÓDIGO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

// Número de entrada, é o número que vamos analisar se é perfeito ou não
const num = 28;

// Variável que vai armazenar a soma de todos seus divisores
let sum = 0;

// For que vai percorrer do 1 até o número N - 1
for (let a = 1; a < num; a++) {
  // Para cada número:
  // Verificamos se é divisível pelo número N (usando o operador de resto da divisão)
  // Se for, incrementamos o valor no número atual ("a") à variável que guarda a soma dos divisores
  if (num % a === 0) sum += a;
}

// Se a variável for soma for igual ao número N, então ele é perfeito
const message = num + (sum === num ? " é perfeito" : " nao é perfeito");

// Imprimimos a mensagem no console
console.log(message);

// Saída esperada para o número 28:
// '28 eh perfeito'
