// EXERCÍCIO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

// Na matemática, um Número Primo é aquele que pode ser dividido somente por 1 (um) e por ele mesmo. Por exemplo, o número 7 é primo, pois pode ser dividido apenas pelo número 1 e pelo número 7.

// Entrada
// A entrada contém vários casos de teste. A primeira linha da entrada contém um inteiro N (1 ≤ N ≤ 100), indicando o número de casos de teste da entrada. Cada uma das N linhas seguintes contém um valor inteiro X (1 < X ≤ 107), que pode ser ou não, um número primo.

// Saída
// Para cada caso de teste de entrada, imprima a mensagem “X eh primo” ou “X nao eh primo”, de acordo com a especificação fornecida.

const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

const cases = Number(lines.shift());

for(let x = 0; x < cases; x++){
    const num = Number(lines.shift());

    let divisors = 0;

    for (let a = 1; a <= num; a++) {
        if (num % a === 0) divisors++;
        if (divisors > 2) break;
    }

    const message = num + (divisors === 2 ? " eh primo" : " nao eh primo");

    console.log(message);
}
