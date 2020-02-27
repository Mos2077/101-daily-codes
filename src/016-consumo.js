// EXERCÍCIO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

// URL:https://www.urionlinejudge.com.br/judge/pt/problems/view/1014


// Calcule o consumo médio de um automóvel sendo fornecidos a distância total percorrida (em Km) 
// e o total de combustível gasto (em litros).

// Entrada
// O arquivo de entrada contém dois valores: um valor inteiro X representando a distância total percorrida (em Km), 
// e um valor real Y representando o total de combustível gasto, com um dígito após o ponto decimal.

// Saída
// Apresente o valor que representa o consumo médio do automóvel com 3 casas após a vírgula, seguido da mensagem "km/l".


// CÓDIGO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

// Valor de entrada para a quantidade de litros de uma corrida
const litros = 500;

// Valor de entrada para a distancia que foi percorrida nessa corrida
const distancia = 35;

// Calculamos a média dividindo a quantidade de listros pela distância
const media = litros / distancia;

// Geramos a mensagem baseado na média que calculamos anteriormente
// Nota: toFixed(3) para obrigar que a média tenha 3 casa decimais
const message = `${media.toFixed(3)} km/l`;

// Mostramos no console a mensagem gerada anteriormente
console.log(message);
