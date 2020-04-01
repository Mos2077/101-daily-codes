// EXERCÍCIO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

// Faça um programa que leia um valor T e preencha um vetor N[1000] com a sequência de valores de 0 até T-1 repetidas vezes,
// conforme exemplo abaixo. Imprima o vetor N.

// Entrada
// A entrada contém um valor inteiro T (2 ≤ T ≤ 50).

// Saída
// Para cada posição do vetor, escreva "N[i] = x", onde i é a posição do vetor e x é o valor armazenado naquela posição.

// CÓDIGO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

const qtdLines = 4;

for (let a = 0, b = 0; a < 1000; a++, b === qtdLines - 1 ? (b = 0) : b++) {
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


