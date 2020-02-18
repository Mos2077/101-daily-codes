// EXERCÍCIO <><><><><><><><><><><><><><><><><><><><><><><><><><><><>

// URL: https://www.urionlinejudge.com.br/judge/pt/problems/view/1008
// Escreva um programa que leia o número de um funcionário, seu número de horas trabalhadas, o valor que recebe por hora e calcula o salário desse funcionário. A seguir, mostre o número e o salário do funcionário, com duas casas decimais.

// Entrada
// O arquivo de entrada contém 2 números inteiros e 1 número com duas casas decimais, representando o número, quantidade de horas trabalhadas e o valor que o funcionário recebe por hora trabalhada, respectivamente.

// Saída
// Imprima o número e o salário do funcionário, conforme exemplo fornecido, com um espaço em branco antes e depois da igualdade. No caso do salário, também deve haver um espaço em branco após o $.

// CÓDIGO

// Ponto de entrada do número do funcionário, número inteiro
const id = 20;

// Ponto de entrada do número de horas trabalhadas, número inteiro
const horas = 50;

// Ponto de entrada do valor recebido por hora, número flutuante
const porHora = 10;

// Calculamos o salário multiplicando o valor recebido por hora pelas horas trabalhadas
const salario = horas * porHora;

// Aqui mostramos no console o número do funcionário e seu salário, respectivamente
// Nota: usamos o toFixed() para forçar que o número, no caso o salário, fique com duas casas decimais
console.log(`NUMBER = ${id}`); 
console.log(`SALARY = U$ ${salario.toFixed(2)}`); 
