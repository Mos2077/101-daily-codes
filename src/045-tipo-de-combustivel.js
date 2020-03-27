// EXERCÍCIO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

// URL: https://www.urionlinejudge.com.br/judge/pt/problems/view/1134

// Um Posto de combustíveis deseja determinar qual de seus produtos tem a preferência de seus clientes. 
// Escreva um algoritmo para ler o tipo de combustível abastecido (codificado da seguinte forma: 1.Álcool 2.Gasolina 3.Diesel 4.Fim).
// Caso o usuário informe um código inválido (fora da faixa de 1 a 4) deve ser solicitado um novo código (até que seja válido). 
// O programa será encerrado quando o código informado for o número 4.

// Entrada
// A entrada contém apenas valores inteiros e positivos.

// Saída
// Deve ser escrito a mensagem: "MUITO OBRIGADO" e a quantidade de clientes que abasteceram cada tipo de combustível, conforme exemplo.


// CÓDIGO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

let getout = false;

let alcohol = 0;
let gasoline = 0;
let diesel = 0;

while (!getout) {
  const code = Number(lines.shift());
  switch (code) {
    case 1:
      alcohol++;
      break;
    case 2:
      gasoline++;
      break;
    case 3:
      diesel++;
      break;
    case 4:
      getout = true;
      break;
  }
}
console.log("MUITO OBRIGADO");
console.log("Alcool: " + alcohol);
console.log("Gasolina: " + gasoline);
console.log("Diesel: " + diesel);
