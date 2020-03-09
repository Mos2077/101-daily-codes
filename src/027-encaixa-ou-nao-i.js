// EXERCÍCIO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

// URL: https://www.urionlinejudge.com.br/judge/pt/problems/view/1240

// Paulinho tem em suas mãos um pequeno problema. 
// A professora lhe pediu que ele construísse um programa para verificar, 
// à partir de dois valores inteiros A e B, se B corresponde aos últimos dígitos de A.

// Entrada
// A entrada consiste de vários casos de teste. 
// A primeira linha de entrada contém um inteiro N que indica a quantidade de casos de teste. 
// Cada caso de teste consiste de dois inteiros A (1 ≤ A < 231 ) e B (1 ≤ B < 231) positivos.

// Saída
// Para cada caso de entrada imprima uma mensagem indicando se o segundo valor encaixa no primeiro valor, confome exemplo abaixo.


// CÓDIGO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

// Desestruturamos o array e colocamos o primeiro elemento na variável a, 
// o segundo elemento na variável b
const [a, b] = ["5678690", "78690"];

// Se o segundo elemento já é maior que o primeiro elemento,
// Então é impossível encaixar o segundo elemento no primeiro...
if (b.length > a.length) {
  // ...então mostramos no console: "nao encaixa"
  console.log("nao encaixa");
} else {
  // Se caímos aqui, então o segundo elemento é menor ou igual ao primeiro elemento
  // É a primeira condição a se validar, agora vamos para a próxima:
  
  // Nós pegamos a substring do final da string a equivalente ao tamanho da string b
  // "123456" - A
  // "56" - B
  // "56" - Variável Substring
  // Outro exemplo:
  // "98765" - A
  // "234" - B
  // "765" - Variável Substring
  const substring = a.substring(a.length - b.length);
  
  // Caso essa substring seja igual ao valor b, então ela encaixa na string a
  if (substring === b) {
    console.log("encaixa");
  } else {
    // Se não é igual, então não encaixa
    console.log("nao encaixa");
  }
}
