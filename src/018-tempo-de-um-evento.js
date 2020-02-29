// EXERCÍCIO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

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


// CÓDIGO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

// Primeiro começamos lendo o dia do início do evento
// Neste exemplo, a data de início é o dia 5
// Nota: no enunciado da questão, ele deixa claro para considerarmos apenas o mês de fevereiro
const day1 = 5;

// Aqui pegamos as horas, minutos e segundos do início do evento
const [hour1, min1, seconds1] = [8, 22, 40];

// Portanto, a data de início, é dia 5 às 8:22:40h

// Faremos a mesma coisa para a data de encerramento
const day2 = 9;
const [hour2, min2, seconds2] = [8, 23, 40];

// Portanto, a data de encerramento é dia 9 às 8:23:40h

// Criamos uma instância de uma data usando os valores da data de início do evento
// Vamos chamar essa instância de initialDate, ou seja, a data inicial do evento
const initialDate = new Date(2020, 3, day1, hour1, min1, seconds1);

// Criamos outra instância de uma data, só que para a data de encerramento
const finalDate = new Date(2020, 3, day2, hour2, min2, seconds2);

// Aqui substraímos a data final pela data inicial para obtermos os milisegundos da diferença entre uma data e outra
const difMili = finalDate - initialDate;

// Como já temos a diferença entre as duas datas em milisegundos nas mãos, vamos converter esses milisegundos para:

// Dias, a quantidade de dias de diferença
const difDays = Math.floor(difMili / (1000 * 60 * 60 * 24));

// Horas, a quantidade de horas de diferença
const difHoras = Math.floor((difMili / (1000 * 60 * 60)) % 24);

// Minutos, a quantidade de minutos de diferença
const difMinutos = Math.floor((difMili / (1000 * 60)) % 60);

// Segundos, a quantidade de segundps de diferença
const difSeconds = Math.floor((difMili / 1000) % 60);

// Exibimos no console as diferenças que calculamos anteriormente
console.log(`${difDays} dia(s)`);
console.log(`${difHoras} hora(s)`);
console.log(`${difMinutos} minuto(s)`);
console.log(`${difSeconds} segundo(s)`);

