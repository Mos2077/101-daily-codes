// EXERCÍCIO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

// URL: https://www.urionlinejudge.com.br/judge/pt/problems/view/1963

// RESUMO: Receber 2 valores e calcular o quanto aumentou entre entre o valor 1 e 2 em porcentagem
// Por exemplo: Valor 1: 100, valor 2: 200, portanto, 
// aumentou 100%, já que o valor 1 corresponde à 100% e o valor 2, que é 200 corresponde a 200%, 
// é só fazer uma regra de três básica

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
// A única linha da saída deve consistir unicamente de um valor, 
// que represente como uma porcentagem o aumento do valor do ingresso. 
// O valor deve ser acompanhado do símbolo % e conter exatos dois dígitos após o ponto separador decimal.


// CÓDIGO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

// Variável com todas as entradas do usuário
const lines = ["20.00 30.00"];

// Pegamos o primeiro valor, e único, das entradas do usuário
const str = lines.shift();

// Dividimos essa string em 2 valores, o antigo valor (o primeiro, oldValue)
// E em novo valor (o segundo, newValue)
// O split() separa a string em um array com cada valor
// O map converte cada um desses valores em números para um Integer, Inteiro, Número
const [oldValue, newValue] = str.split(" ").map(value => Number(value));

// Pra achar essa porcentagem, é só usar a regra de três proporcional que vimos séculos no passado na escola
// Se antigo valor é igual a 100%, então o novo valor é igual a X%, que vai dar:
// oldValue ====> 100%
// newValue ====> X%
// oldValue * X = newValue * 100
// X = (newValue * 100) / oldValue -> Isso é o que está escrito abaixo em forma de código
const percentage = (newValue * 100) / oldValue;

// Calculamos a diferença, que é a nova porcentagem - 100 (que é a antiga)
const dif = percentage - 100;

// E então mostramos no console essa diferença com 2 casas decimais
console.log(`${dif.toFixed(2)}%`);


// Saída esperada para o valor R$20,00 como antigo valor e o valor R$30,00 como novo valor
// '50.00%'
