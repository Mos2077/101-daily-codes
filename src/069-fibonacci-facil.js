// EXERCÍCIO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>


// CÓDIGO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

// O código que criei utilizar a estrutura "for", apesar de estar funcionando, não senti que estava,
// estava um pouco "gambiarrento"
// Vi que tinha outra alternativa, mas não sabia qual era, então fui pesquisar,
// Então encontrei o código deste site:
// https://www.w3resource.com/javascript-exercises/javascript-recursion-function-exercise-6.php
// Levou alguns minutos, mas consegui entender esse fluxo de loop na mesma função, então vou tentar explicar por aqui

const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

const fib = n => {
  if (n === 1) {
    return [0, 1];
  } else {
    const s = fib(n - 1);
    s.push(s[s.length - 1] + s[s.length - 2]);
    return s;
  }
};

const index = Number(lines.shift()) - 1;

const sequence = fib(index).join(" ");

console.log(sequence);
