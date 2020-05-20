// EXERCÍCIO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

// URL: https://www.urionlinejudge.com.br/judge/pt/problems/view/2006

// Degustação de chá às escuras é a habilidade de identificar um chá usando apenas seus sentidos do olfato e paladar.

// Isto faz parte da Competição Ideal de Consumidores de Chá Puro (da sigla em inglês ICPC), 
// que um programa de TV local está organizando. Durante o show, um bule de chá completo é preparado e
// são entregues uma xícara de chá para cada um dos cinco competidores. Os participantes devem cheirar,
// saborear e avaliar a amostra, de modo a identificar o tipo de chá, que pode ser: (1) o chá branco; (2)
// chá verde; (3) chá preto; ou (4) chá de ervas. No final, as respostas são verificadas para determinar 
// o número de suposições corretas.

// Dado o tipo de chá real e as respostas fornecidas, determinar o número de participantes que receberam a resposta correta.

// Entrada
// A primeira linha contém um inteiro T representando o tipo de chá (1 ≤ T ≤ 4).
// A segunda linha contém cinco inteiros A, B, C, D e E, que indica a resposta dada 
// por cada competidor (1 ≤ A, B, C, D, E ≤ 4).

// Saída
// A saída contém um inteiro representando o número de concorrentes que obtiveram a resposta correta.


// CÓDIGO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

// Pontos de entrada, o primeiro número é o chá correto
// E os seguintes números são as respostas que os participantes deram
const lines = ["1", "1 2 3 2 1"];

// Pegamos a resposta correta, que é o elemento 0 do array de entrada, e deixamos somente as respostas no array
const correct = lines.shift();

// Em seguida, mostramos a quantidade de elementos do array que são iguais à resposta correta
// lines[0] pega a sequência de caracteres "1 2 3 2 1"
// split(" ") cria um array com cada elemento sendo cada resposta: ["1", "2", "3", "2", "1"]
// filter() recebe uma função que será executada para cada elemento do array, 
// e retorna um novo array com todos os itens que retornaram o valor true na função
// (item) => item === correct : pega o item atual e retorna se o item atual é igual ao valor correto
// .length pega a quantidade de elementos do array retornado pelo filter, ou seja, a quantidade de respostas corretas
console.log(lines[0].split(" ").filter((item) => item === correct).length);


// Saída esperada para o chá correto "1" e as respostas "1 2 3 2 1":
// 2
