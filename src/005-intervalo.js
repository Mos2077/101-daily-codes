// EXERCÍCIO <><><><><><><><><><><><><><><><><><><><><><><><><><><><>

// URL: https://www.urionlinejudge.com.br/judge/pt/problems/view/1037

// Você deve fazer um programa que leia um valor qualquer e apresente uma mensagem dizendo em qual dos seguintes intervalos ([0,25], (25,50], (50,75], (75,100]) este valor se encontra. Obviamente se o valor não estiver em nenhum destes intervalos, deverá ser impressa a mensagem “Fora de intervalo”.

// O símbolo ( representa "maior que". Por exemplo:
// [0,25]  indica valores entre 0 e 25.0000, inclusive eles.
// (25,50] indica valores maiores que 25 Ex: 25.00001 até o valor 50.0000000

// Entrada
// O arquivo de entrada contém um número com ponto flutuante qualquer.

// Saída
// A saída deve ser uma mensagem conforme exemplo abaixo.
 
// CÓDIGO <><><><><><><><><><><><><><><><><><><><><><><><><><><><>

// Aqui é o ponto de entrada, aceita qualquer valor float
const entrada = 10.2;

// Declaramos uma variavel que vai dizer se a entrada esta fora do intervalo
// Nota: o operador || faz com que a expressão retorne TRUE se pelo menos uma comparação for verdadeira, já o && obriga que todas as comparações sejam verdadeiras para que retorna TRUE
const foraDoIntervalo = entrada < 0 || entrada > 100;

// Se estiver fora do intervalo, imprimimos no console
if (foraDoIntervalo) console.log("Fora de intervalo");

// Caso esteja entre 0 e 25 imprimimos no console
else if (entrada >= 0 && entrada <= 25) console.log("Intervalo [0,25]");

// A mesma coisa porém no intervalo maior que 25 e menor ou igual a 50
else if (entrada > 25 && entrada <= 50) console.log("Intervalo (25,50]");

// O mesmo só que maior que 50 e menor ou igual a 75
else if (entrada > 50 && entrada <= 75) console.log("Intervalo (50,75]");

// Caso não caia em nenhum dos casos anteriores, então o intervalo é maior que 75 e menor ou igual a 100
else console.log("Intervalo (75,100]");


// Saída esperada para quando a entrada tiver o valor de 10.2:
// 'Intervalo [0,25]'
