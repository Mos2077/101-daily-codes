// EXERCÍCIO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

// URL: https://www.urionlinejudge.com.br/judge/pt/problems/view/1181

// Neste problema você deve ler um número, indicando uma linha da matriz na qual uma operação deve ser realizada,
// um caractere maiúsculo, indicando a operação que será realizada, e todos os elementos de uma matriz M[12][12].
// Em seguida, calcule e mostre a soma ou a média dos elementos que estão na área verde da matriz, conforme for o caso.
// A imagem abaixo ilustra o caso da entrada do valor 2 para a linha da matriz, 
// demonstrando os elementos que deverão ser considerados na operação.

// Visite a URL para ver a imagem

// Entrada
// A primeira linha de entrada contem um número L (0 ≤ L ≤ 11) indicando a linha que será considerada para operação.
// A segunda linha de entrada contém um único caractere Maiúsculo T ('S' ou 'M'), indicando a operação (Soma ou Média) 
// que deverá ser realizada com os elementos da matriz. Seguem os 144 valores de ponto flutuante que compõem a matriz, 
// sendo que a mesma é preenchida linha por linha, da linha 0 até a linha 11, sempre da esquerda para a direita.

// Saída
// Imprima o resultado solicitado (a soma ou média), com 1 casa após o ponto decimal.


// CÓDIGO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

// Entradas do usuário: [Linha a ser considerada, e operação a ser feita]
const lines = ["3", "S"];

// Criamos uma matriz de 144 posições, 12 por 12, e cada elemento no padrão da sequência (uma PA) [1, 2, 3, 4, 5, 6, 7... até 144]
const arr = Array.from({ length: 144 }).map((_, i) => i + 1);

// Primeiro ponto de entrada: linha a ser considerada da matriz
const line = 3;

// Segundo ponto de entrada: é a operação que vamos realizar com a soma dos termos da linha selecionada
const op = "S";

// Variável que vai armazenar a soma
let sum = 0;

// Criamos um for para percorrer cada item da matriz,
// Na direção de leitura:
// Da esquerda para a direita, de cima pra baixo
for (let x = 0; x < 12; x++) {
  for (let y = 0; y < 12; y++) {
    // y é a coluna, e x é a linha

    // Pegamos o elemento da matriz da vez
    const value = arr.shift();

    // E verificamos, se NÃO estamos na linha a ser considerada,
    // Continuamos o for, ou seja, paramos o código aqui
    if (x !== line) continue;

    // Agora, se chegamos aqui, então essa é a linha escolhida, então, vamos adicionar à variável sum
    sum += Number(value);
  }
}

// Se a operação escolhida for a soma, então apenas mostramos a variável sum
if (op === "S") {
  console.log(sum.toFixed(1));
}
// Se a operação escolhida for a média, então mostramos a soma dividido por 12, que é a quantidade de colunas
else {
  console.log((sum / 12).toFixed(1));
}


// Saída esperada para a matriz [1, 2, 3, 4, 5, ..., 144], linha 3 e operação de soma:
// '510.0'
