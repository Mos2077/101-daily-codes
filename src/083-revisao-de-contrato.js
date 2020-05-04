// EXERCÍCIO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

// URL: https://www.urionlinejudge.com.br/judge/pt/problems/view/1120

// Durante anos, todos os contratos da Associação de Contratos da Modernolândia (ACM) 
// foram datilografados em uma velha máquina de datilografia.

// Recentemente Sr. Miranda, um dos contadores da ACM, percebeu que a máquina apresentava falha em um,
// e apenas um, dos dígitos numéricos. Mais especificamente, o dígito falho, quando datilografado, 
// não é impresso na folha, como se a tecla correspondente não tivesse sido pressionada. 
// Ele percebeu que isso poderia ter alterado os valores numéricos representados nos contratos e, 
// preocupado com a contabilidade, quer saber,
// a partir dos valores originais negociados nos contratos, 
// que ele mantinha em anotações manuscritas, quais os valores de fato representados nos contratos.
// Por exemplo, se a máquina apresenta falha no dígito 5, 
// o valor 1500 seria datilografado no contrato como 100, pois o 5 não seria impresso.
// Note que o Sr. Miranda quer saber o valor numérico representado no contrato, ou seja, nessa mesma máquina, 
// o número 5000 corresponde ao valor numérico 0, e não 000 (como ele de fato aparece impresso).

// Entrada
// A entrada consiste de diversos casos de teste, cada um em uma linha. 
// Cada linha contém dois inteiros D e N (1 ≤ D ≤ 9, 1 ≤ N < 10100 ), representando, respectivamente, 
// o dígito que está apresentando problema na máquina e o número que foi negociado originalmente no contrato 
// (que podem ser grande, pois Modernolândia tem sido acometida por hiperinflação nas últimas décadas).

// O ultimo caso de teste é seguido por uma linha que contém apenas dois zeros separados por espaços em branco.

// Saída
// Para cada caso de teste da entrada o seu programa deve imprimir uma linha contendo um único inteiro V, 
// o valor numérico representado de fato no contrato.


// CÓDIGO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

// Ponto de entrada, o primeiro elemento representa a tecla falha, ou seja,
// a tecla que não estava funcionando na hora de digitar o valor do contrato
// O segundo elemento é o valor que era pra ser digitado
const [failKey, originalValue] = ["2", "200000000"];

// Vamos criar uma regex para encontrar todas as ocorrencias dessa tecla em uma string
const regex = new RegExp(failKey, "g");

// Usamos essa regex para substituir os caracteres do valor esperado por ''
// Ou seja, se o valor esperado fosse '3900' e a tecla falha fosse '3', então, ficaríamos com a string '900'
// E logo depois, com outro replace, para remover vários '0' seguidos no início do valor real,
// Por exemplo: a string fosse '4000' e a tecla falha fosse '4', então sobraria '000' do primeiro replace
// Por isso fazemos esse segundo replace: pra remover todos esses '0', então ficaria ''
// E como '' tem valor de false, usamos o operador || para pegar a string '0' com um zero dentro
let realValue = originalValue.replace(regex, "").replace(/^0*/g, "") || "0";

// E em seguida imprimimos no console o valor real que foi impresso na folha do contrato
console.log(realValue);


// Saída esperada para '2' como tecla falha e '200000000' como o valor esperado
// '0'
