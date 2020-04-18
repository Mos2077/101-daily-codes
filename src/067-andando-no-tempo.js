// EXERCÍCIO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

// URL: https://www.urionlinejudge.com.br/judge/pt/problems/view/2235
// RESUMO: Queria que tivesse, mas isso tem de ler mesmo pra entender essa mecânica que criaram com o tempo

// Imagine que você tenha uma máquina do tempo que pode ser usada no máximo três vezes,
// e a cada uso da máquina você pode escolher voltar para o passado ou ir para o futuro.
// A máquina possui três créditos fixos; cada crédito representa uma certa quantidade de anos,
// e pode ser usado para ir essa quantidade de anos para o passado ou para o futuro.
// Você pode fazer uma, duas ou três viagens, e cada um desses três créditos pode ser usado uma vez apenas.
// Por exemplo, se os créditos forem 5, 12 e 9,
// você poderia decidir fazer duas viagens: ir 5 anos para o futuro e, depois, voltar 9 anos para o passado. 
// Dessa forma, você terminaria quatro anos no passado, em 2012. 
// Também poderia fazer três viagens, todas indo para o futuro, usando os créditos em qualquer ordem, terminando em 2042.

// Neste problema, dados os valores dos três créditos da máquina, 
// seu programa deve dizer se é ou não possível viajar no tempo e voltar para o presente,
// fazendo pelo menos uma viagem e, no máximo, três viagens; sempre usando cada um dos três créditos no máximo uma vez.

// Entrada
// A entrada consiste de uma linha contendo os valores dos três créditos A, B e C (1 ≤ A, B, C ≤ 1000).

// Saída
// Seu programa deve imprimir uma linha contendo o caracter “S” se é possível viajar e voltar para o presente, 
// ou “N” caso contrário.


// CÓDIGO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

// Créditos da viagem armazenados em uma string divididos por um espaço
const credits = "31 110 79";

// Pegamos os 3 créditos e armazenamos nas variáveis a,b e c respecitivamente à ordem da string
const [a, b, c] = credits.split(" ").map(credit => Number(credit));

// Vamos verificar se a soma de X + Y === Z, isso para todos os créditos, por isso, tem 3 operadores "||"
// Caso algum deles seja true, então é possível viajar no tempo
let isPossible = a + b === c || a + c === b || b + c === a;

// Agora, se a substração de X por Y for igual a Z, então também é possível viajar pelo tempo
// Então fazemos essa verificação para cada crédito
if (!isPossible) isPossible = a - b === c || a - c === b || b - c === a;

// Caso os testes acima ainda derem falso,
// ou seja, ainda não foi possível encontrar uma forma de viajar sem precisar ficar preso em outro tempo, vamos verificar:
// Caso dois créditos tenham valores iguais, então é possível viajar pelo tempo e voltar para o presente
// Pois não somos obrigados a usar os 3, apenas 1 no mínimo
if (!isPossible) isPossible = a === b || b === c || c === a;

// Se possível está com o valor true, então algum dos casos acima deu certo,
// o que significa que podemos viajar no tempo e voltar para o presente. logo imprimimos a mensagem "S", se não, imprimimos "N"
console.log(isPossible ? "S" : "N");


// Saída esperada para os créditos "31 110 79":
// 'S'

