// EXERCÍCIO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

// URL: https://www.urionlinejudge.com.br/judge/pt/problems/view/1115

// Escreva um programa para ler as coordenadas (X,Y) de uma quantidade indeterminada de pontos no sistema cartesiano. Para cada ponto escrever o quadrante a que ele pertence. O algoritmo será encerrado quando pelo menos uma de duas coordenadas for NULA (nesta situação sem escrever mensagem alguma).

// Entrada
// A entrada contém vários casos de teste. Cada caso de teste contém 2 valores inteiros.

// Saída
// Para cada caso de teste mostre em qual quadrante do sistema cartesiano se encontra a coordenada lida, conforme o exemplo.


// CÓDIGO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

const string = "2 2";
const [x, y] = string.split(" ").map(item => Number(item));
if (x > 0 && y > 0) {
  console.log("primeiro");
} else if (x > 0 && y < 0) {
  console.log("quarto");
} else if (x < 0 && y > 0) {
  console.log("segundo");
} else if (x < 0 && y < 0) {
  console.log("terceiro");
}
