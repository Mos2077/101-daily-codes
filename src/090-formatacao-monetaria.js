// EXERCÍCIO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

// URL: https://www.urionlinejudge.com.br/judge/pt/problems/view/1309

// Frequentemente é necessário escrever valores monetários em um formato padrão. 
// Decidimos a formatação de quantidades na seguinte forma:
//    1. O montante deve começar com '$';
//    2. A quantidade deve terminar com um ponto decimal e exatamente dois dígitos seguintes;
//    3. Os dígitos à esquerda do ponto decimal devem ser separador em grupos de três por vírgulas.

// Sua tarefa neste problema é criar um programa que,
// recebendo dois valores inteiros dólares e centavos retorne a String formatada corretamente.

// Entrada
// A entrada é composta por vários casos de teste. Cada caso de teste é composto por dois valores inteiros, 
// dolares (0 ≤ dolares ≤ 2 * 109) e centavos (0 ≤ centavos ≤ 99), respectivamente.

// Saída
// Para cada caso de teste imprima a string formatada de acordo com os regras de formatação.


// CÓDIGO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

// Valor de entrada, é esse número que vamos formatar
let value = "123456".split("");

// Valor de entrada, é esse o valor e centavos que vamos usar
const prefix = "0";

// Revertemos a nossa string do valor em dinheiro
// Pra poder começar a adicionar as vírgulas a partir do final, não do início
const reversed = value.reverse();

// Array que vai guardar o valor da string formatada
const newValue = [];

// For para percorrer cada char do valor que vamos formatar
for (let i = 0; i < reversed.length; i++) {
  // Pegamos o char em questão
  const char = reversed[i];

  // Caso esse char seja multiplo de três, quer dizer que devemos colocar uma vírgula na frente dele
  if (i && i % 3 === 0) {
    newValue.push(",");
  }
  // E de qualquer forma vamos adicionar ele também ao novo valor
  newValue.push(char);
}

// Aqui somente concatenamos a string "$[VALOR_REVERSO_DA_STRING_REVERSA].[VALOR_EM_CENTAVOS]"
console.log(
  "$" +
    newValue.reverse().join("") +
    "." +
    (Number(prefix) <= 9 ? `0${prefix}` : prefix)
);

// Saída esperada para a entrada "123456" como valor da string e em centavos "0":
// '$123,456.00'
