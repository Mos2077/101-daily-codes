// EXERCÍCIO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

// URL: https://www.urionlinejudge.com.br/judge/pt/problems/view/1175

// Faça um programa que leia um vetor N[20]. Troque a seguir, o primeiro elemento com o último, o segundo elemento com o penúltimo, etc., até trocar o 10º com o 11º. Mostre o vetor modificado.

// Entrada
// A entrada contém 20 valores inteiros, positivos ou negativos.

// Saída
// Para cada posição do vetor N, escreva "N[i] = Y", onde i é a posição do vetor e Y é o valor armazenado naquela posição.

// CÓDIGO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

let teste = [10, 5, 61, 58, 41];

let arr = [];

for(let i = 0; i < 5; i++){
    arr[i] = teste[i];
}

arr.reverse();

for(let i = 0; i < 5; i++){
    console.log("N[" + i + "] = " + arr[i]);
}

// Saída esperada para o array de testes []:
// 'N[0] = 41'
// 'N[1] = 58'
// 'N[2] = 61'
// 'N[3] = 5'
// 'N[4] = 10'
