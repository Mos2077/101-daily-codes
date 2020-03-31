// EXERCÍCIO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

// URL: https://www.urionlinejudge.com.br/judge/pt/problems/view/1175

// Faça um programa que leia um vetor N[20]. Troque a seguir, o primeiro elemento com o último, 
// o segundo elemento com o penúltimo, etc., até trocar o 10º com o 11º. Mostre o vetor modificado.

// Entrada
// A entrada contém 20 valores inteiros, positivos ou negativos.

// Saída
// Para cada posição do vetor N, escreva "N[i] = Y", onde i é a posição do vetor e Y é o valor armazenado naquela posição.

// CÓDIGO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

// Ao invés de 20, vamos tentar reverter um array de 5 posições apenas
let teste = [10, 5, 61, 58, 41];

// Array que armazenará as entradas do usuário (simuladas pelo array "teste")
let arr = [];

// Fazemos um for para percorrer 5 vezes...
for(let i = 0; i < 5; i++){
    // E a cada repetição, lemos uma entrada do usuário
    arr[i] = teste[i];
}

// Revertemos o array
// Nota: o método reverse() inverte o array original, por isso não é necessário armazenar em nenhuma variável
arr.reverse();

// Então criamos outro for para repetir 5 vezes
for(let i = 0; i < 5; i++){
    // A cada repetição é mostrado no console o array inverso (portanto os valores irão aparecer invertidos no console)
    console.log("N[" + i + "] = " + arr[i]);
}

// Saída esperada para o array de testes []:
// 'N[0] = 41'
// 'N[1] = 58'
// 'N[2] = 61'
// 'N[3] = 5'
// 'N[4] = 10'
