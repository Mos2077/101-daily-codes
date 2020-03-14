// EXERCÍCIO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

// URL: https://www.urionlinejudge.com.br/judge/pt/problems/view/1078

// Leia 1 valor inteiro N (2 < N < 1000). A seguir, mostre a tabuada de N:      
// 1 x N = N      2 x N = 2N        ...       10 x N = 10N

// Entrada
// A entrada contém um valor inteiro N (2 < N < 1000).

// Saída
// Imprima a tabuada de N, conforme o exemplo fornecido.

// CÓDIGO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

// Variável que armazena o número que servirá de base para a tabuada (N)
const num = 5;

// Vamos criar um for que vai repetir 10 vezes
// No início deste for, nós declaramos a variável i com valor inicial 1
// A cada repetição, esse valor aumenta 1
// Vamos repetir esse for até que o i seja no máximo 10 (por isso esse for se repete 10 vezes)
for (let i = 1; i <= 10; i++) {
  // Para cada repetição, nós mostramos a mensagem composta da seguinte forma:
  // VARIAVEL_DINAMICA_QUE_COMEÇA_COM_UM = variável i
  // NUMERO_DECLARADO_NO_INICIO_DO_PROGRAMA = variável num
  // VARIAVEL_DINAMICA_QUE_COMEÇA_COM_UM x NUMERO_DECLARADO_NO_INICIO_DO_PROGRAMA = VARIAVEL_DINAMICA_QUE_COMEÇA_COM_UM * NUMERO_DECLARADO_NO_INICIO_DO_PROGRAMA
  
  // E colocamos essa mensagem para ser exibida no console a cada repetição
  console.log(i + " x " + num + " = " + i * num);
}

// Saída esperada para N (variável num) igual a 5
// '1 x 5 = 5'
// '2 x 5 = 10'
// '3 x 5 = 15'
// '4 x 5 = 20'
// '5 x 5 = 25'
// '6 x 5 = 30'
// '7 x 5 = 35'
// '8 x 5 = 40'
// '9 x 5 = 45'
// '10 x 5 = 50'

