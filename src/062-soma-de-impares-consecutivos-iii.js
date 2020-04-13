// EXERCÍCIO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

// URL: https://www.urionlinejudge.com.br/judge/pt/problems/view/1158

// RESUMO: ler um número n e mostrar a soma da seguinte lógica:
// N + N + 2 + N + 4 + N + 6 + ....
// Onde o N lemos como primeiro número da entrada e a quantidade de vezes que deve ser repetida a soma como segundo número da entrada
// Obs: caso N seja par, adicione 1 para que fique ímpar

// Leia um valor inteiro N que é a quantidade de casos de teste que vem a seguir. Cada caso de teste consiste de dois inteiros X e Y. 
// Você deve apresentar a soma de Y ímpares consecutivos a partir de X inclusive o próprio X se ele for ímpar. Por exemplo:
// para a entrada 4 5, a saída deve ser 45, que é equivalente à: 5 + 7 + 9 + 11 + 13
// para a entrada 7 4, a saída deve ser 40, que é equivalente à: 7 + 9 + 11 + 13

// Entrada
// A primeira linha de entrada é um inteiro N que é a quantidade de casos de teste que vem a seguir. 
// Cada caso de teste consiste em uma linha contendo dois inteiros X e Y.

// Saída
// Imprima a soma dos consecutivos números ímpares a partir do valor X.


// CÓDIGO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

let n = 11;
let sequence = 5;

const isEven = n => n % 2 === 0;

if (isEven(n)) n++;

let ac = n;

let increment = 2;

ac = n * sequence;

for (let a = 0; a < sequence - 1; a++) {
  ac += increment;
  increment += 2;
}

console.log(ac);


// Saída esperada para o número 75 
// e o número 5 como quantidade de somas sequenciais:
// '75'
