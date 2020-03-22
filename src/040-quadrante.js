// EXERCÍCIO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

// URL: https://www.urionlinejudge.com.br/judge/pt/problems/view/1115

// Escreva um programa para ler as coordenadas (X,Y) de uma quantidade indeterminada de pontos no sistema cartesiano. Para cada ponto escrever o quadrante a que ele pertence. O algoritmo será encerrado quando pelo menos uma de duas coordenadas for NULA (nesta situação sem escrever mensagem alguma).

// Entrada
// A entrada contém vários casos de teste. Cada caso de teste contém 2 valores inteiros.

// Saída
// Para cada caso de teste mostre em qual quadrante do sistema cartesiano se encontra a coordenada lida, conforme o exemplo.


// CÓDIGO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

// Ponto de entrada, uma string que representa o ponto no eixo cartesiano que vamos analisar
const string = "2 2";

// Usamos o método split e map para pegar os 2 números presentes na string
const [x, y] = string.split(" ").map(item => Number(item));

// Analisamos cada caso:

// 1. Primeiro caso:
// Se x e y for maior que zero, ele está presente nesta parte do eixo:
//       + y . . .
//         | . . . 
//         | . . .  
// - x ___________ + x
//         |
//         |
//       - y


if (x > 0 && y > 0) {
  console.log("primeiro");
} 
// 2. Segundo caso:
// Se x for maior que zero e y for menor que zero, então o ponto está presente nesta parte do eixo:
//        + y 
//          | 
//          |   
// - x __________ + x
//          | . . .
//          | . . . 
//        - y . . .
else if (x > 0 && y < 0) {
  console.log("quarto");
} 

// 3. Terceiro caso:
// Se x for menor que zero, e y for maior que zero, então o ponto está presente nesta parte do eixo:
//     . . . + y 
//     . . .| 
//     . . .|   
// - x ___________ + x
//          |
//          |
//           - y
else if (x < 0 && y > 0) {
  console.log("segundo");
} 

// 4. Quarto e ultimo caso:
// Se x e y forem menor que zero, então o ponto está presente nesta parte do eixo:
//          + y 
//          | 
//          |   
// - x ___________ + x
//     . . .|
//     . . .|
//     . . . - y
else if (x < 0 && y < 0) {
  console.log("terceiro");

// Saída esperada para a entrada como uma string com o ponto (2, 2) no eixo cartesiano:
// 'primeiro'

