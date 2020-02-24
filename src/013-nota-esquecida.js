// EXERCÍCIO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

// URL: https://www.urionlinejudge.com.br/judge/pt/problems/view/3055

// João aprendeu na escola que a média de dois números é o valor da soma desses dois números dividido por dois. 
// Ou seja, a média de dois números A e B é M = A+B 2 .

// A professora contou para João as notas que ele tirou nas duas provas de Geografia. 
// As duas notas são números inteiros entre 0 e 100. João prontamente calculou a média das duas provas, que também resultou em um número inteiro.

// Mas João é muito esquecido, e agora não consegue lembrar-se das duas notas que tirou na prova. 
// Ele consegue se lembrar de apenas uma das notas das provas. 
// Por sorte, ele consegue se lembrar também da média entre as duas notas. Você pode ajudar

// João a determinar a nota da outra prova?

// Entrada
// A primeira linha contém um número inteiro A, indicando a nota de uma prova.
// A segunda linha contém um número inteiro M, indicando a média entre as duas notas das provas.

// Saída
// Seu programa deve produzir uma única linha, com apenas um número inteiro, 
// a nota da outra prova, que João não consegue recordar.

// Restrições

// • 0 ≤ A ≤ 100

// • 0 ≤ M ≤ 100

// Informações sobre a pontuação

// • Para um conjunto de casos de testes valendo 10 pontos, as duas notas das provas são iguais.

// CÓDIGO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

// Ponto de entrada da nota que João se lembra
const nota = Number("58");

// Ponto de entrada do valor da média que João lembra
const media = Number("42");

// A expressão abaixo determina a nota esquecida por joão
console.log(media * 2 - nota);

// Pra chegar a expressão que determina a nota esquecida,
// É só isolar o valor da nota esquecida nessa equação que determina a média:
// se...
// x + y / 2 = m
// Onde, 
// x = nota da prova 1
// y = nota da prova 2
// m = média

// então se queremos descobrir a nota da prova 2, e termos a nota da prova 1 e o valor da média, então apenas isolamos y:
// x + y / 2 = m
// x + y = 2m
// y = 2m - x
// Traduzindo, fica:
// média vezes 2 menos o valor da nota
// media * 2 - nota, exatamente o que está no console.log
