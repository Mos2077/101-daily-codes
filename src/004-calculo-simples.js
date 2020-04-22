// EXERCÍCIO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

// URL: https://www.urionlinejudge.com.br/judge/pt/problems/view/1010

// Neste problema, deve-se ler o código de uma peça 1, o número de peças 1,
// o valor unitário de cada peça 1, o código de uma peça 2, o número de peças 2 e o valor unitário de cada peça 2. 
// Após, calcule e mostre o valor a ser pago.

// Entrada
// O arquivo de entrada contém duas linhas de dados.
// Em cada linha haverá 3 valores, respectivamente dois inteiros e um valor com 2 casas decimais.

// Saída
// A saída deverá ser uma mensagem conforme o exemplo fornecido abaixo,
// lembrando de deixar um espaço após os dois pontos e um espaço após o "R$". 
// O valor deverá ser apresentado com 2 casas após o ponto.

// CÓDIGO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

// Aqui é a entrada de dados 1, onde o primeiro valor é o código do produto, o segundo valor é a quantidade de peças, e o terceiro valor é o valor unitário
// Então transformamos essa string em um array de números, e desestruturamos esse array
const [qntPecas1, valorPorPeca1] = "1 1 15.10"
  .split(" ")
  .map(item => Number(item))
  .reverse();

// Fazemos a mesma coisa
const [qntPecas2, valorPorPeca2] = "2 1 15.10"
  .split(" ")
  .map(item => Number(item))
  .reverse();

// Calculamos o preço total do produto 1
const precoAPagar1 = qntPecas1 * valorPorPeca1;

// A mesma coisa só que pro produto 2
const precoAPagar2 = qntPecas2 * valorPorPeca2;

// Calculamos o preço total
const precoTotal = precoAPagar1 + precoAPagar2;

// Então mostramos no console
// Nota: o .toFixed(2) serve para obrigar o numero a mostrar 2 casas decimais
console.log(`VALOR A PAGAR: R$ ${precoTotal.toFixed(2)}`);
