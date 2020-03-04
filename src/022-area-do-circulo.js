// Exercício

// URL: https://www.urionlinejudge.com.br/judge/pt/problems/view/1002

// A fórmula para calcular a área de uma circunferência é: area = π . raio2. 
// Considerando para este problema que π = 3.14159:

// - Efetue o cálculo da área, elevando o valor de raio ao quadrado e multiplicando por π.

// Entrada
// A entrada contém um valor de ponto flutuante (dupla precisão), no caso, a variável raio.

// Saída
// Apresentar a mensagem "A=" seguido pelo valor da variável area, conforme exemplo abaixo, 
// com 4 casas após o ponto decimal. Utilize variáveis de dupla precisão (double). Como todos os problemas, não esqueça de imprimir o fim de linha após o resultado, caso contrário, você receberá "Presentation Error".



// Código

// Por que não usamos Math.pi ao invés de declarar o valor de pi na variável diretamente?
// Porque o próprio exercício te dá o valor de pi, então precisamos considerar o pi dado nesse exercício
const pi = 3.14159;

// Armazenamos o valor do rádio
const r = 2;

// Calculamos a área usando o pi * r^2
// O operador "**" Elena hum número (à esquerda) a um valor (à direita)
// Nesse formato:
// X ** Y é igual a X^Y
const area = pi * (r ** 2);

// Criamos a mensagem e usamos o .toFixed(4) para obrigar que a área tenha 4 casas decimais
const message = `A=${area.toFixed(4)}`;

// Mostramos a mensagem no console
console.log(message);
