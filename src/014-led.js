// EXERCÍCIO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

// URL: https://www.urionlinejudge.com.br/judge/pt/problems/view/1168

// João quer montar um painel de leds contendo diversos números. Ele não possui muitos leds, 
// e não tem certeza se conseguirá montar o número desejado. Considerando a configuração dos leds dos números abaixo, 
// faça um algoritmo que ajude João a descobrir a quantidade de leds necessário para montar o valor.

// Entrada
// A entrada contém um inteiro N, (1 ≤ N ≤ 1000) correspondente ao número de casos de teste, seguido de N linhas, 
// cada linha contendo um número (1 ≤ V ≤ 10100) correspondente ao valor que João quer montar com os leds.

// Saída
// Para cada caso de teste, imprima uma linha contendo o número de leds que João precisa para montar o valor desejado, 
// seguido da palavra "leds".

// CÓDIGO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

// Definimos a quantidade de LED's para cada número, começando do zero
const leds = [6, 2, 5, 5, 4, 5, 6, 3, 7, 6];
// Número 0 : precisa de 6 LED's
// Número 1 : precisa de 2 LED's
// etc...

// Aqui lemos a quantidade de casos de teste que o usuário vai usar
const caseTestLength = Number("1");

// For que permite que executemos N casos de testes
for (let i = 0; i < caseTestLength; i++) {
  // Este bloco de código será executado para cada número que o usuário inserir
  
  // Iniciamos a quantidade de LED's com 0
  let ledQuantity = 0;
  
  // Lemos o valor da entrada do usuário, neste exemplo coloquei o número "52"
  const value = "52";
  
  // Dividimos a string da variavel anterior em um array
  // Esse array contém cada caracter do numero, por exemplo:
  // Valor da variavel value: "52"
  // A variavel valueArray fica = ["5", "2"]
  const valueArray = value.split("");

  // For que vai percorrer cada caracter da variavel valueArray
  for (let i = 0; i < valueArray.length; i++) {
    // Pegamos o caracter atual do laço de repetição
    const item = Number(valueArray[i]);
    
    // Pegamos a quantidade de LED's necessárias usando de base o item como indice do array e adicionamos na variavel ledQuantity
    // Nota: += é equivalente a escrever:
    // ledQuantity = ledQuantity + leds[item]
    // Ou seja, estamos adicionando o valor que já tem mais o valor do array leds
    ledQuantity += leds[item];
  }
  
  // Mostramos no console
  console.log(`${ledQuantity} leds`);
  
  // O laço continua ou para se já for o ultimo caso de teste
}
