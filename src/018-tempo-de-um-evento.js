// EXERCÍCIO 

// URL: https://www.urionlinejudge.com.br/judge/pt/problems/view/1061

// Pedrinho está organizando um evento em sua Universidade. 
// O evento deverá ser no mês de Abril, iniciando e terminando dentro do mês. 
// O problema é que Pedrinho quer calcular o tempo que o evento vai durar, uma vez que ele sabe quando inicia e quando termina o evento.

// Sabendo que o evento pode durar de poucos segundos a vários dias, você deverá ajudar Pedrinho a calcular a duração deste evento.

// Entrada
// Como entrada, na primeira linha vai haver a descrição “Dia”, 
// seguido de um espaço e o dia do mês no qual o evento vai começar.
// Na linha seguinte, será informado o momento no qual o evento vai iniciar, no formato hh : mm : ss. 
// Na terceira e quarta linha de entrada haverá outra informação no mesmo formato das duas primeiras linhas,
// indicando o término do evento.

// Saída
// Na saída, deve ser apresentada a duração do evento, no seguinte formato:

// W dia(s)
// X hora(s)
// Y minuto(s)
// Z segundo(s)

// Obs: Considere que o evento do caso de teste para o problema tem duração mínima de 1 minuto.


// CÓDIGO

const [day1] = "Dia 7".split(" ")[1];
const [hour1, min1, seconds1] = "08 : 12 : 23"
  .split(":")
  .map(item => item.trim());

const [day2] = "Dia 4".split(" ")[1];
const [hour2, min2, seconds2] = "08 : 13 : 43"
  .split(":")
  .map(item => item.trim());

const useNextMonth = Number(day2) - Number(day1) < 0;
console.log(useNextMonth);
const base = new Date();

const initialDate = new Date(
  base.getFullYear(),
  base.getMonth(),
  day1,
  hour1,
  min1,
  seconds1
);
// useNextMonth ? base.getMonth() : base.getMonth() + 1
const finalDate = new Date(
  base.getFullYear(),
  useNextMonth ? base.getMonth() + 1 : base.getMonth(),
  day2,
  hour2,
  min2,
  seconds2
);

const difMili = finalDate - initialDate;

let difDays = Math.floor((difMili / (1000 * 60 * 60 * 24)) % 7);
let difHoras = Math.floor((difMili / (1000 * 60 * 60)) % 24);
let difMinutos = Math.floor((difMili / (1000 * 60)) % 60);
let difSeconds = Math.floor((difMili / 1000) % 60);

console.log(`${difDays} dia(s)`);
console.log(`${difHoras} hora(s)`);
console.log(`${difMinutos} minuto(s)`);
console.log(`${difSeconds} segundo(s)`);

