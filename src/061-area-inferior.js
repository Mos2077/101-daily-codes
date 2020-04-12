// CÓDIGO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

// URL: https://www.urionlinejudge.com.br/judge/pt/problems/view/1188

// Leia um caractere maiúsculo, que indica uma operação que deve ser realizada e uma matriz M[12][12]. 
// Em seguida, calcule e mostre a soma ou a média considerando somente aqueles elementos que estão na área inferior da matriz, 
// conforme ilustrado abaixo (área verde).

// Entrada
// A primeira linha de entrada contem um único caractere Maiúsculo O ('S' ou 'M'), indicando a operação (Soma ou Média) 
// que deverá ser realizada com os elementos da matriz. Seguem os 144 valores de ponto flutuante de dupla precisão (double)
// que compõem a matriz.

// Saída
// Imprima o resultado solicitado (a soma ou média), com 1 casa após o ponto decimal.


// EXERCÍCIO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

// Valores para constar que é uma matriz 12 por 12
const [x, y] = [12, 12];

// Valor mínimo do index y para permitir a soma
let initOn = 5;

// Valor máximo do index y para permitir a soma
let endOn = 6;

// Variável que armazena a soma
let sum = 0;

// Criando um for dentro do for para criar o fluxo de um array bidimensional
for (let a = 0; a < x; a++) {
  for (let b = 0; b < y; b++) {
    // Vamos atribuir o valor 10 à variável value, ou seja:
    // Vamos preencher cada elemento do array[12][12] com o valor 10
    const value = 10;
  
    // Porém, queremos somar apenas os elementos do array no qual se encaixam nas condições:
    // - X maior que 6
    // - Dependendo de X, o valor mínimo e máximo para Y muda
    if (a >= 7 && b >= initOn && b <= endOn) {
      // Se se encaixar na condição
      // Adicione o valor atual à soma
      sum += value;
    }
  }
  // Isso que quer dizer "Dependendo de X, o valor mínimo e máximo para Y muda":
  // Para x = 7, y tem valor minimo de 5 e valor maximo de 6
  // Para x = 8, y tem valor minimo de 4 e valor maximo de 7
  // ... etc
  // Usando deste padrão que há no problema, fazemos o seguinte:
  // A cada vez que repetimos o laço para X, perguntamos:
  // x é maior que 7?
  if (a >= 7) {
    // Se for, subtraimos um ao valor mínimo (initOn)
    initOn--;
    
    // E somamos um ao valor máximo (endOn)
    endOn++;
  }
}

// Depois somente mostramos a soma com uma casa decimal
console.log(sum.toFixed());


// Saída esperada para a leitrua constante de valor 10 na matriz bidimensional:
// '300'
