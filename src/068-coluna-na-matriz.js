// EXERCÍCIO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

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


// CÓDIGO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

// Coluna da matriz 12x12 que será considerada
const column = 2;

// Operação que iremos fazer ao considerar todos os elementos da X coluna
// M para mostrar a média
// S para mostrar a soma
const op = "M";

// Para ambos vamos precisar da soma dos termos,
// Então criamos a variável "sum" começando pelo 0
let sum = 0;

// Criamos um for que repete 12 vezes
for (let x = 0; x < 12; x++) {
  // E dentro desse for, criamos outro for que repete também 12 vezes
  // 12 x 12, dá uma matriz 12 por 12
  // y é a variável que armazena a coluna da atual linha
  for (let y = 0; y < 12; y++) {
    // Lemos elemento
    // Vamos considerar todos os elementos como 5, 
    // portanto, é uma matriz 12 por 12 com todos os elementos igual a 5
    const num = 5;
    
    // Caso a coluna atual do laço seja igual à coluna especificada no início do programa,
    // Então, adicionamos o valor do elemento atual à variável sum, 
    // pois ele é um elemento a ser incrementado
    if (y === column) sum += num;
  }
}

// Por fim, mostramos no console a soma, caso a OPeração escolhida for igual a "S"
// Ou mostramos a média, que é a mesma soma, só que dividida por 2
// .toFixed(1) para obrigar os números a terem uma casa decimal
console.log((op === "S" ? sum : sum / 12).toFixed(1));


// Saída esperada para "5", "S" e matriz de 12 por 12 com elementos igual a 5, como entrada:
// '5.0'
