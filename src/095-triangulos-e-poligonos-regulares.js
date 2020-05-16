// EXERCÍCIO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

// URL: https://www.urionlinejudge.com.br/judge/pt/problems/view/2058

// O professor Rafael adora computação gráfica. Ele gosta muito de renderizar objetos, especialmente bonecas.
// Mas ele não gosta de desenhar polígonos regulares usando triângulos. 
// Fazer isso consiste em compor um polígono regular usando apenas triângulos, de forma que os triângulos 
// não se interceptem e se utilize o menor número possível de triângulos na composição. 
// Veja um quadrado e um pentágono com os triângulos na figura.

// Poligonos

// O professor Rafael pediu para você calcular qual o número mínimo de triângulos necessários para
// compor um polígono regular de N lados.

// Obs: visite a URL do problema para ver ilustrações

// Entrada
// A entrada é composta por um número N (3 ≤ N ≤ 109), que indica o número de lados de um polígono regular.

// Saída
// A saída é o número mínimo de triângulos necessários para compor um polígono regular de N lados.


// CÓDIGO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

// Quantidade de lados
const qtd = 5;

// Quantidade de triângulos possíveis, que é somente a quantidade de lados menos 2
const l = qtd - 2;

// Mostramos no console o resultado
console.log(l);


// Saída esperada para a quantidade de lados = 5:
// 3
