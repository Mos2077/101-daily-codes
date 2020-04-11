// EXERCÍCIO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

// URL: https://www.urionlinejudge.com.br/judge/pt/problems/view/2060

// RESUMO: Leia um array de números, e veja nesse array, quantos são divisíveis por 2, 3, 4, 5

// Bino e Cino são colegas inseparáveis. Bino gosta de criar desafios matemáticos para Cino resolver. Desta vez, Bino gerou uma lista de números e perguntou ao Cino quantos números da lista são múltiplos de 2, 3, 4 e 5.

// Esse desafio pode parecer simples, porém, quando a lista contém muitos números, Cino se confunde e acaba errando alguns cálculos. Para ajudar Cino, faça um programa para resolver o desafio de Bino.

// Entrada
// A primeira linha da entrada consiste em um inteiro N (1 ≤ N ≤1000), representando a quantidade de números na lista de Bino.

// A segunda linha contém N inteiros Li (1 ≤ Li ≤ 100), representando os números da lista de Bino.

// Saída
// Imprima a quantidade de números múltiplos de 2, 3, 4 e 5 presentes na lista. Observe a formatação da saída nos exemplos, pois ela deve ser seguida rigorosamente.


// CÓDIGO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

// Um objeto no formato:
// { 
//    "Número que representa a número múltiplo em questão, nomeada de key": {
//      "count": "Inteiro que representa a quantidade de vezes que esse múltiplo está presente na sequência do array"
//    }
// }
// Inicie todos os números múltiplos com 0
let multiples = {
  "2": {
    count: 0
  },
  "3": {
    count: 0
  },
  "4": {
    count: 0
  },
  "5": {
    count: 0
  }
};

// Atalho para:
// Object.keys(multiples).forEach(func);
const getKeys = func => Object.keys(multiples).forEach(func);

// Chama a função getKey passando uma função A
const addMultiple = a =>
  getKeys(key => {
    // Função A
    // Função que recebe um número e verifica se ele é múltiplo por "key"
    // "key" é a chave do objeto que definimos no objeto de entrada
    // Se a for múltiplo por "key", então adicione 1 na prop "count" do objeto.key
    // Onde "key" sempre está representando um número múltiplo
    a % Number(key) === 0 && multiples[key].count++;
  });

// String de número que vamos analisar...
const arr = [2, 5, 4, 20, 10]
  // Para cada número... chamamos a função addMultiple, passando o número em questão como parâmetro
  .forEach(item => addMultiple(Number(item)));

// Para cada "key" do objeto inicial, 
// mostramos no console sua prop count como a quantidade de vezes que ele aparece no array que analisamos
// E pegamos sua "key" e mostramos como o número múltiplo
getKeys(key => console.log(multiples[key].count + " Multiplo(s) de " + key));

// Saída esperada para o array de números [2, 5, 4, 20, 10]:
// '4 Multiplo(s) de 2'
// '0 Multiplo(s) de 3'
// '2 Multiplo(s) de 4'
// '3 Multiplo(s) de 5'
