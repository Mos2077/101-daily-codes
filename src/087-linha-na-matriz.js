// Entradas do usuário: [Linha a ser considerada, e operação a ser feita]
const lines = ["3", "S"];

// Criamos uma matriz de 144 posições, 12 por 12, e cada elemento no padrão da sequência (uma PA) [1, 2, 3, 4, 5, 6, 7... até 144]
const arr = Array.from({ length: 144 }).map((_, i) => i + 1);

// Primeiro ponto de entrada: linha a ser considerada da matriz
const line = 3;

const op = "S";

let sum = 0;

// Criamos um for para percorrer cada item da matriz,
// Na direção de leitura:
// Da esquerda para a direita, de cima pra baixo
for (let x = 0; x < 12; x++) {
  for (let y = 0; y < 12; y++) {
    // y é a coluna, e x é a linha

    // Pegamos o elemento da matriz da vez
    const value = arr.shift();

    // E verificamos, se NÃO estamos na linha a ser considerada,
    // Continuamos o for, ou seja, paramos o código aqui
    if (x !== line) continue;

    // Agora, se chegamos aqui, então essa é a linha escolhida, então, vamos adicionar à variável sum
    sum += Number(value);
  }
}

// Se a operação escolhida for a soma, então apenas mostramos a variável sum
if (op === "S") {
  console.log(sum.toFixed(1));
}
// Se a operação escolhida for a média, então mostramos a soma dividido por 12, que é a quantidade de colunas
else {
  console.log((sum / 12).toFixed(1));
}


// Saída esperada para a matriz [1, 2, 3, 4, 5, ..., 144], linha 3 e operação de soma:
// '510.0'
