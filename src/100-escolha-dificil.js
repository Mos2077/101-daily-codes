// EXERCÍCIO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

// URL: https://www.urionlinejudge.com.br/judge/pt/problems/view/2702

// Em um longo voo, companhias aéreas oferecem uma refeição aos seus passageiros.
// Geralmente as aeromoças conduzem carrinhos contendo as refeições pelos corredores do avião. 
// Quando o carrinho chega em sua fileira, você é questionado imediatamente: “Frango, bife, ou massa?”.
// Você sabe suas opções, mas você tem apenas alguns segundos para escolher e você não sabe qual a aparência 
// de sua escolha pois seu vizinho ainda não abriu o embrulho…

// A aeromoça deste voo decidiu alterar o procedimento. 
// Primeiro ela vai perguntar a todos os passageiros qual sua escolha de refeição, 
// e depois vai checar se o número de refeições disponíveis neste voo para cada escolha é suficiente.

// Por exemplo, considere que o número de refeições de frango, bife e massa disponíveis 
// são respectivamente (80, 20, 40), enquanto o número de passageiros que escolheu frango, 
// bife e massa seja respectivamente (45,23, 48). Neste caso, onze pessoas seguramente
// ficaram sem suas respectivas escolhas de refeição, já que três passageiros que queriam bife 
// e oito que gostariam de massa não poderão ser atendidos.

// Dada a quantidade de refeições disponíveis para cada escolha e o número de refeições 
// pedidas para cada escolha, você poderia por favor ajudar a aeromoça a determinar quantos 
// passageiros seguramente não poderão ser atendidos?
  

// CÓDIGO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

// Pontos de entrada, um array com 2 strings,
// Cada string no formato ["QTD_FRANGO QTD_BIFE QTD_MASSA"];
// A primeira string esta neste formato representando a quantidade disponível
// A segunda string está neste formato representando a quantidade exigida pelos passageiros
const lines = ["80 20 40", "45 23 48"];

// Criamos um array com a quantidade de cada comida disponível
// Portanto, neste caso, vai ficar: ["80", "20", "40"];
const available = lines[0].split(" ");

// Criamos outro array com a quantidade de cada comida solicitada pelos passageiros
// Portanto, neste caso, vai ficar: ["45", "23", "48"];
const requested = lines[1].split(" ");

// Variável que armazena a quantidade de pessoas 
// que não puderam ter seu pedido atendido
let total = 0;

// Criamos um for que vai percorrer cada elemento de cada array
for (let i = 0; i < 3; i++) {
  // x é a quantidade disponível de X comida
  const x = available[i];
  
  // y é a quantidade solicitada pelos passageiros de X comida
  const y = requested[i];

  // Calculamos a diferença da quantidade de comida preparada pela quantidade de comida solicitada
  const sub = x - y;

  // Caso essa diferença seja negativa, então temos alguns passageiros que não puderam ser atendidos
  // Logo, adicionamos essa quantidade à variável total
  if (sub < 0) total += sub;
}

// E então mostramos no console o valor absoluto da variável total
console.log(Math.abs(total));


// Saída esperada para o array ["80 20 40", "45 23 48"] como ponto de entrada:
// 11
