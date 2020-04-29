// EXERCÍCIO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

// URL: https://www.urionlinejudge.com.br/judge/pt/problems/view/1589

// Você tem em mãos dois cabos circulares de energia. O primeiro cabo tem raio R1 e o segundo raio R2. 
// Você precisa comprar um conduite circular (veja a imagem abaixo que ilustra um conduite) 
// de maneira a passar os dois cabos por dentro dele:

// OBS: Visite a URL do exercício para ver a imagem

// Qual o menor raio do conduite que você deve comprar? Em outras palavras, dado dois círculos, 
// qual o raio do menor círculo que possa englobar ambos os dois?

// Entrada
// Na primeira linha teremos um inteiro T (T ≤ 10000), indicando o número de casos de teste.
// Na única linha de cada caso teremos dois números inteiros R1 e R2, indicando os respectivos raios. 
// Os inteiros serão positivos e todas as contas caberão em um inteiro normal de 32 bits.

// Saída
// Em cada caso, imprima o menor raio possível em uma única linha


// CÓDIGO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

// Valor do raio do círculo 1 (r1) e valor do raio do círculo 2  (r2)
const [r1, r2] = [2, 8];

// Aqui calculamos o diâmetro total do círculo maior:
// o raio do círculo 1 * 2 que dá o diâmetro somado pelo mesmo do círculo 2
const d = r1 * 2 + r2 * 2;

// E então calculamos o raio do circulo maior:
// Que é simplesmente o diâmetro do círculo maior / 2
const r = d / 2;

// E então mostramos no console
console.log(r);


// Saída esperada para r1 = 2 e r2 = 8:
// '10'
