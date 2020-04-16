// EXERCÍCIO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

// URL: https://www.urionlinejudge.com.br/judge/pt/problems/view/1165

// Na matemática, um Número Primo é aquele que pode ser dividido somente por 1 (um) e por ele mesmo.
// Por exemplo, o número 7 é primo, pois pode ser dividido apenas pelo número 1 e pelo número 7.

// Entrada
// A entrada contém vários casos de teste. A primeira linha da entrada contém um inteiro N (1 ≤ N ≤ 100),
// indicando o número de casos de teste da entrada. 
// Cada uma das N linhas seguintes contém um valor inteiro X (1 < X ≤ 107),
// que pode ser ou não, um número primo.

// Saída
// Para cada caso de teste de entrada, imprima a mensagem “X eh primo” ou “X nao eh primo”, 
// de acordo com a especificação fornecida.


// CÓDIGO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

// Número a ser verificado se é primo ou não
const num = 7;

// Variável que vai armazenar a quantidade de divisores que o número possui:
// Lembrando que primos tem apenas 2 divisores: ele mesmo e 1
let divisors = 0;

// Criamos um for que se repete desde o número 1 até o valor do número
for (let a = 1; a <= num; a++) {
  // Para cada valor,
  // verificamos, se o número "num" for divisível pelo valor de "a", incrementamos 1 à variável "divisors"
  if (num % a === 0) divisors++;
  
  // Se o número de divisores for maior que 2, antes de acabar o laço, já destruímos ele
  if (divisors > 2) break;
}

// Armazenamos na variável mensagem o valor de saída:
// Se o número tiver exatamente 2 divisores, então ele é primo, se não, não é
const message = num + (divisors === 2 ? " é primo" : " é eh primo");

// Imprimimos a mensagem no console
console.log(message);


// Saída esperada para o número 7 como entrada:
// '7 é primo'
