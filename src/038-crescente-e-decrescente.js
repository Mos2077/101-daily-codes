// EXERCÍCIO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

// URL: https://www.urionlinejudge.com.br/judge/pt/problems/view/1113

// Leia uma quantidade indeterminada de duplas de valores inteiros X e Y. Escreva para cada X e Y uma mensagem que indique se estes valores foram digitados em ordem crescente ou decrescente.

// Entrada
// A entrada contém vários casos de teste. Cada caso contém dois valores inteiros X e Y. A leitura deve ser encerrada ao ser fornecido valores iguais para X e Y.

// Saída
// Para cada caso de teste imprima “Crescente”, caso os valores tenham sido digitados na ordem crescente, caso contrário imprima a mensagem “Decrescente”.


// CÓDIGO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

// Aqui declaramos a sequência de dois números que vamos trabalhar
const numeros = "2, 3";

// Transformamos a variável "numeros", que é uma string, em um array, com dois elementos (que são os números da sequência)
// Então desestruturamos esse array pegamos o numero a, e o número b
const [a, b] = numeros.split(" ").map(item => Number(item));

// Caso a seja igual ao b, imprimimos no console...
if (a === b) {
  // ... "Iguais"
  console.log("Iguais");
} else if (a > b) {
  // Se a for maior que b, quer dizer que a sequência está neste formato: (10 (a é maior), 5 (b é menor))
  // Então imprimimos no console "Descrescente"
  console.log("Decrescente");
} else {
  // Se não for nenhum dos casos anteriores, então quer dizer que o número b é maior que o número a
  // Logo, isto forma uma sequência crescente, então imprimimos no console:
  console.log("Crescente");
}

// Saída esperada para a sequência (em string) "2, 3":
// 'Crescente'

