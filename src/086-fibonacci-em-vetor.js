// EXERCÍCIO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

// URL: https://www.urionlinejudge.com.br/judge/pt/problems/view/1176

// Faça um programa que leia um valor e apresente o número de Fibonacci correspondente a este valor lido. 
// Lembre que os 2 primeiros elementos da série de Fibonacci são 0 e 1 e cada próximo termo é a soma dos 2 anteriores a ele.
// Todos os valores de Fibonacci calculados neste problema devem caber em um inteiro de 64 bits sem sinal.

// Entrada
// A primeira linha da entrada contém um inteiro T, indicando o número de casos de teste. 
// Cada caso de teste contém um único inteiro N (0 ≤ N ≤ 60), correspondente ao N-esimo termo da série de Fibonacci.

// Saída
// Para cada caso de teste da entrada, imprima a mensagem "Fib(N) = X", onde X é o N-ésimo termo da série de Fibonacci.


// CÓDIGO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

// Função que retorna um array com a sequência inteira até o index N
const fib = n => {
  // Caso N seja zero, então o valor da sequência acaba no zero
  if (n === 0) return [0];

  // Se o index for 1, então a sequência acaba no 1
  if (n === 1) return [0, 1];

  // Agora se não for nem 0 nem 1, chame essa mesma função, passando N - 1
  const s = fib(n - 1);
  
  // E então adicione mais um termo que é a soma 2 últimos termos
  s.push(s[s.length - 1] + s[s.length - 2]);
  
  // E retorna essa subsequência
  // Isso vai dar um aspecto de loop em que o último valor retornado será todos os valoers anteriores
  return s;
};

// Agora na aplicação da função, temos:

// Queremos pegar o index 4
const n = 4;

// Pegamos a sequência inteira passando N
const sequence = fib(n);

// Pegamos o valor final, o último valor da sequência
const lastValue = sequence[sequence.length - 1];

// E mostramos no console "Fib(N) = X"
console.log(`Fib(${n}) = ${lastValue}`);


// Saída esperada para o index 4 da sequência de Fibonacci
// 'Fib(4) = 3'
