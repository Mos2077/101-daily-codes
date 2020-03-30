// EXERCÍCIO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

// URL: https://www.urionlinejudge.com.br/judge/pt/problems/view/1118

// Escreva um programa para ler as notas da primeira e a segunda avaliação de um aluno. Calcule e imprima a média semestral.
// O programa só deverá aceitar notas válidas (uma nota válida deve pertencer ao intervalo [0,10]). 
// Cada nota deve ser validada separadamente.

// No final deve ser impressa a mensagem “novo calculo (1-sim 2-nao)”, 
// solicitando ao usuário que informe um código (1 ou 2) indicando se ele deseja ou não executar o algoritmo novamente, 
// (aceitar apenas os código 1 ou 2). Se for informado o código 1 deve ser repetida a execução de todo o programa para permitir 
// um novo cálculo, caso contrário o programa deve ser encerrado.

// Entrada
// O arquivo de entrada contém vários valores reais, positivos ou negativos. 
// Quando forem lidas duas notas válidas, deve ser lido um valor inteiro X . 
// O programa deve parar quando o valor lido para este X for igual a 2.

// Saída
// Se uma nota inválida for lida, deve ser impressa a mensagem “nota invalida”. 
// Quando duas notas válidas forem lidas, deve ser impressa a mensagem “media = ” seguido do valor do cálculo.

// Antes da leitura de X deve ser impressa a mensagem "novo calculo (1-sim 2-nao)" 
// e esta mensagem deve ser apresentada novamente se o valor da entrada padrão para X for menor do que 1 ou maior do que 2, 
// conforme o exemplo abaixo.

// A média deve ser impressa com dois dígitos após o ponto decimal.


// CÓDIGO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

// Parte do código que servirá de testes (simulação da entrada do usuário) [][][][][][][][]

// Array que contém as entradas do usuário
const teste = ["-3.5", "3.5", "11.0", "10.0", "4", "1", "8.0", "9.0", "2"];

// Index de teste também que percorrerá o array que simula as entradas do usuário
let b = 0;

// Aqui declaramos um objeto (lines) com uma propriedade: shift, que é uma função que retorna uma das entradas do usuário,
// E na próxima vez que ela for chamada, ela devolverá o próximo valor de entrada
const lines = {
  shift: () => {
    const a = teste[b];
    b++;
    return a;
  }
};

// Termina o código de teste [][][][][][][][]

// Função em forma de Arrow Function que recebe uma nota e retorna true se essa nova for válida e false caso ela não seja válida
// Quando uma nota é válida? Quando ela está entre o intervalo [0, 10] com os dois inclusos
const isValid = value => value <= 10 && value >= 0;

// Variável que armazena se o usuário quer sair ou não do programa
let getout = false;

// Variáveis que armazenam a nota A e B, respectivamente
let numA = null;
let numB = null;

// Aqui iniciamos o laço de repetição do valor das entradas do usuário (no caso, elas estão sendo simuladas pelo código de teste)
while (!getout) {
  // Lemos a entrada, (uma nota, seja A ou B, veremos isso depois)
  const num = Number(lines.shift());
  
  // Primeiro verificamos se a nota é válida ou não, usando a função criada anteriormente,
  // E então, verificamos se a nota não é válida, usando o operador de negação "!"
  if (!isValid(num)) {
    // Caso não seja válida, imprimimos no console "nota invalida"
    console.log("nota invalida");
    
    // E pedimos para o "while" continuar a repetição
    // Nota: esse "continue" faz com que o "while" pule todo o código daqui pra baixo, 
    // ou seja, voltamos para o início do código dentro do while
    // Ficamos nesse loop até que haja pelo menos uma nota válida
    continue;
  }
  
  // Caso a nota A ainda não esteja definida, então quer dizer que nem definimos a nota A, portanto...
  if (numA === null) {
    // Declaramos ela aqui, dando o valor da nota atual
    numA = num;
    
    // E pedimos para o while continuar o laço ignorando o código abaixo deste
    continue;
  }
  
  // Bom, se chegamos aqui, é por que já temos a nota A, então vamos declarar a nota B
  numB = num;
  
  // Em seguida, como já temos as duas notas, calculamos a média
  const average = (numA + numB) / 2;
 
  // E aqui mostramos a média no console com duas casas decimais
  console.log("media = " + average.toFixed(2));
  
  // E aqui zeramos novamente a nota A e B, afinal, terminamos a operação de calcular a média das notas
  numA = null;
  numB = null;
  
  // Variável que vai armazenar a resposta do usuário para a pergunta "Você quer fazer mais um cálculo? (1-sim 2-nao)"
  // Portanto, qualquer valor fora de 1 ou 2, é inválido
  let response = null;
  
  // Vamos iniciar um laço de repetição que ocorre no mínimo uma vez, o "do while {}"
  do {
    
    // Perguntamos se o usuário quer continuar fazendo cálculos
    console.log("novo calculo (1-sim 2-nao)");
    
    // Lemos a resposta dele
    response = lines.shift();
    
    // Fazemos um switch na resposta
    switch (response) {
      // Caso a resposta seja 1, então ele quer fazer um novo cálculo, logo declaramos a nossa variável getout como false
      case "1":
        getout = false;
        break;
      // Caso a resposta seja 2, então ele quer quer sair do programa, logo declaramos a nossa variável getout como true
      case "2":
        getout = true;
        break;
      // Caso ele tenha respondido qualquer coisa fora de 1 e 2, então o laço vai continuar perguntando ao usuário
      
    }
    // Pois aqui colocamos a seguinte verificação: 
    // continue executando esse laço de repetição enquanto a resposta for diferente de 1 e 2
  } while (response !== "1" && response !== "2");
}

// Saída esperada para a entrada simulada igual ao array ["-3.5", "3.5", "11.0", "10.0", "4", "1", "8.0", "9.0", "2"]:
// 'nota invalida'
// 'nota invalida'
// 'media = 6.75'
// 'novo calculo (1-sim 2-nao)'
// 'novo calculo (1-sim 2-nao)'
// 'media = 8.50'
// 'novo calculo (1-sim 2-nao)'
// true
