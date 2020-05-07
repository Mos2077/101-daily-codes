// EXERCÍCIO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

// Faça um programa que leia um vetor A[100]. 
// No final, mostre todas as posições do vetor que armazenam um valor menor ou igual a 10 
// e o valor armazenado em cada uma das posições.

// Entrada
// A entrada contém 100 valores, podendo ser inteiros, reais, positivos ou negativos.

// Saída
// Para cada valor do vetor menor ou igual a 10, escreva "A[i] = x",
// onde i é a posição do vetor e x é o valor armazenado na posição, com uma casa após o ponto decimal.


// CÓDIGO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

// Gera um número aleatório entre MAX e MIN
const random = (min, max) => Math.floor(Math.random() * (max - min + 1));

// Cria um Array de tamanho 100 (Array.from({ length: 100 }))
// E então preenche esse Array com 100 número aleatórios entre 0 e 100 (map(() => random(0, 100))
const lines = Array.from({ length: 100 }).map(() => random(0, 100));

// E então percorremos cada posição desse Array de 100 posições (tamanho 100)
for (let i = 0; i < 100; i++) {
  // E pegamos o atual
  const current = Number(lines[i]);
  
  // Caso esse número for maior que 10, então não devemos mostrar ele em tela
  // Portanto, encerramos esse laço aqui e mandamos continuar a repetição sem executar o código abaixo daqui
  if (current > 10) continue;

  // Se chegou aqui, então o número é menor ou igual a 10,
  // Logo, mostramos ele no console + seu index e com uma casa decimal
  console.log(`A[${i}] = ${current.toFixed(1)}`);
}


// Bom, adaptamos a saída desse exercício para que seja aleatória
// Logo, sua saída do programa vai ser diferente dessa:
// 'A[6] = 0.0'
// 'A[17] = 10.0'
// 'A[28] = 3.0'
// 'A[30] = 6.0'
// 'A[31] = 10.0'
// 'A[32] = 8.0'
// 'A[37] = 1.0'
// 'A[50] = 4.0'
// 'A[59] = 7.0'
// 'A[78] = 9.0'
// 'A[89] = 7.0'
// 'A[94] = 3.0'

// Porém ela vai compartilhar a mesma característica: ela vai imprimir somente números menores ou iguais a 10 
// Obs: ou se você for um maníaco matemático programador, procure sobre números pseudoaleatórios, 
// aí talvez, descobrindo a forma com que o computador/engine do javascript 
// gera esses números e qual a expressão matemática por trás, 
// você consiga manipular esses números e reproduzir uma saída igual a esta minha,
// nunca pesquisei sobre, 
// mas gosto da ideia de que é impossível gerar um número verdadeiramente aleatório através de e somente um algoritmo de computador,
// no fundo sempre terá um script com uma fórmula matemática mirabolante, gerando resultados aparentemente aleatórios
