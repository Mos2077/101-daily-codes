// A sua impressora foi infectada por um vírus e está imprimindo de forma incorreta. Depois de olhar para várias páginas impressas por um tempo, você percebe que ele está imprimindo cada linha de dentro para fora. Em outras palavras, a metade esquerda de cada linha está sendo impressa a partir do meio da página até a margem esquerda. Do mesmo modo, a metade direita de cada linha está sendo impressa à partir da margem direita e prosseguindo em direção ao centro da página.

// Por exemplo a linha:
// THIS LINE IS GIBBERISH

// está sendo impressa como:
// I ENIL SIHTHSIREBBIG S

// Da mesma foma, a linha " MANGOS " está sendo impressa incorretamente como "NAM  SOG". Sua tarefa é desembaralhar (decifrar) a string a partir da forma como ela foi impressa para a sua forma original. Você pode assumir que cada linha conterá um número par de caracteres.

// Entrada
// A entrada contém vários casos de teste. A primeira linha de entrada contém um inteiro N que indica a quantidade de casos de teste. Seguem N linhas, cada uma com uma frase com no mínimo 2 e no máximo 100 caracteres de letras maiúsculas e espaços que deverá ser desembaralhada (decifrada) à partir da forma impressa para a sua forma original, conforme especificação acima.

// Saída
// Para cada linha de entrada deverá ser impressa uma linha de saída com a frase decifrada, conforme a especificação acima.



const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

const cases = Number(lines.shift());

for (let cas = 0; cas < cases; cas++) {
  const a = lines.shift().split("");

  const firstPart = a.length;

  const b = a.filter((_, i) => i <= firstPart / 2 - 1);
  const c = a.filter((_, i) => i > firstPart / 2 - 1);

  console.log(b.reverse().join("") + c.reverse().join(""));
}
