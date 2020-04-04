// EXERCÍCIO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

// URL: https://www.urionlinejudge.com.br/judge/pt/problems/view/1155

// Escreva um algoritmo para calcular e escrever o valor de S, sendo S dado pela fórmula:
// S = 1 + 1/2 + 1/3 + … + 1/100

// Entrada
// Não há nenhuma entrada neste problema.

// Saída
// A saída contém um valor correspondente ao valor de S.
// O valor deve ser impresso com dois dígitos após o ponto decimal.


// CÓDIGO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

// Valor que vai armazenar a soma de todas as frações
let s = 1;

// Vamos criar um "for" que vai criar fraç]ao por fração, 
// começando pelo 2 por que as frações começam pelo 1/2
for (let divisor = 2; divisor <= 100; divisor++) {
  // Variável que armazena a fração atual
  const currentDiv = 1 / divisor;
  
  // Somamos o valor da fração atual à variável "s"
  s += currentDiv;
}

// Quando o for acabar, a variável "s" terá o valor da soma de todas as frações
// Então basta imprimir no console com duas casas decimais
console.log(s.toFixed(2));


// Saída esperada para este exercício
// '5.19'
