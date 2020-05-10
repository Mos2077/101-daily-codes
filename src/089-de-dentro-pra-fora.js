// EXERCÍCIO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

// URL: https://www.urionlinejudge.com.br/judge/pt/problems/view/1235

// A sua impressora foi infectada por um vírus e está imprimindo de forma incorreta. 
// Depois de olhar para várias páginas impressas por um tempo,

// você percebe que ele está imprimindo cada linha de dentro para fora.
// Em outras palavras, a metade esquerda de cada linha está sendo impressa a partir do meio da página até a margem esquerda. 
// Do mesmo modo, a metade direita de cada linha está sendo impressa à partir da margem direita e prosseguindo 
// em direção ao centro da página.

// Por exemplo a linha:
// THIS LINE IS GIBBERISH

// está sendo impressa como:
// I ENIL SIHTHSIREBBIG S

// Da mesma foma, a linha " MANGOS " está sendo impressa incorretamente como "NAM  SOG".
// Sua tarefa é desembaralhar (decifrar) a string a partir da forma como ela foi impressa para a sua forma original. 
// Você pode assumir que cada linha conterá um número par de caracteres.

// Entrada
// A entrada contém vários casos de teste. 
// A primeira linha de entrada contém um inteiro N que indica a quantidade de casos de teste.
// Seguem N linhas, cada uma com uma frase com no mínimo 2 e no máximo 100 caracteres de letras maiúsculas 
// e espaços que deverá ser desembaralhada (decifrada) à partir da forma impressa para a sua forma original,
// conforme especificação acima.

// Saída
// Para cada linha de entrada deverá ser impressa uma linha de saída com a frase decifrada, 
// conforme a especificação acima.


// CÓDIGO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

// Ponto de entrada, é a string que a impressora imprimiu
// Usamos .split("") para transformar a strnig em um array de caracteres
const a = "I ENIL SIHTHSIREBBIG S".split("");

// Esse é o index em que acaba a primeira substring
const firstPart = a.length / 2 - 1;

// Criamos um array com todos os caracteres da primeira substring
const b = a.filter((_, i) => i <= firstPart);

// E então criamos outro array para armazenar a segunda parte da string
const c = a.filter((_, i) => i > firstPart);

// E em seguida mostramos no console as duas substrings juntas, porém cada uma invertida
// O que faz com que a string volte ao normal
console.log(b.reverse().join("") + c.reverse().join(""));


// Saída esperada para a string "I ENIL SIHTHSIREBBIG S" como entrada:
// 'THIS LINE IS GIBBERISH'

