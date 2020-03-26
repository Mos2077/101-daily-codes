// EXERCÍCIO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

// URL: https://www.urionlinejudge.com.br/judge/pt/problems/view/1142

// Escreva um programa que leia um valor inteiro N. Este N é a quantidade de linhas de saída que serão apresentadas na execução do programa.

// Entrada
// O arquivo de entrada contém um número inteiro positivo N.

// Saída
// Imprima a saída conforme o exemplo fornecido.


// CÓDIGO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

const num = 7;

for (let i = 1; i <= num * 4; i += 4) {
  console.log(`${i} ${i + 1} ${i + 2} PUM`);
}

// Saída esperada para a quantidade de linhas igual a 7:
// '1 2 3 PUM'
// '5 6 7 PUM'
// '9 10 11 PUM'
// '13 14 15 PUM'
// '17 18 19 PUM'
// '21 22 23 PUM'
// '25 26 27 PUM'
