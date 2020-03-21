// EXERCÍCIO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

// URL: https://www.urionlinejudge.com.br/judge/pt/problems/view/1116

// Escreva um algoritmo que leia 2 números e imprima o resultado da divisão do primeiro pelo segundo. Caso não for possível mostre a mensagem “divisao impossivel” para os valores em questão.

// Entrada
// A entrada contém um número inteiro N. Este N será a quantidade de pares de valores inteiros (X e Y) que serão lidos em seguida.

// Saída
// Para cada caso mostre o resultado da divisão com um dígito após o ponto decimal, ou “divisao impossivel” caso não seja possível efetuar o cálculo.

// Obs.: Cuide que a divisão entre dois inteiros em algumas linguagens como o C e C++ gera outro inteiro. Utilize cast :)


// CÓDIGO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

// Este é a string com os valores de entrada:
// Vamos dividir o primeiro número pelo segundo
const string = "10 6";

// Primeiro é necessário dividir essa string em dois números, para isso, vou utilizar o método "split" e "map"
// 1. O método "split" divide uma string, e transforma ela em um array, e é o que faremos, usando como base para a divisão da string um espaço vazio " "
// 2. Com o array retornado pelo método split, nós usamos o map() para percorrer os 2 valores desse array (que foi criado pelo split), mas para que percorrer? Para torná-los um número, usando o método Number()
// Logo, ao final dos métodos, nós desestruturamos o array criado que contém os 2 números, pegando o valor "a" e "b"
const [a, b] = string.split(" ").map(item => Number(item));

// Caso "b", ou seja, o segundo valor, seja igual a zero, então a divisão não pode ocorrer, pois é impossível efetuar uma divisão por zero
if (b === 0) console.log("divisao impossivel");

// Caso "b" não seja igual a zero, então basta dividir a por b e usar o .toFixed() para obrigar que a divisão tenha pelos menos uma casa decimal
// Nota: a quantidade de casas decimais é definida pelo valor que passamos como parâmetro para o toFixed();
else console.log((a / b).toFixed(1));


// Saída esperada para a entrada como os números (em string) "10 6":
// '1.7'
