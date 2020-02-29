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

const day1 = 5
const [hour1, min1, seconds1] = []

const day2 = Number(lines.shift().split(" ")[1]);
const [hour2, min2, seconds2] = lines
  .shift()
  .split(":")
  .map(item => Number(item));

const initialDate = new Date(2020, 3, day1, hour1, min1, seconds1);
const finalDate = new Date(2020, 3, day2, hour2, min2, seconds2);

const difMili = finalDate - initialDate;

const difDays = Math.floor(difMili / (1000 * 60 * 60 * 24));
const difHoras = Math.floor((difMili / (1000 * 60 * 60)) % 24);
const difMinutos = Math.floor((difMili / (1000 * 60)) % 60);
const difSeconds = Math.floor((difMili / 1000) % 60);

console.log(`${difDays} dia(s)`);
console.log(`${difHoras} hora(s)`);
console.log(`${difMinutos} minuto(s)`);
console.log(`${difSeconds} segundo(s)`);


