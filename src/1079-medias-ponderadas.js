// EXERCÍCIO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

// URL: https://www.urionlinejudge.com.br/judge/pt/problems/view/1079

// Resumo: Ler a quantidade de casos de teste, e para cada caso de teste, ler 3 números, com pesos 2, 3 e 5, respectivamente, 
// e mostrar a média entre eles com uma casa decimal

// Leia 1 valor inteiro N, que representa o número de casos de teste que vem a seguir. 
// Cada caso de teste consiste de 3 valores reais, cada um deles com uma casa decimal. 
// Apresente a média ponderada para cada um destes conjuntos de 3 valores, 
// sendo que o primeiro valor tem peso 2, o segundo valor tem peso 3 e o terceiro valor tem peso 5.

// Entrada
// O arquivo de entrada contém um valor inteiro N na primeira linha. 
// Cada N linha a seguir contém um caso de teste com três valores com uma casa decimal cada valor.

// Saída
// Para cada caso de teste, imprima a média ponderada dos 3 valores, conforme exemplo abaixo.


// CÓDIGO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

// Aqui é ponto de entrada dos valores
// Pegamos o primeiro, segundo e terceiro número de que modo?
// Desestruturando o array que criamos
// Mais divertido do que criar para cada número uma variável, não acha? hasuh
const [a, b, c] = [6.5, 4.3, 6.2];

// Calculamos o dividendo (a parte de cima da divisão)
// Como assim? Pra entender mais um pouquinho de média ponderada, podes clicar neste link:
// https://www.todamateria.com.br/media/
const dividend = a * 2 + b * 3 + c * 5;

// E o divisor, é simplesmente a soma de todos os pesos
const div = 2 + 3 + 5;

// Calculamos a média dividindo o dividendo pelo divisor
const average = dividend / div;

// Criamos a mensagem arredondando a média para uma casa decimal
const message = average.toFixed(1);

// Mostramos no console a mensagem acima
console.log(message);


// Saída esperada para o array de números [6.5, 4.3, 6.2]: 
// '5.7'
