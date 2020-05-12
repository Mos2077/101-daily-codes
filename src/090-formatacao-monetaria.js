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

const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

while (true) {
  let value = lines.shift();

  if (!value) break;

  value = value.split("");

  const prefix = lines.shift();

  const reversed = value.reverse();

  const newValue = [];

  for (let i = 0; i < reversed.length; i++) {
    const char = reversed[i];

    if (i && i % 3 === 0) {
      newValue.push(",");
    }
    newValue.push(char);
  }

  console.log(
    "$" +
      newValue.reverse().join("") +
      "." +
      (Number(prefix) <= 9 ? `0${prefix}` : prefix)
  );
}
