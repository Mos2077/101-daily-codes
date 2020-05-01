// EXERCÍCIO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

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


// CÓDIGO

// Todas as entradas do usuário:
const lines = ["2", "1001 2", "1005 3"];

// O shift() retorna o valor 2 e deixa o array lines com o valor ["1001 2", "1005 3"]
const qtd = Number(lines.shift());

let total = 0;

const menu = {
  "1001": 1.5,
  "1002": 2.5,
  "1003": 3.5,
  "1004": 4.5,
  "1005": 5.5
};

for (let i = 0; i < qtd; i++) {
  const item = lines.shift();
  const [cod, itemQtd] = item.split(" ").map(a => Number(a));
  total += menu[cod] * itemQtd;
}

console.log(total.toFixed(2));
