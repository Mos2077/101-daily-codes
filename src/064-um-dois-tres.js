// EXERCÍCIO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

// URL: https://www.urionlinejudge.com.br/judge/pt/problems/view/1332

// Seu irmão mais novo aprendeu a escrever apenas um, dois e três, em Inglês.
// Ele escreveu muitas dessas palavras em um papel e a sua tarefa é reconhecê-las. 
// Nota-se que o seu irmão mais novo é apenas uma criança, então ele pode fazer pequenos erros: 
// para cada palavra, pode haver, no máximo, uma letra errada. O comprimento de palavra é sempre correto. 
// É garantido que cada palavra que ele escreveu é em letras minúsculas, 
// e cada palavra que ele escreveu tem uma interpretação única.

// Entrada
// A primeira linha contém o número de palavras que o seu irmão mais novo escreveu.
// Cada uma das linhas seguintes contém uma única palavra com todas as letras em minúsculo.
// As palavras satisfazem as restrições acima: no máximo uma letra poderia estar errada, 
// mas o comprimento da palavra está sempre correto. Haverá, no máximo, 1000 palavras de entrada.

// Saída
// Para cada caso de teste, imprima o valor numérico da palavra.


// CÓDIGO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

// Ponto de entrada, são as letras que a criança escreveu
const str = "twn";

// Temos os casos 1, 2 e 3, 3 é a única palavra em ingles dentre as três, que tem mais de 3 letras, então:
// Se o tamanho da String for maior que três...
if (str.length > 3) {
  // Ele quer dizer 3
  console.log("3");
} else {
  // Se não for, então vamos procurar por:
  // Vamos ver se ele quer falar 1 (one):
  // A regex /.ne|o.e|on./ quer dizer: a string tem esse formato: Xne ou oXe ou onX?
  // Onde X representa qualquer outra letra, afinal, ele pode errar uma letra
  // Se tiver esse formato, então ele quer dizer 1
  const isOne = str.match(/.ne|o.e|on./);
  if (isOne) {
    // Imprimimos
    console.log("1");
  } else {
    // Fazemos a mesma coisa só que com 2 em inglês: a palavra "two"
    const isTwo = str.match(/.wo|t.o|tw./);
    if (isTwo) console.log("2");
  }
}


// Saída esperada para entrada igual a string "twn":
// '2'
