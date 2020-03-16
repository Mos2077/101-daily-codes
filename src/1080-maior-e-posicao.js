// EXERCÍCIO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

// URL: https://www.urionlinejudge.com.br/judge/pt/problems/view/1080

// Leia 100 valores inteiros. Apresente então o maior valor lido e a posição dentre os 100 valores lidos.

// Entrada
// O arquivo de entrada contém 100 números inteiros, positivos e distintos.

// Saída
// Apresente o maior valor lido e a posição de entrada, conforme exemplo abaixo.


// CÓDIGO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

// Vamos ter apenas 5 números, é o suficiente para exemplificar o exercício sem ter de escrever 100 números em um array
// Caso esteja procurando a resposta, eu escrevo ela neste repositório (basta procurar pelo exercício 1080 na pasta /beginner):
// https://github.com/LaksCastro/uri-online-solutions

// Variável que guarda um array com cinco números diferentes
const numbers = [2, 6, 8, 1, 10];

// Variável que irá guardar o maior número
let maior = 0;

// Variável que irá guardar a posição do maior número
let index = 0;

// Vamos percorrer cada elemento do array número
for(let i = 0; i < numbers.length; i++){
    // Para cada elemento...
    const num = numbers[i];
    
    // Nós verificamos se ele é maior que o maior número atual...
    if(num > maior) {
        // Se for maior, então a variável maior = o num (que é o número atual)
        maior = num;
        
        // E o index recebe a variável i + 1 (pois ele começa do 1, e não do 0)
        index = i + 1;
    }
}

// Aqui em baixo apenas imprimimos os valores da variável maior e sua posição
console.log(maior);
console.log(index);

// Saída esperada para o array de números [2, 6, 8, 1, 10]:
// '10'
// '5'
