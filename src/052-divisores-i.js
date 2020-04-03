// EXERCÍCIO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

// URL: https://www.urionlinejudge.com.br/judge/pt/problems/view/1157

// Ler um número inteiro N e calcular todos os seus divisores.

// Entrada
// O arquivo de entrada contém um valor inteiro.

// Saída
// Escreva todos os divisores positivos de N, um valor por linha.


// CÓDIGO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

// Começamos com o ponto de entrada, o valor que vamos analisar
const num = 4;

// Vamos criar um for que vai criar o seguinte cenário:
// Vai criar um variável chamada "cont", que vai começar com 1
// Vamos continuar repetindo o laço enquanto essa variável "cont" for menor ou igual o "num" (Variável de entrada)
// A cada repetição, vamos incrementar 1 á variável "cont"
for (let cont = 1; cont <= num; cont++) {
  // Dentro de cada laço, vamos verificar o seguinte:
  // Vamos dividir o número de entrada pelo "cont", 
  // caso o resto dessa divisão seja zero, 
  // então a entrada é divisível pelo valor atual do "cont", logo imprima no console
  // Mas por que? Imagine essa continha: 6 / 3 = 2, 
  // o resto da divisão é o que sobrou, e neste caso sobrou 0,
  // e sabemos que 6 é divisível por 3
  if (num % cont === 0) console.log(cont);
}

// Saída esperada para a entrada como o número 4:
// 1
// 2
// 4
