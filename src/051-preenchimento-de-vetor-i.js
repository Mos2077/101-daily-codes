// EXERCÍCIO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

// URL: https://www.urionlinejudge.com.br/judge/pt/problems/view/1173

// Leia um valor e faça um programa que coloque o valor lido na primeira posição de um vetor N[10]. 
// Em cada posição subsequente, coloque o dobro do valor da posição anterior. Por exemplo, se o valor lido for 1, 
// os valores do vetor devem ser 1,2,4,8 e assim sucessivamente. Mostre o vetor em seguida.

// Entrada
// A entrada contém um valor inteiro (V<=50).

// Saída
// Para cada posição do vetor, escreva "N[i] = X", onde i é a posição do vetor e X é o valor armazenado na posição i. 
// O primeiro número do vetor N (N[0]) irá receber o valor de V.


// CÓDIGO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

// Ponto de entrada, que vamos usar o valor 1 de demonstração
const n = 1;

// Vamos criar um for que repetirá 10 vezes,
// e nesse for vamos declarar:
// uma variável a que servirá para permitir repetirmos o código 10x
// E usarmos como index da matriz, como pede o exercício
// E usar b como o valor relativo à entrada e ao index da matriz
// Onde, a cada index passado, o valor de b se torna o dobro do valor anterior
// E b terá o valor inicial de n, que é o valor da entrada
for (let a = 0, b = n; a < 10; a++, b *= 2) {
  // Com isso, dentro do for, podemos simplesmente mostrar a como o index da matriz 
  // e b como o número resultante
  console.log("N[" + a + "] = " + b);
}


// Saída esperada para a entrada como o número 1:
// 'N[0] = 1'
// 'N[1] = 2'
// 'N[2] = 4'
// 'N[3] = 8'
// 'N[4] = 16'
// 'N[5] = 32'
// 'N[6] = 64'
// 'N[7] = 128'
// 'N[8] = 256'
// 'N[9] = 512'
