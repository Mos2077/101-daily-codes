// ATIVIDADE <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

// URL: https://www.urionlinejudge.com.br/judge/pt/problems/view/1257
// RESUMO: Ler uma string abaixo da outra, e para cada string, pegar a vez dela, se é a primeira string, 
// a vez vale 0, se é a segunda string, a vez vale 1, 
// e somar com a posição da letra na string, sempre usando o 0 de base + a posição da letra no albabeto, 
// e imprimir a soma de todas as letras de todas as strings de um caso de teste

// Você terá como uma entrada várias linhas, cada uma com uma string.
// O valor de cada caracter é computado como segue:

// Valor = (Posição no alfabeto) + (Elemento de entrada) + (Posição do elemento)

// Todas posições são baseadas em zero. 'A' tem posição 0 no alfabeto, 'B' 
// tem posição 1 no alfabeto, ... O cálculo de hash retornado é a soma de todos os caracteres da entrada. 
// Por exemplo, se a entrada for:
// CBA
// DDD

// então cada caractere deverá ser computado como segue:

// 2 = 2 + 0 + 0 : 'C' no elemento 0 posição 0
// 2 = 1 + 0 + 1 : 'B' no elemento 0 posição 1
// 2 = 0 + 0 + 2 : 'A' no elemento 0 posição 2
// 4 = 3 + 1 + 0 : 'D' no elemento 1 posição 0
// 5 = 3 + 1 + 1 : 'D' no elemento 1 posição 1
// 6 = 3 + 1 + 2 : 'D' no elemento 1 posição 2

// O cálculo final de hash será 2+2+2+4+5+6 = 21.

// Entrada
// A entrada contém vários casos de teste. 
// A primeira linha de entrada contém um inteiro N que indica a quantidade de casos de teste. 
// Cada caso de teste inicia com um inteiro L (1 ≤ L ≤ 100) que indica a quantidade de linhas que vem a seguir. 
// Cada uma destas L linhas contém uma string com até 50 letras maiúsculas ('A' - 'Z').

// Saída
// Para cada caso de teste imprima o valor de hash que é calculado conforme o exemplo apresentado acima.


// CÓDIGO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

const getIndex = a => a.charCodeAt() - 65;

const stringsQtd = 1;

let sum = 0;

for (let k = 0; k < l; k++) {
  const str = "ZZZZZZZZZZ";

  str.split("").forEach((item, i) => {
    const value = getIndex(item) + i + k;

    sum += value;
  });
}

console.log(sum);


// Saída esperada para
