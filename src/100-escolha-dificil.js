Em um longo voo, companhias aéreas oferecem uma refeição aos seus passageiros. Geralmente as aeromoças conduzem carrinhos contendo as refeições pelos corredores do avião. Quando o carrinho chega em sua fileira, você é questionado imediatamente: “Frango, bife, ou massa?”. Você sabe suas opções, mas você tem apenas alguns segundos para escolher e você não sabe qual a aparência de sua escolha pois seu vizinho ainda não abriu o embrulho…

A aeromoça deste voo decidiu alterar o procedimento. Primeiro ela vai perguntar a todos os passageiros qual sua escolha de refeição, e depois vai checar se o número de refeições disponíveis neste voo para cada escolha é suficiente.

Por exemplo, considere que o número de refeições de frango, bife e massa disponíveis são respectivamente (80, 20, 40), enquanto o número de passageiros que escolheu frango, bife e massa seja respectivamente (45,23, 48). Neste caso, onze pessoas seguramente ficaram sem suas respectivas escolhas de refeição, já que três passageiros que queriam bife e oito que gostariam de massa não poderão ser atendidos.

Dada a quantidade de refeições disponíveis para cada escolha e o número de refeições pedidas para cada escolha, você poderia por favor ajudar a aeromoça a determinar quantos passageiros seguramente não poderão ser atendidos?
  
  

const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

const available = lines[0].split(" ");

const requested = lines[1].split(" ");

let total = 0;

for (let i = 0; i < 3; i++) {
  const x = available[i];
  const y = requested[i];

  const sub = x - y;

  if (sub < 0) total += sub;
}

console.log(Math.abs(total));
