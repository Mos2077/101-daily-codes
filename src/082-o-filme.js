// EXERCÍCIO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

// URL: https://www.urionlinejudge.com.br/judge/pt/problems/view/1963

// Bem-vindo à 3° Maratona de Programação Júnior da UFFS. 
// Esperamos sinceramente que as próximas horas sejam muito produtivas para você, que você faça muitos balões e que, acima de tudo,
// você se divirta! Lembre que você sempre pode pedir esclarecimento quando não entender direito a descrição de um problema.
// Lembre também que às 17:30 os juízes automáticos serão desligados e a competição entrará em modo blind, 
// de modo que todas as submissões neste período só começarão a ser julgadas às 18:10. 
// Por favor, fique conosco até o fim da competição, trabalhando nas soluções dos problemas até o último minuto, pois, 
// enquanto a competição ainda está ocorrendo, sempre há esperança!

// E foi esperança que motivou a Vovó Zazá, uma senhora de 72 anos, a realizar seu sonho de começar um curso universitário.
// Ela está fascinada com tudo o que diz respeito à Universidade: com as aulas, com a biblioteca,
// com os projetos de pesquisa e extensão, com o restaurante universitário,
// mas especialmente com a carteirinha de estudante que ela pode utilizar para pagar meia entrada no cinema. 
// Semana passada, Vovó Zazá e seus colegas de turma foram ao cinema assistir a um filme, 
// mas ficaram estarrecidos com o aumento do preço do ingresso.
// Revoltados, eles decidiram fazer uma manifestação contra o sistema capitalista opressor, 
// agendada para amanhã na Praça General Bertaso. Vovó Zazá quer colaborar com o movimento fazendo um cartaz
// com a seguinte palavra de ordem:

// QUE ABSURDO! O PREÇO DO CINEMA SUBIU … % !!

// Mas ela não é muito boa em Matemática, 
// e está solicitando sua ajuda para calcular a porcentagem de que precisa para completar o cartaz.

// Entrada
// A única linha da entrada consiste de dois valores A e B (0.00 < A ≤ B ≤ 1000.00),
// os quais, fornecidos com exatos dois dígitos após o ponto separador decimal, 
// representam respectivamente o valor antigo e o valor novo do ingresso do cinema.

// Saída
// A única linha da saída deve consistir unicamente de um valor, que represente como uma porcentagem o aumento do valor do ingresso. O valor deve ser acompanhado do símbolo % e conter exatos dois dígitos após o ponto separador decimal.


// CÓDIGO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

const str = lines.shift();

const [oldValue, newValue] = str.split(" ").map(value => Number(value));

const percentage = (newValue * 100) / oldValue;

const dif = percentage - 100;

console.log(`${dif.toFixed(2)}%`);
