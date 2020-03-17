// EXERCÍCIO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

// URL: https://www.urionlinejudge.com.br/judge/pt/problems/view/1094

// RESUMO: Ler o número de caso de teste, e para cada caso de teste:
// ler uma string (que contém a quantidade e a letra que representa qual animal)
// No final, mostrar um relatório:
// O total de animais, o total e a porcentagem de cada animal

// Maria acabou de iniciar seu curso de graduação na faculdade de medicina e precisa de sua ajuda para organizar os experimentos 
//de um laboratório o qual ela é responsável. Ela quer saber no final do ano, 
// quantas cobaias foram utilizadas no laboratório e o percentual de cada tipo de cobaia utilizada.

// Este laboratório em especial utiliza três tipos de cobaias: sapos, ratos e coelhos. 
// Para obter estas informações, ela sabe exatamente o número de experimentos que foram realizados, 
// o tipo de cobaia utilizada e a quantidade de cobaias utilizadas em cada experimento.

// Entrada
// A primeira linha de entrada contém um valor inteiro N que indica os vários casos de teste que vem a seguir. 
// Cada caso de teste contém um inteiro Quantia (1 ≤ Quantia ≤ 15) que representa a quantidade de cobaias utilizadas e um caractere 
// Tipo ('C', 'R' ou 'S'), indicando o tipo de cobaia (R:Rato S:Sapo C:Coelho).

// Saída
// Apresente o total de cobaias utilizadas, o total de cada tipo de cobaia utilizada 
// e o percentual de cada uma em relação ao total de cobaias utilizadas, 
// sendo que o percentual deve ser apresentado com dois dígitos após o ponto.


// CÓDIGO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

const inputs = ["10 C", "6 R", "15 S", "5 C", "14 R"];

const animals = {
  C: {
    name: "coelhos",
    count: 0
  },
  R: {
    name: "ratos",
    count: 0
  },
  S: {
    name: "sapos",
    count: 0
  },
  getTotal: function() {
    return this.C.count + this.R.count + this.S.count;
  },
  getPercentOf: function(animal) {
    const targetCount = this[animal].count;
    const total = this.getTotal();
    const percent = (targetCount * 100) / total;
    return percent.toFixed(2);
  }
};

for (let caseIndex = 0; caseIndex < inputs.length; caseIndex++) {
  const experiment = inputs[caseIndex];
  const [quantity, animal] = experiment.split(" ");
  animals[animal].count += Number(quantity);
}

console.log("Total: " + animals.getTotal() + " cobaias");
console.log("Total de coelhos: " + animals.C.count);
console.log("Total de ratos: " + animals.R.count);
console.log("Total de sapos: " + animals.S.count);
console.log("Percentual de coelhos: " + animals.getPercentOf("C") + " %");
console.log("Percentual de ratos: " + animals.getPercentOf("R") + " %");
console.log("Percentual de sapos: " + animals.getPercentOf("S") + " %");


// Saída esperada para a entrada sendo como o array de strings 'Total: 50 cobaias' ["10 C", "6 R", "15 S", "5 C", "14 R"];
// 'Total: 50 cobaias'
// 'Total de coelhos: 15'
// 'Total de ratos: 20'
// 'Total de sapos: 15'
// 'Percentual de coelhos: 30.00 %'
// 'Percentual de ratos: 40.00 %'
// 'Percentual de sapos: 30.00 %'

