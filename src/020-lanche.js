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

// Primeiro elemento é o ID, e o segundo elemento é a quantidade
const [id, qtd] = [3, 2];

// Variável com o preço do produto seleciondo, começamos com 0, pois ainda não sabemos qual elemento é
let price = 0;

// Fazemos um switch pro ID da comida (ID = código)
switch(id){
  case 1: 
    // Se o ID for 1, o preço será R$ 4
    price = 4;
  break;
  case 2: 
    // Se o ID for 2, o preço será R$ 4,50
    price = 4.5;
  break;
  case 3: 
    // Se o ID for 3, o preço será R$ 5,00
    price = 5;
  break;
  case 4: 
    // Se o ID for 4, o preço será R$ 2,00
   price = 2;
  break;
  case 5: 
    // Se o ID for 1, o preço será R$ 1,50
    price = 1.5;
  break;
}

// Aqui calculamos o total multiplicando o preço do produto pela quantidade
const total = price * qtd; 

// Mostramos no console
console.log(`Total: R$ ${total.toFixed(2)}`); 
