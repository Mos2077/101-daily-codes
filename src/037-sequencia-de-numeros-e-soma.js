// EXERCÍCIO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

// URL: https://www.urionlinejudge.com.br/judge/pt/problems/view/1101

// Leia um conjunto não determinado de pares de valores M e N (parar quando algum dos valores for menor ou igual a zero). Para cada par lido, mostre a sequência do menor até o maior e a soma dos inteiros consecutivos entre eles (incluindo o N e M).

// Entrada
// O arquivo de entrada contém um número não determinado de valores M e N. A última linha de entrada vai conter um número nulo ou negativo.

// Saída
// Para cada dupla de valores, imprima a sequência do menor até o maior e a soma deles, conforme exemplo abaixo


// CÓDIGO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

// Var que armazena o menor valor, o valor de onde iniciaremos a contagem e a soma
let min = 20;

// Var que armazena o último valor da contagem, é o ultimo valor que adicionaremos à soma
let max = 25;

// Variável que vai armazenar a soma de todos os numeros inteiros (naturais) que estão entre min a max, incluindo eles
let sum = 0;

// Essa é simplesmente a variável que vai armazenar uma string com todos os numeros em fileira separados por um espaço
let string = "";

// Vamos repetir esse laço até que a variável min seja igual a variavel max, e a cada repetição, adicionaremos 1 à min, afinal, queremos apenas os numeros inteiros
for (; min <= max; min++) {
  // Em cada repetição, somamos min à variavel sum, para que no final, a variavel sum esteja com a soma de todas as repetições
  sum += min;
  
  // Aqui, é feita basicamente a seguinte pergunta:
  // A vaiavel string está vazia? Se estiver, quer dizer que estamos na primeira repetição, então adicione á string somente o número, mais nada. Porém se a variável string não estiver vazia, então quer dizer que já há números nela, nesse caso, adicione mais um valor (a variavel min também), porém com um espaço na frente para separar do numero anterior
  string += !string.length ? min : " " + min;
}

// Mostramos no console a string da fileira de numeros e juntamos ao valor da soma
console.log(string + " Sum=" + sum);

