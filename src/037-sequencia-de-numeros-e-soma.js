
let min = 20;
let max = 25;

let sum = 0;
let string = "";

for (; min <= max; min++) {
  sum += min;
  string += !string.length ? min : " " + min;
}

console.log(string + " Sum=" + sum);
