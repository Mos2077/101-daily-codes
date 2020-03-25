// EXERCÍCIO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

// URL: https://www.urionlinejudge.com.br/judge/pt/problems/view/1143

// Escreva um programa que leia um valor inteiro N (1 < N < 1000). 
// Este N é a quantidade de linhas de saída que serão apresentadas na execução do programa.

// Entrada
// O arquivo de entrada contém um número inteiro positivo N.

// Saída
// Imprima a saída conforme o exemplo fornecido.


// CÓDIGO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

const num = Number("5");

for (let i = 1; i <= num; i++) {
  const square = i * i;
  const cube = square * i;
  console.log(`${i} ${square} ${cube}`);
}
