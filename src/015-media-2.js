// EXERCÍCIO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

// URL:

// Leia 3 valores, no caso, variáveis A, B e C, que são as três notas de um aluno. 
// A seguir, calcule a média do aluno, sabendo que a nota A tem peso 2, a nota B tem peso 3 e a nota C tem peso 5. 
// Considere que cada nota pode ir de 0 até 10.0, sempre com uma casa decimal.

// Entrada
// O arquivo de entrada contém 3 valores com uma casa decimal, de dupla precisão (double).

// Saída
// Imprima a variável MEDIA conforme exemplo abaixo, 
// com 1 dígito após o ponto decimal e com um espaço em branco antes e depois da igualdade. 
// Assim como todos os problemas, não esqueça de imprimir o fim de linha após o resultado, caso contrário, 
// você receberá "Presentation Error".


// CÓDIGO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

// Aqui é o ponto de entrada para a nota A, B e C do aluno
// Cada nota com pesos 2, 3, 5, respectivamente
const a = 10.0,
  b = 4.8,
  c = 8.5;

// Primeiro vamos multiplicar cada nota por seu peso
const pesoA = a * 2,
  pesoB = b * 3,
  pesoC = c * 5;

// Em seguida vamos somar todas os resultados anteriores
// E também somar os pesos e guardar na variavel divisor
const dividendo = pesoA + pesoB + pesoC,
  divisor = 2 + 3 + 5;

// Calculamos a media
const media = dividendo / divisor;

// Criamos uma mensagem
const message = "MEDIA = " + media.toFixed(1);

// Mostramos a mensagem no console
console.log(message);
