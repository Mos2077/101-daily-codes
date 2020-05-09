// URL: https://www.urionlinejudge.com.br/judge/pt/problems/view/1262

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


const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

while (true) {
  const str = lines.shift();

  if (!str) break;

  const process = lines.shift();

  const readRegex = new RegExp(`R{1,${process}}`, "g");

  const readMatches = str.match(readRegex);
  const writeMatches = str.match(/W/g);

  const r = readMatches ? readMatches.length : 0;
  const w = writeMatches ? writeMatches.length : 0;

  console.log(r + w);
}
