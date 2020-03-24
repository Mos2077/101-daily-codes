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

// Ponto de entrada, essas são as duas strings (A e B) que iremos combinar
const stringA = "ab";
const stringB = "cd";

// Primeiro precisamos saber qual o tamanho da maior string na qual estamos combinando, neste caso, as duas são do mesmo tamanho ebtão não há diferença, porém em outros casos de teste, isso é necessário
const lastIndex =
   > stringB.length ? stringA.length : stringB.length;

// Aqui iremos armazenar a string final, a string combinada
let finalString = "";

// Aqui vamos percorrer X vezes, onde X é o tamanho da maior das duas strings que estamos combinando
for (let i = 0; i < lastIndex; i++) {
  // Aqui vamos pegar o valor atual da string A, "atual" baseada no indice atual
  // Nota: usamos o "|| false" no final por que é possível que a string A seja menor que a string B ou vice versa, isso faz com que, em alguma repetição, em algum caso de teste, seja possível que o valor atual da string A ou B seja undefined, null. E nós não queremos adicionar isso à nossa string final, por isso, essa linha é importante: ela permite armazenar na variável "currentA" o valor da letra atual da string (se houver) ou o valor booleano falso, caso não houver
  const currentA = stringA[i] || false;
  
  // Se o valor existir, adicione à variável string finalString, por isso fizemos aquela vericação anteriormente
  if (currentA) finalString += currentA;

  // Fazemos exatamente a mesma coisa, só que com a string B
  const currentB = stringB[i] || false;
  if (currentB) finalString += currentB;
}

// Ao final do laço, nossa string final está montada, basta exibir no console
console.log(finalString);


// Saída esperada para a combinação das duas strings: "ab" e "cd"
// 'acbd'
