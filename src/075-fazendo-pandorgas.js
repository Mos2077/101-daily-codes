// ATIVIDADE <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

// URL: https://www.urionlinejudge.com.br/judge/pt/problems/view/1585

// Anastácia adora construir pipas (ou pandorgas) para seus amigos.
// Pedro, que sabe disso, separou vários retalhos de bambus da fábrica de móveis de seu tio 
// que seriam descartados para dar a Anastácia. 
// Ao entregar os bambus à Anastácia, Pedro perguntou
// a ela qual era a maior pipa que poderia ser construída com aqueles retalhos de bambus. 
// Anastácia, então, que não é muito boa em calcular, quer que você a ajude nesta tarefa.

// Obs.: Cada pipa é construída com dois pedaços de bambus amarrados em forma de cruz, formando um losango.

// Entrada
// A entrada contém vários casos de teste. A primeira linha de entrada contém um inteiro N que indica a quantidade de pipas que serão construídas. Cada uma das N linhas a seguir contém dois valores inteiros x (10 ≤ x ≤ 100) e y (10 ≤ y ≤ 100) que indicam o tamanho dos dois bambus utilizados para construir a pipa.

// Saída
// Para cada caso de teste de entrada, imprima um valor inteiro (desconsiderando a parte decimal) correspondente a àrea da pipa criada, em cm2, seguido de um espaço e do texto "cm2", sem as aspas.


// CÓDIGO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

const cases = Number(lines.shift());

for (let cas = 0; cas < cases; cas++) {
  const str = lines.shift();

  const diam = str.split(" ").map(item => Number(item));

  const [d1, d2] = diam;

  const area = (d1 * d2) / 2;

  console.log(parseInt(area) + " cm2");
}
