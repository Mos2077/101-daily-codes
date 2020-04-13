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

// Número de entrada
let n = 11;

// Quantidade de somas sequenciais
let sequence = 5;

// Função que recebe um número e retorna true se esse número for par, se não, retorna falso
const isEven = n => n % 2 === 0;

// Caso o número de entrada for par, adicionamos um
if (isEven(n)) n++;

// Variável que vai ac umular a soma sequencial
let ac = n;

// Valor inicial do incremento:
// N + 2 é a primeira soma, depois fica N + 4, N + 6... etc
let increment = 2;

// Damos a primeira parte da soma para a variável "ac" 
// que é simplesmente o valor N multiplicado pela quantidade de somas sequenciais
ac = n * sequence;

// E criamos um laço que se repete X vezes
// X é a quantidade de somas sequenciais
for (let a = 0; a < sequence - 1; a++) {
  // A cada repetição, incrementamos ao acumulador o valor do incremento atual
  ac += increment;
  // E em seguida adicionamos 2 para que na próxima repetição, se houver, não seja mais N + 2, e sim N + 4 por exemplo
  increment += 2;
}

// Mostramos a soma sequencial de números ímpares no console
console.log(ac);


// Saída esperada para o número 75 
// e o número 5 como quantidade de somas sequenciais:
// '75'
