// EXERCÍCIO <><><><><><><><><><><><><><><><><><><><><><><><><><><><>

// URL: https://www.urionlinejudge.com.br/judge/pt/problems/view/1001

// Leia 2 valores inteiros e armazene-os nas variáveis A e B. 
// Efetue a soma de A e B atribuindo o seu resultado na variável X. Imprima X conforme exemplo apresentado abaixo. 
// Não apresente mensagem alguma além daquilo que está sendo especificado e não esqueça de imprimir o fim de linha após o resultado, 
// caso contrário, você receberá "Presentation Error".

// Entrada
// A entrada contém 2 valores inteiros.

// Saída
// Imprima a mensagem "X = " (letra X maiúscula) seguido pelo valor da variável X e pelo final de linha. 
// Cuide para que tenha um espaço antes e depois do sinal de igualdade, conforme o exemplo abaixo.

// CÓDIGO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

// Ponto de entrada para os valores A e B, substitua por qualquer número sedesejar
const A = Number("10");
const B = Number("9");

// X recebe a soma de A com B
// Lembre-se de forçar que A e B sejam números com o método de conversão de tipos Number(), 
// senão, X irá apresentar algo como: 23 ao tentarmos somar 2 + 3
const X = A + B;

// Em seguida, mostramos no console
console.log(`X = ${X}`);
