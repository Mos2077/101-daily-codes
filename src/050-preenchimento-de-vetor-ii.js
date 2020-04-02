// EXERCÍCIO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

// URL: https://www.urionlinejudge.com.br/judge/pt/problems/view/1177

// Faça um programa que leia um valor T e preencha um vetor N[1000] com a sequência de valores de 0 até T-1 repetidas vezes,
// conforme exemplo abaixo. Imprima o vetor N.

// Entrada
// A entrada contém um valor inteiro T (2 ≤ T ≤ 50).

// Saída
// Para cada posição do vetor, escreva "N[i] = x", onde i é a posição do vetor e x é o valor armazenado naquela posição.

// CÓDIGO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

// A entrada será o número quatro
const qtdLines = 4;

// Vamos criar um for que vai repetir, ao invés de 1000 vezes como pede o exercício, apenas 20.
// Ou seja, no início do laço vamos declarar as variáveis a e b, ambas com o valor 0
// E para cada repetição, vamos acrescentar 1 à variável a, e fazer a seguinte operação ternária para a variável b:
// Se b for igual ao número de entrada menos um, então dê o valor de 0, se não, acrescente mais um
for (let a = 0, b = 0; a < 20; a++, b === qtdLines - 1 ? (b = 0) : b++) {
  // E então, para cada repetição, mostre no console o valor de "a", como index do array e "b" como número relativo à entrada
  console.log("N[" + a + "] = " + b);
}


// Saída esperada para o número 4 como entrada do usuário:
// 'N[0] = 0'
// 'N[1] = 1'
// 'N[2] = 2'
// 'N[3] = 3'
// 'N[4] = 4'
// 'N[5] = 5'
// 'N[6] = 6'
// 'N[7] = 7'
// 'N[8] = 8'
// 'N[9] = 9'
// 'N[10] = 10'
// 'N[11] = 11'
// 'N[12] = 12'
// 'N[13] = 13'
// 'N[14] = 14'
// 'N[15] = 15'
// 'N[16] = 16'
// 'N[17] = 17'
// 'N[18] = 18'
// 'N[19] = 19'


