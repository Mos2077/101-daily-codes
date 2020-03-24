// EXERCÍCIO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

// URL: https://www.urionlinejudge.com.br/judge/pt/problems/view/1238

// RESUMO: pega duas strings, "ab" e "cd" por exemplo, 
// e faz uma nova string intercalando entre a primeira letra da primeira string + a primeira letra da segunda string
// e faz isso pras seguintes, então as duas strings "ab" e "cd" combinadas ficariam "acbd"

// Implemente um programa denominado combinador, que recebe duas strings e deve combiná-las, alternando as letras de cada string, 
// começando com a primeira letra da primeira string, seguido pela primeira letra da segunda string, 
// em seguida pela segunda letra da primeira string, e assim sucessivamente. 
// As letras restantes da cadeia mais longa devem ser adicionadas ao fim da string resultante e retornada.

// Entrada
// A entrada contém vários casos de teste. A primeira linha contém um inteiro N que indica a quantidade de casos de teste que vem a seguir. 
// Cada caso de teste é composto por uma linha que contém duas cadeias de caracteres,
// cada cadeia de caracteres contém entre 1 e 50 caracteres inclusive.

// Saída
// Combine as duas cadeias de caracteres da entrada como mostrado no exemplo abaixo e exiba a cadeia resultante.


// CÓDIGO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

const stringA = "ab";
const stringB = "cd";

const lastIndex =
  stringA.length > stringB.length ? stringA.length : stringB.length;

const finalString = [];

for (let i = 0; i < lastIndex; i++) {
  const currentA = stringA[i] || false;
  if (currentA) finalString.push(currentA);

  const currentB = stringB[i] || false;
  if (currentB) finalString.push(currentB);
}
console.log(finalString.join(""));