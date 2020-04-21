// EXERCÍCIO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

// URL: https://www.urionlinejudge.com.br/judge/pt/problems/view/1151

// A seguinte sequência de números 0 1 1 2 3 5 8 13 21... é conhecida como série de Fibonacci. 
// Nessa sequência, cada número, depois dos 2 primeiros, é igual à soma dos 2 anteriores.
// Escreva um algoritmo que leia um inteiro N (N < 46) e mostre os N primeiros números dessa série.

// Entrada
// O arquivo de entrada contém um valor inteiro N (0 < N < 46).

// Saída
// Os valores devem ser mostrados na mesma linha, separados por um espaço em branco.
// Não deve haver espaço após o último valor.


// CÓDIGO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

// O código que criei utilizava a estrutura "for", apesar de estar funcionando, não senti que estava,
// estava um pouco "gambiarrento"
// Vi que tinha outra alternativa, mas não sabia qual era, então fui pesquisar,
// Então encontrei o código deste site:
// https://www.w3resource.com/javascript-exercises/javascript-recursion-function-exercise-6.php
// Levou alguns minutos, mas consegui entender esse fluxo de loop na mesma função, então vou tentar explicar por aqui

const fib = n => {
  if (n === 1) {
    return [0, 1];
  } else {
    const s = fib(n - 1);
    s.push(s[s.length - 1] + s[s.length - 2]);
    return s;
  }
};

// Aqui é o ponto de entrada: X - 1:
// Onde X é até qual número da sequência queremos mostrar
const index = 5 - 1;

// Aqui simplesmente pegamos o array retornado pela função fib e transformamos em uma string,
// string essa que separa cada termo por um espaço
const sequence = fib(index).join(" ");

// Por fim, mostramos a string
console.log(sequence);
