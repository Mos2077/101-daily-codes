// EXERCÍCIO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

// URL: https://www.urionlinejudge.com.br/judge/pt/problems/view/1551

// RESUMO: Leia uma cadeia de caracteres, e veja quantas letras diferentes têm nela, se tiver as 26 mostre "frase completa"
// Se tiver 13 letras ou mais diferentes mas não tiver 26, mostre "frase quase completa"
// Se tiver menos de 13 letras diferentes, mostre "frase mal formulada" no console

// Seu professor de português não para de trazer coisas novas para a sala, e hoje não foi diferente. Existe uma cidade, segundo seu professor, onde as pessoas levam muito a sério a forma como elas se comunicam. Em especial, quando duas pessoas estão conversando, elas pensam muito nas frases antes de dizê-las, de forma a garantir que tal frase seja uma “frase completa”, ou talvez uma “frase quase completa”.

// Considerando o nosso alfabeto de 26 letras, uma frase é dita “completa” quando ela contém todas as letras do alfabeto contidas nela. De modo semelhante, uma frase é dita “quase completa” se ela não é completa, porém contém ao menos metade das letras do alfabeto contidas nela. Quando uma frase não é “completa” e nem “quase completa”, ela é dita “mal elaborada”.

// Seu professor lhe deu uma tarefa muito difícil: dadas várias frases trocadas entre vários habitantes da cidade citada, diga em qual das categorias acima a frase se encaixa.

// Entrada
// A primeira linha contém um inteiro N, indicando o número de casos de teste a seguir.

// Cada caso de teste contém uma linha, contendo letras minúsculas, espaços em branco e/ou vírgulas. O número de caracteres de cada linha é no mínimo 3 e no máximo 1000, contando com os espaços.

// Saída
// Para cada caso de teste, imprima uma linha contendo uma das seguintes frases: “frase completa”, quando a frase é considerada completa; “frase quase completa”, quando a frase não é completa, mas é considerada quase completa; ou “frase mal elaborada”, quando ela não é completa e nem quase completa.
 

// CÓDIGO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>


// Aqui lemos a frase que vai ser analisada
const phrase = "hoje fui na feira, e comprei banana, melao e abacates";

// Aqui removemos os espaços vazios (primeiro replace),
// removemos as virgulas (segundo replace),
// e criamos um array com cada letra da frase
const letters = phrase
  .replace(/ /g, "")
  .replace(/,/g, "")
  .split("");

// Nesse array vamos armazenar todas as letras que são diferentes, ou seja
// Nesse array cada elemento vai ser uma letra diferente que está na frase
// No momento, ele começa vazio, depois vamos preencher
let allLetters = [];

// Esse for permite repetir o trecho de código dele para cada letra da frase, ou seja, o array letters
for (let i = 0; i < letters.length; i++) {
  // Pegamos a letra atual
  const letter = letters[i];
 
  // Encontramos o index dessa letra na tabela ASCII
  // O método charCodeAt() retorna o index dessa letra
  const letterIndex = letter.charCodeAt();
  
  // Nessa linha ocorrem algumas coisas:
  // Vamos ao array allLetters (o array que contém todas as letras únicas da frase) e usamos o método filter()
  // Nesse método nós basicamente fizemos o seguinte filtro: retorne todos as letras que tem o index igual ao index da letra atual da frase
  // Então como um array é retornado, nós desestruturamos esse array e pegamos o primeiro elemento dele e chamamos este de exists
  const [exists] = allLetters.filter(item => item === letterIndex);
 
  // Caso essa variável exists ter um valor diferente de undefined e null, então quer dizer que essa letra atual da frase já está no array de letras únicas
  // Portanto, nós vamos verifica se ela NÃO existe, ou seja, vamos verificar se ela está undefined, se ela estiver, adicione ela ao array de letras únicas
  if (!exists) allLetters.push(letterIndex);
 
 // E assim, no próxima repetição desse código (lembrando que ainda estamos dentro do for) essa letra já estára no array de letras únicas
}
// Assim que terminar o for, ou seja, todas as letras da frase foram percorridas, nós vamos pegar a quantidade de letras diferentes que existem nessa frase:
const qtdLetters = allLetters.length;

// Se a quantidade de letras for igual a 26...
if (qtdLetters === 26) {
  // ... mostre "frase completa" no console
  console.log("frase completa");
} 
// Se não, se ela tiver pelo menos 13 letras...
else if (qtdLetters >= 13) {
  // ...mostre "frase quase completa" no console
  console.log("frase quase completa");
} 
// Se não, então ela tem menos de 13 letras
else {
  // Então vamos mostrar "frase mal elaborada" no console
  console.log("frase mal elaborada");
}


