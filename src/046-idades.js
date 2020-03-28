// EXERCÍCIO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

// URL: https://www.urionlinejudge.com.br/judge/pt/problems/view/1154

// Faça um algoritmo para ler um número indeterminado de dados, contendo cada um, a idade de um indivíduo. 
// O último dado, que não entrará nos cálculos, contém o valor de idade negativa. 
// Calcular e imprimir a idade média deste grupo de indivíduos.

// Entrada
// A entrada contém um número indeterminado de inteiros. A entrada será encerrada quando um valor negativo for lido.

// Saída
// A saída contém um valor correspondente à média de idade dos indivíduos.

// A média deve ser impressa com dois dígitos após o ponto decimal.


// CÓDIGO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

// Array que simula as entradas do usuário, cada elemento é um valor de uma entrada do usuário
const inputs = [34, 56, 44, 23, -2];

// Variável que irá armazenar a quantidade de quantas idades serão lidas durante o programa, começando com 0
let agesLength = 0;

// Variável que irá armazenar a soma de todas as idades que vão ser lidas durante o programa, começando com 0
let agesSum = 0;

// Variável que servirá de index para percorrer o array de entradas do usuário, para cada repetição, ela aumentará uma unidade
let i = 0;

// Um laço de repetição que irá se repetir para sempre, exceto quando a instrução "break" for chamada
while (true) {
  // Aqui dentro deste laço infinito, infinito, infinito... infinito... infinito... que palavra gostosa de escrever...
  // Infinito... ainda mais com letra maiúscula
  
  // Bom, ahsaush, aqui dentro deste laço infinito, nós "lemos" a entrada do usuário do usuário,
  // entre aspas por que neste exemplo estamos apenas simulando as entradas usando um array de números
  // E armazenamos na variável "age"
  const age = inputs[i];
  
  // Se essa idade for menor que zero, então ela é negativa, logo, chamamos a instrução "break", 
  // para parar este laço infinito não tão infinito
  if (age < 0) break;

  // Se não for menor que zero, então contabilize na estatística das variáveis da soma das idades e na variável da quantidade de idades:
  // Para a soma: acrescente o que já temos mais a idade atual
  agesSum += age;
  
  // Para a quantidade de idades, apenas acrescente uma unidade
  agesLength++;
  
  // E não se esqueça de adicionar uma unidade ao contador, index
  i++;
}

// E então mostramos a divisão entre a soma e a quantidade das idades acumulada nos laços de repetição
console.log((agesSum / agesLength).toFixed(2));

// Saída esperada para os valores [34, 56, 44, 23, -2] como entradas do usuários:
// '39.25'
