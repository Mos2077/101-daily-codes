// EXERCÍCIOS <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

// URL: https://www.urionlinejudge.com.br/judge/pt/problems/view/1048

// A empresa ABC resolveu conceder um aumento de salários a seus funcionários de acordo com a tabela abaixo:

// Salário	Percentual de Reajuste
// 0 - 400.00
// 400.01 - 800.00
// 800.01 - 1200.00
// 1200.01 - 2000.00
// Acima de 2000.00

// 15%
// 12%
// 10%
// 7%
// 4%

// Leia o salário do funcionário e calcule e mostre o novo salário, bem como o valor de reajuste ganho e o índice reajustado, em percentual.

// Entrada
// A entrada contém apenas um valor de ponto flutuante, com duas casas decimais.

// Saída
// Imprima 3 linhas na saída: o novo salário, o valor ganho de reajuste e o percentual de reajuste ganho, conforme exemplo abaixo.


// CÓDIGO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

const salary = Number(lines.shift());

let percent;

if (salary <= 400) {
  percent = 15;
} else if (salary > 400 && salary <= 800) {
  percent = 12;
} else if (salary > 800 && salary <= 1200) {
  percent = 10;
} else if (salary > 1200 && salary <= 2000) {
  percent = 7;
} else {
  percent = 4;
}

const reajust = salary * (percent / 100);
const newSalary = salary + reajust;
console.log("Novo salario: " + newSalary.toFixed(2));
console.log("Reajuste ganho: " + reajust.toFixed(2));
console.log("Em percentual: " + percent + " %");
