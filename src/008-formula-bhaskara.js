// EXERCÍCIO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

// URL: https://www.urionlinejudge.com.br/judge/pt/problems/view/1036

// Leia 3 valores de ponto flutuante e efetue o cálculo das
// raízes da equação de Bhaskara. Se não for possível calcular as raízes,
// mostre a mensagem correspondente “Impossivel calcular”, caso haja uma divisão por 0
// ou raiz de numero negativo.

// Entrada
// Leia três valores de ponto flutuante (double) A, B e C.

// Saída
// Se não houver possibilidade de calcular as raízes, apresente a mensagem "Impossivel calcular". Caso contrário, imprima o resultado das raízes com 5 dígitos após o ponto, com uma mensagem correspondente conforme exemplo abaixo. Imprima sempre o final de linha após cada mensagem.

// CÓDIGO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

// Ponto de entrada dos coeficientes da fórmula de Bhaskara
const entrada = "10.3 203.0 5.0";

// Aqui dividimos a string em um array e pegamos o valor de A, B, C
const [A, B, C] = entrada.split(" ").map(coef => Number(coef));

// Calculamos o Delta
const delta = B * B - 4 * A * C;

// Calculamos o divisor da fórmula
const divisor = 2 * A;

// Caso o divisor seja 0 ou delta for menor que zero, então é impossível calcular as raízes
if (!divisor || delta < 0) {
  console.log("Impossivel calcular");
} else {
  // Se caiamos no else, então é possível calcular
  // Como é possível calcular as raízes, então calculamos tanto para a raíz 1 quanto para a raíz 2
  const x1 = (-B + Math.sqrt(delta)) / divisor;
  const x2 = (-B - Math.sqrt(delta)) / divisor;

  // Mostramos no console as raízes que calculamos acima
  // Usamos o toFixed() para forçar o número a mostrar uma certa quantidade de casas decimais, quantidade essa que passamos como parâmetro da função
  console.log(`R1 = ${x1.toFixed(5)}`);
  console.log(`R2 = ${x2.toFixed(5)}`);
}

// Saída esperada para a entrada como os coeficientes 10.3, 203 e 5 (a, b e c, respectivamente):
// 'R1 = -0.02466'
// 'R2 = -19.68408'

