// Seu irmão mais novo aprendeu a escrever apenas um, dois e três, em Inglês. Ele escreveu muitas dessas palavras em um papel e a sua tarefa é reconhecê-las. Nota-se que o seu irmão mais novo é apenas uma criança, então ele pode fazer pequenos erros: para cada palavra, pode haver, no máximo, uma letra errada. O comprimento de palavra é sempre correto. É garantido que cada palavra que ele escreveu é em letras minúsculas, e cada palavra que ele escreveu tem uma interpretação única.

// Entrada
// A primeira linha contém o número de palavras que o seu irmão mais novo escreveu. Cada uma das linhas seguintes contém uma única palavra com todas as letras em minúsculo. As palavras satisfazem as restrições acima: no máximo uma letra poderia estar errada, mas o comprimento da palavra está sempre correto. Haverá, no máximo, 1000 palavras de entrada.

// Saída
// Para cada caso de teste, imprima o valor numérico da palavra.

const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

const cases = Number(lines.shift());

for (let caseIndex = 0; caseIndex < cases; caseIndex++) {
  const str = lines.shift();

  if (str.length > 3) {
    console.log("3");
    continue;
  }

  const isOne = str.match(/.ne|o.e|on./);
  if (isOne) {
    console.log("1");
    continue;
  }

  const isTwo = str.match(/.wo|t.o|tw./);
  if (isTwo) console.log("2");
}
