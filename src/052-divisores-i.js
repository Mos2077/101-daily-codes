// Ler um número inteiro N e calcular todos os seus divisores.

// Entrada
// O arquivo de entrada contém um valor inteiro.

// Saída
// Escreva todos os divisores positivos de N, um valor por linha.

const num = 4;

for (let cont = 1; cont <= num; cont++) {
  if (num % cont === 0) console.log(cont);
}

// Saída esperada para a entrada como o número 4:
// 1
// 2
// 4
