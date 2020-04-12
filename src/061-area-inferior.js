// https://www.urionlinejudge.com.br/judge/pt/problems/view/1188

// Read an uppercase character that indicates an operation that will be performed in an array M[12][12]. Then, calculate and print the sum or average considering only that numbers that are included in the green area of this array, like shown in the following figure.

// Input
// The first line of the input contains a single uppercase character O ('S' or 'M'), indicating the operation Sum or Average (Média in portuguese) to be performed with the elements of the array. Follow 144 floating-point numbers (double) of the array.

// Output
// Print the calculated result (sum or average), with one digit after the decimal point.



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
