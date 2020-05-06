// ATIVIDADE <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

// URL: https://www.urionlinejudge.com.br/judge/pt/problems/view/1534

// Leia um valor inteiro N que é o tamanho da matriz que deve ser impressa conforme o modelo fornecido.

// Entrada
// A entrada contém vários casos de teste e termina com EOF. Cada caso de teste é composto por um único inteiro N (3 ≤ N < 70), que determina o tamanho (linhas e colunas) de uma matriz que deve ser impressa.

// Saída
// Para cada N lido, apresente a saída conforme o exemplo fornecido.


// CÓDIGO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

while (true) {
  const str = lines.shift();

  if (!str) break;

  const n = Number(str);

  let oneI = 0;
  let twoI = n - 1;

  for (let x = 0; x < n; x++) {
    let output = "";
    for (let y = 0; y < n; y++) {
      let current = "";

      if (y === oneI) current = "1";

      if (y === twoI) current = "2";

      if (current === "") current = "3";

      output += current;
    }
    console.log(output);

    oneI++;
    twoI--;
  }
}
