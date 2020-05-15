// EXERCÍCIO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

// URL: https://www.urionlinejudge.com.br/judge/pt/problems/view/2483

// Você fica tão feliz no natal que tem vontade de gritar para todo mundo: "Feliz natal!!". Pra colocar toda essa felicidade pra fora, você montou um programa que, colocado um índice I de felicidade, seu grito de natal é mais animado.

// Entrada
// A entrada é composta por um inteiro I (1 < I ≤ 104) que representa o índice de felicidade.

// Saída
// A saída é composta pela frase "Feliz natal!", sendo repetidas I vezes a última letra a da frase. Uma quebra de linha é necessária após a impressão da frase.


// CÓDIGO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

// Ponto de entrada, que representa o nível de felicidade natalina
const happiness = 10;

// Então criamos um array com o tamanho igual ao nível
const _ = Array.from({ length: happiness })
  // A a partir desse array de tamanho N (definido pela variável "happiness") vazio, 
  // substituímos por um array do mesmo tamanho, só que populado com N letras "a"
  .map(() => "a")
  // E em seguida, juntamos todas essas letras "a" em uma string só!
  .join("");

// Formamos a string final, juntando a frase e colocando os "a"'s entre o "t" e o "l"
const string = "Feliz nat" + _ + "l!";

// E mostramos no console
console.log(string);


// Saída esperada para o nível de felicidade natalina 10:
// 'Feliz nataaaaaaaaaal!'
