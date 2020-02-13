// EXERCÍCIO ======================================================
// Leia um valor de ponto flutuante com duas casas decimais. Este valor representa um valor monetário. A seguir, calcule o menor número de notas e moedas possíveis no qual o valor pode ser decomposto. As notas consideradas são de 100, 50, 20, 10, 5, 2. As moedas possíveis são de 1, 0.50, 0.25, 0.10, 0.05 e 0.01. A seguir mostre a relação de notas necessárias.

// Entrada
// O arquivo de entrada contém um valor de ponto flutuante N (0 ≤ N ≤ 1000000.00).

// Saída
// Imprima a quantidade mínima de notas e moedas necessárias para trocar o valor inicial, conforme exemplo fornecido.

// Obs: Utilize ponto (.) para separar a parte decimal

// CÓDIGO =======================================================

// Escreva qualquer valor aqui
// Este é o valor de entrada do usuário, mas não estamos trabalhando com o DOM, apenas Js, portanto, modifique por aqui mesmo esse valor
let valor = 2;

// Variáveis que armazenam os valores permitidos de notas e moedas, respectivamente
const notas = [100, 50, 20, 10, 5, 2];
const moedas = [1, 0.5, 0.25, 0.1, 0.05, 0.01];

// Array que guardam a quantidade de notas dos trocos, a posição 1 indica as notas 100, e assim por diante. A mesma lógica se aplica ao array das moedas
let trocoNotas = [];
let trocoMoedas = [];

// Função que recebe um valor,
// um array de valores de base (o valor de notas permitido),
// e um outro array que servirá para guardar o troco baseado nas notas permitidas
function calculaTroco(valor, valores, troco) {
  // Este for serve para repetir o mesmo trecho de código e fornecer um índice de base que aumenta a cada repetição
  for (let i = 0; i < valores.length; i++) {
    // Variável que armazena o resto da divisão do valor do usuário pelo valor da nota, o valor da nota é baseado no valor do índice, se o índice for 0, ele buscará pelo índice 0 no array de valores de base que foi recebido como argumento
    const resto = Number((valor % valores[i]).toFixed(2));

    // quantidade de notas, é a varíavel que armazena o que a própria definição diz. Nota: Math.trunc pega somente o valor inteiro do valor da divisão.
    const qtdNotas = Math.trunc(valor / valores[i]);

    // Se o resto for igual ao valor, ou seja, se o resto da divisão for igual ao valor que a variável valor possui, quer dizer estamos tentando trocar uma nota de 80 por uma de 100, por exemplo.
    if (resto === valor) {
      //Portanto, vamos atribuir 0 notas, afinal, se formos trocar 80 reias, não receberemos nenhuma nota de 100, ou seja: 0 notas
      troco.push(0);
    } else {
      // Se não, então quer dizer que a divisão é possível, então vamos adicionar um valor no array de troco, valor este armazenado na variável qtdNotas
      troco.push(qtdNotas);
      // Como agora já adicionamos, vamos dar o valor que sobrou como valor do usuário para que na próxima repetição ele faã toda a lógica com o valor que ainda está sobrando.
      valor = resto;
    }
  }
  // Adicionamos o valor ao retorno da função
  // Note: este código executa apenas 1 vez, pois está fora do escopo do For
  return valor;
}

// Chamamos a função acima passando o valor global do usuário, o array de notas permitidas e o array trocoDeNotas e adicionamos o valor retornado à variável valor do usuário
valor = calculaTroco(valor, notas, trocoNotas);

// Chamamos novamente a função, agora para calcular o troco em moedas, e mudamos as variáveis que colocamos como argumento para se adequar ao contexto das moedas
calculaTroco(valor, moedas, trocoMoedas);

// Aqui percorremos o array das notas e para cada item, imprimimos uma linha no console: "<QuantidadeDeNotas> nota(s) de R$ <ValorDaNotaBaseadoNoArrayNotas>"
console.log("NOTAS:");
trocoNotas.forEach((item, i) => {
  console.log(`${item} nota(s) de R$ ${notas[i].toFixed(2)}`);
});

// Fazemos a mesma coisa só que com o array de moedas
console.log("MOEDAS:");
trocoMoedas.forEach((item, i) => {
  console.log(`${item} moeda(s) de R$ ${moedas[i].toFixed(2)}`);
});
