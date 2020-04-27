// EXERCÍCIO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

// URL: https://www.urionlinejudge.com.br/judge/pt/problems/view/1555

// Na última aula de matemática, Rafael, Beto e Carlos aprenderam algumas novas funções matemáticas.
// Cada um deles se identificou com uma função em especial, e resolveram competir para ver quem tinha a função de maior resultado.

// A função que Rafael escolheu é r(x, y) = (3x)² + y².

// Já Beto escolheu a função b(x, y) = 2(x²) + (5y)².

// Carlos, por sua vez, escolheu a função c(x, y) = -100x + y³.

// Dados os valores x e y, diga quem escolheu a função com o maior resultado.

// Entrada
// A primeira linha de entrada contém um inteiro N que determina a quantidade de casos de teste. 
// Cada caso de teste consiste em dois inteiros x e y (1 ≤ x, y ≤ 100), indicando as variáveis a serem inseridas na função.

// Saída
// Para cada caso de teste imprima uma linha, contendo uma frase, indicando quem ganhou a competição.
// Por exemplo, se Rafael ganhar a competição, imprima “Rafael ganhou”. Assuma que nunca haverá empates.


// CÓDIGO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

// Para cada variável como função de cada amigo, fazemos o seguinte:

// r = Rafael; b = Beto; c = Carlos
// Para cada um deles, criamos uma função que recebe 2 parâmetros: x e y
// E então, retornamos um objeto neste formato:
// {
//   "result": INSIRA_A_FORMULA_AQUI,
//   "message": "NOME_AQUI ganhou"
// }

const r = (x, y) => ({
  result: (3 * x) ** 2 + y ** 2,
  message: "Rafael ganhou"
});

const b = (x, y) => ({
  result: 2 * x ** 2 + (5 * y) ** 2,
  message: "Beto ganhou"
});

const c = (x, y) => ({
  result: -100 * x + y ** 3,
  message: "Carlos ganhou"
});

// argumentos que serão passados para as funções acima, que representa um array no formato: [x, y]
const args = [5, 3];

// Nesta etapa fazemos o seguinte:
// Criamos um array com os valores retornados das funções de Rafael, Beto e Carlos
// E então usamos a função sort() para colocar os valores em ordem decrescente
// E então desestruturamos o primeiro elemento, pois se ele é o primeiro elemento, quer dizer que é o maior
const [winner] = [r(...args), b(...args), c(...args)].sort(
  (a, b) => b.result - a.result
);

// E então mostramos a mensagem do vencedor, do maior elemento
console.log(winner.message);

// Saída esperada para X = 5 e Y = 3
// 'Beto ganhou'
