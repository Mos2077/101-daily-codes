const numbers = [2, 6, 8, 1, 10];

let maior = 0;
let index = 0;

for(let i = 0; i < numbers.length; i++){
    const num = numbers[i];
    if(num > maior) {
        maior = num;
        index = i + 1;
    }
}

console.log(maior);
console.log(index);
