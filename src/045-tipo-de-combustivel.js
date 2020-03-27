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

// Entradas, cada elemento do array simula uma entrada do usuário, e o i representa o index da entrada que estamos lendo,
// começando por 0
const inputs = [1, 1, 2, 2, 3, 3, 9, 4];
let i = 0;

// Variável que vai armazenar o valor booleano que representa se precisamos parar de ler entradas ou não
// No início, nós não vamos parar de ler a entrada, afinal, nem começamos a ler
let getout = false;

// Variáveis que vão armazenar a quantidade de ac
let alcohol = 0;
let gasoline = 0;
let diesel = 0;

// Um laço que vai se repetir pra sempre enquanto a variável "getout" for falsa:
// Como assim, não era o contrário? O operador "!" inverte valor booleano, portanto, while na verdade está lendo "não false", 
// ou seja, "true"
while (!getout) {
  // Aqui pegamos o código da entrada atual do usuário
  const code = inputs[i];
  
  // Utilizamos o switch para verificar o valor deste código...
  switch (code) {
    // Case o valor seja 1...
    case 1:
      // ... adicione 1 à contagem do alchool
      alcohol++;
      break;
    // Case o valor seja 2...
    case 2:
      // ... adicione 1 à contagem da gasolina
      gasoline++;
      break;
    // Case o valor seja 3...
    case 3:
      // ... adicione 1 à contagem do diesel
      diesel++;
      break;
    // Case o valor seja 4...
    case 4:
      // ... torne a variável "getout", assim, na próxima repetição do while, dará falso, e o laço de repetição acabará
      getout = true;
      break;
  }
  // A cada laço, incrementamos 1 ao i para irmos para a próxima entrada do usuário, e não ficarmos apenas na mesma
  i++;
}

// Em seguida imprimimos a mensagem e o valor de cada produto do posto de gasolina usando as variáveis que acrescentamos anteriormente
console.log("MUITO OBRIGADO");
console.log("Alcool: " + alcohol);
console.log("Gasolina: " + gasoline);
console.log("Diesel: " + diesel);


// Saída esperada para o array de números [1, 1, 2, 2, 3, 3, 9, 4] como entradas do usuário:
// 'MUITO OBRIGADO'
// 'Alcool: 2'
// 'Gasolina: 2'
// 'Diesel: 2'
