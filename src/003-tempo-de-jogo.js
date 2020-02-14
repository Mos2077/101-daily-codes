// EXERCÍCIO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

// URL: https://www.urionlinejudge.com.br/judge/pt/problems/view/1047

// Leia a hora inicial, minuto inicial, 
// hora final e minuto final de um jogo. 
// A seguir calcule a duração do jogo.

// Obs: O jogo tem duração mínima de um (1) minuto e duração máxima de 24 horas.

// Entrada
// Quatro números inteiros representando a hora de início e fim do jogo.

// Saída
// Mostre a seguinte mensagem: “O JOGO DUROU XXX HORA(S) E YYY MINUTO(S)” .


// CÓDIGO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

// Esta é a entrada do usuário, e o significado está descrito enredo do exercício
// mas basicamente:
// Primeiro número: hora inicial
// Segundo número: minuto inicial
// Terceiro número: hora final
// Quarto número: minuto final
const entrada = "12 0 12 0";

// Aqui transformamos a string em um array de números
// O método split() divide a string em um array de strings,
// O critério de separação da string é o que passamos como argumento
// No caso, enviamos uma string com um espaço vazio
// E o método map() percorre este array, manipula item por item e retorna um novo array
// No caso, percorremos o array retornado pelo método split, e manipulamos as strings transformando elas em números e retornamos esse array de números
const valores = entrada.split(" ").map(valor => Number(valor));

// Como sabemos a ordem dos valores da data inicial e final do jogo, então utilizamos a desestruturação de array
const [hInicial, minInicial, hFinal, minFinal] = valores;

// Uma variavel que recebe true ou false
// Ela recebe true, caso o jogo comece em um dia e termine no outro
// E recebe false, caso o jogo comece e termine no mesmo dia
const useODiaSeguinte = hInicial > hFinal || minInicial > minFinal;

const base = new Date();

const dataInicial = new Date(
  base.getFullYear(),
  base.getMonth(),
  base.getDate(),
  hInicial,
  minInicial
);

const dataFinal = new Date(
  base.getFullYear(),
  base.getMonth(),
  useODiaSeguinte ? base.getDate() + 1 : base.getDate(),
  hFinal,
  minFinal
);

const difMili = dataFinal - dataInicial;
let difHoras = Math.floor((difMili % 86400000) / 3600000);
let difMinutos = Math.round(((difMili % 86400000) % 3600000) / 60000);

if (!difHoras && !difMinutos) difHoras = 24;

console.log(`O JOGO DUROU ${difHoras} HORA(S) E ${difMinutos} MINUTO(S)`);
