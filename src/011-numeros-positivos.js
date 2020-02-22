// EXERÍCIO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

// URL: https://www.urionlinejudge.com.br/judge/pt/problems/view/1060

// Faça um programa que leia 6 valores. 
// Estes valores serão somente negativos ou positivos (desconsidere os valores nulos). 
// A seguir, mostre a quantidade de valores positivos digitados.

// Entrada
// Seis valores, negativos e/ou positivos.

// Saída
// Imprima uma mensagem dizendo quantos valores positivos foram lidos.

// CÓDIGO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

// Entrada de dados, coloque aqui os seis números que seriam os 6 números da entrada do usuário
const devEntradas = [2, -9, 3, 5, -7, 6];

// Somente nessa linha de entrada abaixo é feita diversas coisas:
// 1. Primeiro, criamos um falso array de tamanho 6 usando Array.from()
// 2. Em seguida, percorremos esse Array e para cada repetição retornamos a entrada da variavel devEntradas caso ela seja positiva, se não for positiva, não retornamos nada, deixe como está.
// Nota: quando digo retornar, me refiro a adicionar o elemento em si na variavel "entradas", para entender melhor é bom saber como o filter() funciona, leia sobre esse carinha em
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/filtro
// Nota: Por que criamos um array falso de tamanho 6? Por que é o mesmo tamanho da variavel "devEntradas", também funciona colocando "devEntradas.length" ao invés de 6 diretamente
const entradas = Array.from({ length: 6 }).filter((_, i) => devEntradas[i] > 0);

// Por fim, mostre no console quantos valores passaram no teste acima,
// pois array.length mostra um número inteiro representando a quantidade de valores que tem dentro de um array, exemplo:
// ["github", ".", "com", ".", "br"]
// console.log(arrayAcima.length) vai mostrar 5
console.log(`${entradas.length} valores positivos`);
