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

const litros = Number(lines.shift());
const distancia = Number(lines.shift());
const media = litros / distancia;
const message = `${media.toFixed(3)} km/l`;
console.log(message);
