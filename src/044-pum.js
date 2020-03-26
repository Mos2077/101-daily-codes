// EXERCÍCIO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

// URL: https://www.urionlinejudge.com.br/judge/pt/problems/view/1142

// Escreva um programa que leia um valor inteiro N. Este N é a quantidade de linhas de saída que serão apresentadas na execução do programa.

// Entrada
// O arquivo de entrada contém um número inteiro positivo N.

// Saída
// Imprima a saída conforme o exemplo fornecido.


// CÓDIGO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

// Aqui é o ponto de entrada, determina a quantidade de linhas que precisamos imprimir no console
const num = 7;

// Esse for cria as seguintes operações:
// - Cria uma variável "i" com o valor inicial 1
// - Repetiremos esse código dentro do escopo do for enquanto essa variável for menor que a quantidade de linhas vezes 4
// - A cada repetição, o for irá acrescentar 4 ao "i"
// Nota: por que "num" vezes 4? 
// 4 É a quantidade que cada linha vai distanciar da anterior: 1, 5, 9, 13
// Isso faz com que, para repetirmos o for pela quantidade de vezes especificada na variável num,
// Será necessário multiplicar o valor de num * 4, pois a cada linha, i aumenta 4
for (let i = 1; i <= num * 4; i += 4) {
  // Aqui dentro, simplesmente pegamos o "i", imprimimos ele, ele mais 1, e ele mais 2, e a palavra "PUM" no final 
  // (até agora não se o que significa, mas vamos seguir o exercício ehauhueah)
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
