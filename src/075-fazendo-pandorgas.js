// EXERCÍCIO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

// URL: https://www.urionlinejudge.com.br/judge/pt/problems/view/1585

// Anastácia adora construir pipas (ou pandorgas) para seus amigos.
// Pedro, que sabe disso, separou vários retalhos de bambus da fábrica de móveis de seu tio 
// que seriam descartados para dar a Anastácia. 
// Ao entregar os bambus à Anastácia, Pedro perguntou
// a ela qual era a maior pipa que poderia ser construída com aqueles retalhos de bambus. 
// Anastácia, então, que não é muito boa em calcular, quer que você a ajude nesta tarefa.

// Obs.: Cada pipa é construída com dois pedaços de bambus amarrados em forma de cruz, formando um losango.

// Entrada
// A entrada contém vários casos de teste. A primeira linha de entrada contém um inteiro N 
// que indica a quantidade de pipas que serão construídas. 
// Cada uma das N linhas a seguir contém dois valores inteiros x (10 ≤ x ≤ 100) e y (10 ≤ y ≤ 100) 
// que indicam o tamanho dos dois bambus utilizados para construir a pipa.

// Saída
// Para cada caso de teste de entrada, imprima um valor inteiro (desconsiderando a parte decimal)
// correspondente a àrea da pipa criada, em cm2, seguido de um espaço e do texto "cm2", sem as aspas.


// CÓDIGO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

// Cada variável armazena um dos diâmetros do bambu
const d1 = 10;
const d2 = 20;

// Calculamos a área usando a fórmula simplificada para calcular a área de um losango:
// A = D * d / 2
// A = Área; D = Diâmetro maior; d = Diâmetro menor;
const area = (d1 * d2) / 2;

// E então mostramos a parte inteira da área
console.log(parseInt(area) + " cm2");


// Saída esperada para os diâmetros 10 e 20
// '100 cm2'
