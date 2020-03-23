// Faça um programa que leia as notas referentes às duas avaliações de um aluno. 
// Calcule e imprima a média semestral. 
// Faça com que o algoritmo só aceite notas válidas (uma nota válida deve pertencer ao intervalo [0,10]). 
// Cada nota deve ser validada separadamente.

// Entrada
// A entrada contém vários valores reais, positivos ou negativos. 
// O programa deve ser encerrado quando forem lidas duas notas válidas.

// Saída
// Se uma nota inválida  for lida, deve ser impressa a mensagem "nota invalida".
// Quando duas notas válidas forem lidas, deve ser impressa a mensagem "media = " seguido do valor do cálculo. 
// O valor deve ser apresentado com duas casas após o ponto decimal.

const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

const numbers = [];

let validNumbers = numbers.length === 2;

while(!validNumbers){
    const num = Number(lines.shift());
    if(num >= 0 && num <= 10) numbers.push(num);
    else console.log("nota invalida");
    validNumbers = numbers.length === 2;
}

console.log("media = " + ((numbers[0] + numbers[1]) / 2));
