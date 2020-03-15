// EXERCÍCIO 

// URL: https://www.urionlinejudge.com.br/judge/pt/problems/view/1059

// Faça um programa que mostre os números pares entre 1 e 100, inclusive.

// Entrada
// Neste problema extremamente simples de repetição não há entrada.

// Saída
// Imprima todos os números pares entre 1 e 100, inclusive se for o caso, um em cada linha.


// CÓDIGO

// Criamos um for que:
// Imprime a variável num a cada repetição
// Iniciamos a variável num com 2, pois assim mostra a saída do exercício
// Repetimos esse for enquanto a variável num for menor ou igual a 100
// E para não se tornar um loop infinito, nós acrescentamos 2 à variável num a cada repetição
for(let num = 2; num <= 100; num+= 2){
  // E a cada repetição mostramos a variável num no console
  console.log(num)
}

// Como não há entrada, a saída esperada é esta:
// 2
// 4
// 6
// 8
// ...
// 96
// 98
// 100
