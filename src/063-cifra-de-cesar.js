// EXERCÍCIO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

// URL: https://www.urionlinejudge.com.br/judge/pt/problems/view/1253

// Júlio César usava um sistema de criptografia, agora conhecido como Cifra de César, 
// que trocava cada letra pelo equivalente em duas posições à Esquerda no alfabeto 
// (por exemplo, 'C' vira 'A', 'T' vira 'R', etc.). Ao começo do alfabeto nós voltamos para o fim, isto é 'A' vira 'Y'. 
// Nós podemos, é claro, tentar trocar as letras com quaisquer número de posições.

// Entrada
// A entrada contém vários casos de teste.
// A primeira linha de entrada contém um inteiro N que indica a quantidade de casos de teste. 
// Cada caso de teste é composto por duas linhas.
// A primeira linha contém uma string com até 50 caracteres maiúsculos ('A'-'Z'), 
// que é a sentença após ela ter sido codificada através desta Cifra de César modificada.
// A segunda linha contém um número que varia de 0 a 25 
// e que representa quantas posições cada letra foi deslocada para a direita.

// Saída
// Para cada caso de teste de entrada,
// imprima uma linha de saída com o texto decodificado (transformado novamente para o texto original) 
// conforme as regras acima e o exemplo abaixo.


// CÓDIGO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

// String a ser encriptada
const str = "LIPPSASVPH";

// Chave da cifra
const key = 4;

// Variável que vai armazenar a string encriptada
let newStr = "";

// Vamos criar um for que percorre letra por letra da string
// Onde i significa o index dessa letra, ou seja, quando i = 0, estamos na primeira letra da string original
for (let i = 0; i < str.length; i++) {
  
  // Pegamos o código da letra (leia sobre charCodeAt e fromCharCode)
  const code = str.charCodeAt(i);
  
  // E a partir dessa letra, pegamos o novo código, que é o código da letra original menos a chave
  // Pois: A = 65, B = 66
  // Para a letra B com chave 1, precisamos substrair 1 para que ela fique com o mesmo código da letra A
  let newCode = code - key;
  
  // Porém, e se a chave for menor que A?
  // Então o novo código receberá 90 menos (65 que é o mínimo menos o novo código (inválido))
  if (newCode < 65) newCode = 91 - (65 - newCode);

  // E criaremos um char a partir desse novo código, que é o código criptografado
  // Então a letra também vai sair criptografada
  newStr += String.fromCharCode(newCode);
}

// Mostramos a string criptografada no console
console.log(newStr);


// Saída esperada para a string "LIPPSASVPH" com chave igual a 4:
// 'HELLOWORLD'
