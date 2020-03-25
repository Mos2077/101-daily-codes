// EXERCÍCIO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

// URL: https://www.urionlinejudge.com.br/judge/pt/problems/view/1143

// Escreva um programa que leia um valor inteiro N (1 < N < 1000). 
// Este N é a quantidade de linhas de saída que serão apresentadas na execução do programa.

// Entrada
// O arquivo de entrada contém um número inteiro positivo N.

// Saída
// Imprima a saída conforme o exemplo fornecido.


// CÓDIGO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

// O problema deste exercício está simplesmente elaborar a lógica de calcular cada linha

// Ponto de entrada, este é o número que vamos aplicar a lógica
const num = 6;

// Criamos um for que vai declarar uma variável chamada "i", 
// e continuar repetindo enquanto i for menor ou igual a num, que é a variável de entrada
for (let i = 1; i <= num; i++) {
  // Para cada de repetição, nós precisamos calcular o valor do quadrado e do cubo (baseado no "i")
  
  // Então criamos uma variável "square" que vai armazenar o quadrado do "i",
  const square = i * i;
  
  // e outra variável que vai armazenar o quadrado * i (ou seja, o cubo)
  const cube = square * i;
  
  // Em seguida, apenas imprimimos no console a variável i seguida de seu quadrado e cubo
  console.log(`${i} ${square} ${cube}`);
}

// Saída esperada para a quantidade de repetições igual a 5:
// '1 1 1'
// '2 4 8'
// '3 9 27'
// '4 16 64'
// '5 25 125'
