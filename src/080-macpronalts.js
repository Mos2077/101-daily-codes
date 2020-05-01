// EXERCÍCIO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

// https://www.urionlinejudge.com.br/judge/pt/problems/view/1985

// O MacPRONALTS está com uma super promoção, exclusivo para os competidores da primeira Seletiva do MaratonaTEC.
// Só que teve um problema, todos os maratonistas foram tentar comprar ao mesmo tempo, com isso gerou uma fila muito grande. 
// O pior é que a moça do caixa estava sem calculadora ou um programa para ajudá-la a calcular com maior agilidade,
// eis que surge você para fazer um programa para ajudar a coitada e aumentar a renda do MacPRONALTS.
// Segue o cardápio do dia contendo o número do produto e seu respectivo valor.

// 1001 | R$ 1.50
// 1002 | R$ 2.50
// 1003 | R$ 3.50
// 1004 | R$ 4.50
// 1005 | R$ 5.50

// Entrada
// A primeira entrada informada é a quantidade de produtos comprados (1 <= p <= 5). 
// Para cada produto segue a quantidade (1 <= q <= 500) que o consumidor comprou.

// Obs.: não poderão ser informados números de produtos repetidos.

// Saída
// Você deve imprimir o valor da compra com duas casas decimais.


// CÓDIGO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

// Todas as entradas do usuário:
const lines = ["2", "1001 2", "1005 3"];

// O shift() retorna o valor 2 e deixa o array lines com o valor ["1001 2", "1005 3"]
const qtd = Number(lines.shift());

// Armazena o total da conta do cliente
let total = 0;

// O cardápio, onde a chave do objeto é um código, e seu valor é o preço
const menu = {
  "1001": 1.5,
  "1002": 2.5,
  "1003": 3.5,
  "1004": 4.5,
  "1005": 5.5
};

// Criamos um for para percorrer cada item do array de entradas
for (let i = 0; i < qtd; i++) {
  // Pegamos outro valor do array
  const item = lines.shift();
  
  // Extraímos o dessa entrada, o código do produto e a quantidade
  const [cod, itemQtd] = item.split(" ").map(a => Number(a));
  
  // E então, adicionamos ao total o preço do produto com aquele código (menu[codigo]) vezes a quantidade (itemQtd)
  total += menu[cod] * itemQtd;
}

// E então mostramos no console o valor total da compra
console.log(total.toFixed(2));


// Saída esperada para o Array de entradas ["2", "1001 2", "1005 3"]: 
// '19.50'
