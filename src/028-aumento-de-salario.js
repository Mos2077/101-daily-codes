// EXERCÍCIO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

// URL: https://www.urionlinejudge.com.br/judge/pt/problems/view/1048

// A empresa ABC resolveu conceder um aumento de salários a seus funcionários de acordo com a tabela abaixo:

// Salário	Percentual de Reajuste

// A - 0 - 400.00
// B - 400.01 - 800.00
// C - 800.01 - 1200.00
// D - 1200.01 - 2000.00
// E - Acima de 2000.00

// A - 15%
// B - 12%
// C - 10%
// D - 7%
// E - 4%

// Leia o salário do funcionário e calcule e mostre o novo salário, bem como o valor de reajuste ganho e o índice reajustado, em percentual.

// Entrada
// A entrada contém apenas um valor de ponto flutuante, com duas casas decimais.

// Saída
// Imprima 3 linhas na saída: o novo salário, o valor ganho de reajuste e o percentual de reajuste ganho, conforme exemplo abaixo.


// CÓDIGO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

// Declaramos o salário do funcionário
const salary = 405.00;

// Criamos uma variável para armazenar a porcentagem de reajuste, ainda nula
let percent;

// Caso o salário seja menor que 400, então a porcentagem do reajuste deve ser de 15% (usamos o inteiro apenas)
if (salary <= 400) {
  percent = 15;
}
// Caso o salário seja maior que 400 e menor ou igual a 800, então a porcentagem do reajuste deve ser de 12% (usamos o inteiro apenas)
else if (salary > 400 && salary <= 800) {
  percent = 12;
} 
// Caso o salário seja maior que 800 e menor ou igual a 1200, então a porcentagem do reajuste deve ser de 10% (usamos o inteiro apenas)
else if (salary > 800 && salary <= 1200) {
  percent = 10;
} 
// Caso o salário seja maior que 800 e menor ou igual a 1200, então a porcentagem do reajuste deve ser de 7% (usamos o inteiro apenas)
else if (salary > 800 && salary <= 1200) {
  percent = 7;
} 
// Se o salario não caiu em nenhum teste anterior, então ele é maior que 1200
else {
  // Então a porcentagem de reajuste será de 4%
  percent = 4;
}

// Calculos o reajuste multiplicando o salário pela porcentagem (divida por cem para transformar de porcentagem para decimal)
const reajust = salary * (percent / 100);
// O novo salário será somente o salário + reajuste
const newSalary = salary + reajust;

// Mostramos no console cada valor calculado como pedido no exercício
console.log("Novo salario: " + newSalary.toFixed(2));
console.log("Reajuste ganho: " + reajust.toFixed(2));
console.log("Em percentual: " + percent + " %");
