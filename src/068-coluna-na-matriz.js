// EXERCÍCIO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

// URL: https://www.urionlinejudge.com.br/judge/pt/problems/view/1182

// Neste problema você deve ler um número que indica uma coluna de uma matriz na qual uma operação deve ser realizada, 
// um caractere maiúsculo, indicando a operação que será realizada, e todos os elementos de uma matriz M[12][12].
// Em seguida, calcule e mostre a soma ou a média dos elementos que estão na área verde da matriz, conforme for o caso.
// A imagem abaixo ilustra o caso da entrada do valor 5 para a coluna da matriz,
// demonstrando os elementos que deverão ser considerados na operação.

// Entrada
// A primeira linha de entrada contem um número C (0 ≤ C ≤ 11) indicando a coluna que será considerada para operação. 
// A segunda linha de entrada contém um único caractere Maiúsculo T ('S' ou 'M'),
// indicando a operação (Soma ou Média) que deverá ser realizada com os elementos da matriz.
// Seguem os 144 valores de ponto flutuante que compõem a matriz.

// Saída
// Imprima o resultado solicitado (a soma ou média), com 1 casa após o ponto decimal.


const column = Number(lines.shift());

const op = lines.shift();

let sum = 0;

for (let x = 0; x < 12; x++) {
  for (let y = 0; y < 12; y++) {
    const num = Number(lines.shift());

    if (y === column) sum += num;
  }
}

console.log((op === "S" ? sum : sum / 12).toFixed(1));
