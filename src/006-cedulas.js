// EXERCÍCIO <><><><><><><><><><><><><><><><><><><><><><><><><><><>

// URL: https://www.urionlinejudge.com.br/judge/pt/problems/view/1018

// Leia um valor inteiro. A seguir, calcule o menor número de notas possíveis (cédulas) no qual o valor pode ser decomposto. As notas consideradas são de 100, 50, 20, 10, 5, 2 e 1. A seguir mostre o valor lido e a relação de notas necessárias.

// Entrada
// O arquivo de entrada contém um valor inteiro N (0 < N < 1000000).

// Saída
// Imprima o valor lido e, em seguida, a quantidade mínima de notas de cada tipo necessárias, conforme o exemplo fornecido. Não esqueça de imprimir o fim de linha após cada linha, caso contrário seu programa apresentará a mensagem: “Presentation Error”.

// CÓDIGO <><><><><><><><><><><><><><><><><><><><><><><><><><><>

// Entrada do usuário, preencha esta var com qualquer valor inteiro
let entrada = 503;

// Cédulas que vamos usar de troco
const notas = [100, 50, 20, 10, 5, 2, 1];

// Imprimimos no console o valor da entrada
console.log(entrada);

// Percorremos o seguinte bloco de código para cada posição do array notas
// E a variavel nota contém o indice que está sendo percorrido no momento
for (const nota of notas) {
  // Calculamos a quantidade de notas para o valor da entrada atual:
  // Pegamos apenas o valor inteiro da divisão com Math.trunc()
  const saida = Math.trunc(entrada / nota);
  
  // A entrada recebe o resto da divisão dela mesma pela nota do laço corrente
  entrada = entrada % nota;
  
  // Imprimimos no console a saida e a nota atual
  // Saida: quantidade de notas que calculamos acima
  // Nota atual: Estamos em um laço, por isso a nota varia desde o início ao fim do array notas
  console.log(`${saida} nota(s) de R$ ${nota},00`);
}
