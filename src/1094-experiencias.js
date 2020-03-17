// EXERCÍCIO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

// URL: https://www.urionlinejudge.com.br/judge/pt/problems/view/1094

// RESUMO: Ler o número de caso de teste, e para cada caso de teste:
// ler uma string (que contém a quantidade e a letra que representa qual animal)
// No final, mostrar um relatório:
// O total de animais, o total e a porcentagem de cada animal

// Maria acabou de iniciar seu curso de graduação na faculdade de medicina e precisa de sua ajuda para organizar os experimentos 
//de um laboratório o qual ela é responsável. Ela quer saber no final do ano, 
// quantas cobaias foram utilizadas no laboratório e o percentual de cada tipo de cobaia utilizada.

// Este laboratório em especial utiliza três tipos de cobaias: sapos, ratos e coelhos. 
// Para obter estas informações, ela sabe exatamente o número de experimentos que foram realizados, 
// o tipo de cobaia utilizada e a quantidade de cobaias utilizadas em cada experimento.

// Entrada
// A primeira linha de entrada contém um valor inteiro N que indica os vários casos de teste que vem a seguir. 
// Cada caso de teste contém um inteiro Quantia (1 ≤ Quantia ≤ 15) que representa a quantidade de cobaias utilizadas e um caractere 
// Tipo ('C', 'R' ou 'S'), indicando o tipo de cobaia (R:Rato S:Sapo C:Coelho).

// Saída
// Apresente o total de cobaias utilizadas, o total de cada tipo de cobaia utilizada 
// e o percentual de cada uma em relação ao total de cobaias utilizadas, 
// sendo que o percentual deve ser apresentado com dois dígitos após o ponto.


// CÓDIGO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

// Ponto de entrada: cada elemento do array é uma string que está dividida em:
// Número: quantidade de uma espécie de animal; Letra, que identifica a especie de um animal:
// C para Coelho
// R para Rato
// S para Sapo
const inputs = ["10 C", "6 R", "15 S", "5 C", "14 R"];

// Variável (Objeto) que vai guardar:
// o simbolo (chaves do objeto: C, R, S), 
// nome (Dentro de cada Enum há o nome do animal) 
// e contador de cada animal (Também dentro de cada Enum há a propriedade count).
// Além destes, esta variável também possui 2 métodos (Mesma coisa que funções)
const animals = {
  C: {
    name: "coelhos",
    count: 0
  },
  R: {
    name: "ratos",
    count: 0
  },
  S: {
    name: "sapos",
    count: 0
  },
  // Esta função/método retorna o total de todos os animais que há no próprio objeto
  // Note que o 'this' é utilizado para nos referirmos ao próprio objeto em si
  // Por isso podemos acessar: this.C (aliás, é o objeto em que estamos)
  getTotal: function() {
    return this.C.count + this.R.count + this.S.count;
  },
  // Esta função/método recebe um parãmetro, que é o símbolo/Enum do animal ('C','R' ou 'S')
  // e retorna a porcentagem da espécie do animal recebida como parâmetro comparado ao objeto todo 
  // (Por exemplo, se esse objeto guarda a contagem de: 5 coelhos, 5 sapos e 0 ratos. então a porcentamge de ratos é 0%, 
  // já a porcentagem dos coelhos é 50%, e a porcentagem dos sapos também é 50%)
  getPercentOf: function(animal) {
    // Para retornar a porcentagem, usamos uma lógica bem simples:
    // 1. Pegamos o total de animais (de todas as espécies)
    // 2. Pegamos o total de animais (da espécie recebida no parámetro)
    // 3. Com isso, podemos fazer uma regra de 3 simples: (Se total é igual a 100%, então X% é igual a N)
    // Onde N é o total da espécie recebida como parâmetro
    //        TOTAL          === 100%
    // TOTAL DE CERTO ANIMAL === X%
    
    // Montamos a equação basica: 
    // TOTAL.X = TOTAL_DE_CERTO_ANIMAL.100
    // X = (TOTAL_DE_CERTO_ANIMAL.100) / TOTAL 
    
    // Essa variável pega o total (count) de certo animal usando o animal (que é uma string) 
    // para pegar a chave, key correspondente deste mesmo objeto
    const targetCount = this[animal].count;
    
    // Pegamos o total usando o método que criamos anteriormente
    const total = this.getTotal();
    
    // E aqui é somente a forma em código da equação criada bem aí em cima (Não mudou muita coisa haueh)
    const percent = (targetCount * 100) / total;
    
    // E retornamos a porcentagem com duas casas decimais
    return percent.toFixed(2);
  }
};


// Agora que já deixamos a estrutura do nosso laboratório pronto para fazer os experimentos, 
// vamos percorrer o array de animais pra preencher este laboratório

// Este for vai percorrer cada elemento do array "inputs"
for (let caseIndex = 0; caseIndex < inputs.length; caseIndex++) {
  // Para cada elemento do array, vamos executar esse código:
  
  // Pegamos o elemento atual do array
  const experiment = inputs[caseIndex];
  
  // Sabendo que esse elemento é uma string, dividimos esta string pegando a quatidade e o símbolo/enum do mesmo  
  const [quantity, animal] = experiment.split(" ");
  
  // Acessamos o objeto animal, na key ANIMAL 
  // e na propriedade count adicionamos ele mesmo + a quantidade especificada no elemento do array
  animals[animal].count += Number(quantity);
}


// Por fim, já está tudo contabilizado, basta exibir nosso relatório:

// Mostramos o total de todos os animais usando o método criado por nós
console.log("Total: " + animals.getTotal() + " cobaias");

// Mostramos o total de cada especie usando a propriedade "Count" de cada objeto
console.log("Total de coelhos: " + animals.C.count);
console.log("Total de ratos: " + animals.R.count);
console.log("Total de sapos: " + animals.S.count);

// Mostramos o percentual de cada animal usando o método/função criada por nós anteriormente
// Note: chamamos essa função 3x, e em cada uma delas passamos como argumento o símbolo, enum de cada animal
console.log("Percentual de coelhos: " + animals.getPercentOf("C") + " %");
console.log("Percentual de ratos: " + animals.getPercentOf("R") + " %");
console.log("Percentual de sapos: " + animals.getPercentOf("S") + " %");



// Saída esperada para a entrada sendo como o array de strings ["10 C", "6 R", "15 S", "5 C", "14 R"]:
// 'Total: 50 cobaias'
// 'Total de coelhos: 15'
// 'Total de ratos: 20'
// 'Total de sapos: 15'
// 'Percentual de coelhos: 30.00 %'
// 'Percentual de ratos: 40.00 %'
// 'Percentual de sapos: 30.00 %'

