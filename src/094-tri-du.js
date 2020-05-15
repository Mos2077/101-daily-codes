// EXERCÍCIO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

// URL: https://www.urionlinejudge.com.br/judge/pt/problems/view/1933

// Tri-du é um jogo de cartas derivado do popular jogo de Truco. 
// O jogo utiliza um baralho normal de 52 cartas, com treze cartas de cada naipe, mas os naipes são ignorados.
// Apenas o valor das cartas,considerados como inteiros de 1 a 13, são utilizados.

// No jogo, cada jogador recebe três cartas. As regras são simples:

// Um trio (três cartas de mesmo valor) ganha de uma dupla (duas cartas de mesmo valor).
// Um trio formado por cartas de maior valor ganha de um trio formado por cartas de menor valor.
// Uma dupla formada por cartas de maior valor ganha de uma dupla formada por cartas de menor valor.
// Note que o jogo pode não ter ganhador em muitas situações; nesses casos, as cartas distribuídas
// são devolvidas ao baralho, que é embaralhado e uma nova partida é iniciada

// Um jogador já recebeu duas das cartas que deve receber, e conhece seus valores. 
// Sua tarefa é escrever um programa para determinar qual o valor da terceira carta que maximiza a
// probabilidade de esse jogador ganhar o jogo.

// Entrada
// A entrada consiste de uma ´unica linha que contém dois inteiros, A (1 ≤ A ≤ 13) e B (1 ≤ B ≤ 13) 
// indicando os valores das duas primeiras cartas recebidas.

// Saída
// Seu programa deve produzir uma única linha com um inteiro representando o valor da carta que maximiza 
// a probabilidade de o jogador ganhar a partida.


// CÓDIGO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

// Ponto de entrada, é a primeira carta do jogador
const card1 = 10;

// Segundo ponto de entrada, é a segunda carta do jogador
const card2 = 10;

// Para maximizar as chances de ganhar, 
// seria necessário que a terceira carta fosse igual à maior carta das 2 anteriores
// Logo, essa carta nada mais é que a maior carta entre as duas
const card3 = Math.max(card1, card2);

// E então mostramos a maior carta, que vai aumentar as chances de vitória
console.log(card3);


// Saída para a entrada 10 como a primeira carta e também 10 como segunda carta:
// 10
