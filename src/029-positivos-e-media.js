// EXERCÍCIO

// URL: https://www.urionlinejudge.com.br/judge/en/problems/view/1064

// Leia 6 valores. Em seguida, mostre quantos destes valores digitados foram positivos. 
// Na próxima linha, deve-se mostrar a média de todos os valores positivos digitados, com um dígito após o ponto decimal.

// Entrada
// A entrada contém 6 números que podem ser valores inteiros ou de ponto flutuante. 
// Pelo menos um destes números será positivo.

// Saída
//O primeiro valor de saída é a quantidade de valores positivos. 
// A próxima linha deve mostrar a média dos valores positivos digitados.


// CÓDIGO

let numbers = [6, 9, 7, 2, 9, 1];
let positives = [];
let sum = 0;

for(let i = 0; i < 6; i++){
  const num = Number(lines.shift());
  if(num >= 0){
    positives.push(num);
    sum += num;
  }
}

const average = sum / positives.length;


console.log(positives.length + " valores positivos");

console.log(average.toFixed(1));
