// ATIVIDADE <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

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

const args = [5, 3];

const [winner] = [r(...args), b(...args), c(...args)].sort(
  (a, b) => b.result - a.result
);

console.log(winner.message);

// Saída esperada 
