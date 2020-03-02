// EXERCÍCIO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

// URL: https://www.urionlinejudge.com.br/judge/pt/problems/view/1038

// Com base na tabela abaixo, escreva um programa que leia o código de um item e a quantidade deste item. 
// A seguir, calcule e mostre o valor da conta a pagar.

// Entrada
// O arquivo de entrada contém dois valores inteiros 
// correspondentes ao código e à quantidade de um item conforme tabela acima.

// Saída
// O arquivo de saída deve conter a mensagem "Total: R$ "
// seguido pelo valor a ser pago, com 2 casas após o ponto decimal.

// CÓDIGO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');
const [id, qtd] = lines.shift().split(" ").map(item => Number(item));

let price = 0;

switch(id){
  case 1: 
    price = 4;
  break;
  case 2: 
    price = 4.5;
  break;
  case 3: 
    price = 5;
  break;
  case 4: 
   price = 2;
  break;
  case 5: 
    price = 1.5;
  break;
}

const total = price * qtd; 
console.log(`Total: R$ ${total.toFixed(2)}`); 
