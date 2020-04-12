Leia um caractere maiúsculo, que indica uma operação que deve ser realizada e uma matriz M[12][12]. Em seguida, calcule e mostre a soma ou a média considerando somente aqueles elementos que estão na área inferior da matriz, conforme ilustrado abaixo (área verde).

Entrada
A primeira linha de entrada contem um único caractere Maiúsculo O ('S' ou 'M'), indicando a operação (Soma ou Média) que deverá ser realizada com os elementos da matriz. Seguem os 144 valores de ponto flutuante de dupla precisão (double) que compõem a matriz.

Saída
Imprima o resultado solicitado (a soma ou média), com 1 casa após o ponto decimal.


const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

const op = lines.shift() === "S" ? value => value : value => value / 144;

const [x, y] = [12, 12];

const values = [];

let initOn = 5;
let endOn = 6;

let sum = 0;

for (let a = 0; a < x; a++) {
  for (let b = 0; b < y; b++) {
    const value = Number(lines.shift());

    if (a >= 7 && b >= initOn && b <= endOn) {
      sum += value;
    }
  }
  if (a >= 7) {
    initOn--;
    endOn++;
  }
}

console.log(op(sum).toFixed(1));
