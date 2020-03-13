// EXERCÍCIO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

// URL: https://www.urionlinejudge.com.br/judge/pt/problems/view/1073

// Leia um valor inteiro N. Apresente o quadrado de cada um dos valores pares, de 1 até N, inclusive N, se for o caso.

// Entrada
// A entrada contém um valor inteiro N (5 < N < 2000).

// Saída
// Imprima o quadrado de cada um dos valores pares, de 1 até N, conforme o exemplo abaixo.

// Tome cuidado! Algumas linguagens tem por padrão apresentarem como saída 1e+006 ao invés de 1000000 o que ocasionará resposta errada. 
// Neste caso, configure a precisão adequadamente para que isso não ocorra.


// CÓDIGO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

// Declaramos o número de entrada do programa
const num = 8;

// Criamos um for que:
// Declara uma variável que começa com o valor 2 (print)
// Esse for vai se repetir enquanto print for menor ou igual a num (pois o exercício os pede para incluir o número de entrada caso ele for par)
// E incrementamos 2 à variável print a cada repetição do for
for (let print = 2; print <= num; print+=2) {
  // Mostramos no console o valor de print, elevado ao quadrado = print ** 2... o que resulta em: "PRINT_VALUE^2 = PRINT_VALUE AO QUADRADO"
  console.log(print + "^2 = " + (print ** 2));
}

// Saída esperada com o valor 8 na entrada:
// '2^2 = 4'
// '4^2 = 16'
// '6^2 = 36'
// '8^2 = 64'

