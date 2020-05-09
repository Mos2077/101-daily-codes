// EXERCÍCIO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

// URL: https://www.urionlinejudge.com.br/judge/pt/problems/view/1262

// RESUMO: Some a quantidade de vezes que a letra W aparece em uma string 
// + a quantidade de vezes que a letra R aparece em uma string,
// mas leve em conta que uma letra R pode ser considerada um grupo de letras R que contam apenas como uma,
// onde o número da quantidade esse número é uma das entradas do programa

// Em diversos sistemas de computação, vários processos podem ler de um mesmo recurso durante o mesmo ciclo de máquina, 
// mas somente um processo pode escrever no recurso durante o ciclo de máquina. Leituras e gravações não podem se mistura0r
// em um mesmo ciclo de máquina. Dado um histórico de leituras e gravações que ocorreram durante a execução de um determinado
// processamento, e um número inteiro que representa o número de processos usados, calcule a duração mínima do processamento,
// em ciclos de máquina. O rastro de histórico representa cada leitura por uma letra 'R' e cada gravação por uma letra 'W'.

// Por exemplo, se o rastro de histórico é "RWWRRR" e o número de processos é 3, então o número mínimo de ciclos de máquina será 4:
// um para a primeira leitura, um para cada uma das gravações e apenas um para todo o último grupo de leituras.

// Entrada
// A entrada contém diversos casos de testes. Cada caso é composto por duas linhas. 
// A primeira linha contém o rastro de processamento em uma sequência de caracteres 'R' ou 'W'
// formando um String de 1 a 50 caracteres. A segunda linha contém um valor inteiro P (1 ≤ P ≤ 10), 
// representando o número de processos, ou seja, uma indicação de quantas operações de leitura podem ser processadas simultaneamente. 
// A entrada termina em EOF.

// Saída
// Para cada caso de teste determine e imprima o número mínimo de ciclos de máquina necessários para se processar o rastro informado. 
// Vide exemplos abaixo.


// CÓDIGO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

// Nota: TUDO sobre Regex que eu fiz aqui eu não sei de cabeça, o que fiz foi ir até a documentação da MDN sobre Regex e pesquisar;
// Você também pode: pesquise Expressões Regulares MDN no Google, ou vá em:
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Regular_Expressions

// String a ser analizada
const str = "RWWRRR";

// Melhor definição que consegui encontrar para essa variável é:
// Um grupo de [process] letras R seguidas conta como uma
const process = 3;

// Criamos uma regex que pega um grupo de letras R
// Definimos um valor mínimo do grupo, que é pelo menos uma
// E o máximo desse grupo é o valor da variável process
// Ou seja, essa regex vai pegar a letra "R" em "WWWR" e contar como uma
// Mas também vai pegar "RRR" em "WWWRRR" e contar como apenas uma também
const readRegex = new RegExp(`R{1,${process}}`, "g");

// O método match retorna um array com todas as substrings que foram pegas na string de entrada,
// mas se não pegar nenhuma string, essa função retorna null
const readMatches = str.match(readRegex);

// Essa também é outra forma de declarar uma regex: /REGEX_AQUI/g ao invés de usar o operador new na classe RegExp
// E nessa regex fazemos algo simples: pegamos todas as letras W da string, se não houver, também vai retornar null
const writeMatches = str.match(/W/g);

// A quantidade de letras "r" é definida pela propriedade length do array retornado pelo método match, 
// mas se esse array não existir, quer dizer que a quantidade é 0,fazemos a mesma coisa para o "w"
const r = readMatches ? readMatches.length : 0;
const w = writeMatches ? writeMatches.length : 0;

// E por fim mostramos a quantidade de mínima de ciclos somando r + w
console.log(r + w);

// Saída esperada para a string "RWWRRR" e para a quantidade de leituras simultâneas "4"
// 4
