// EXERCÍCIO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

// URL: https://www.urionlinejudge.com.br/judge/pt/problems/view/1263

// Uma aliteração ocorre quando duas ou mais palavras consecutivas de um texto possuem a mesma letra inicial 
// (ignorando maiúsculas e minúsculas). Sua tarefa é desenvolver um programa que identifique, 
// a partir de uma sequência de palavras, o número de aliterações que essa sequência possui.

// Entrada
// A entrada contém diversos casos de testes. Cada caso é expresso como um texto em uma única linha, 
// contendo de 1 a 100 palavras separadas por um único espaço, 
// cada palavra tendo de 1 a 50 letras minúsculas ou maiúsculas ('A'-'Z','a'-'z'). A entrada termina em EOF.

// Saída
// Para cada caso de teste imprima o número de aliterações existentes no texto informado, conforme exemplos abaixo.


// CÓDIGO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

// Aqui é a frase que vamos analisar se tem ou não alliterações
// Nota: usamos toLowerCase() paratransformar tudo em letra minúscula
const text = "Round the rugged rock the ragged rascal ran".toLowerCase();

// Criamos um array chamado words, como? Simplesmente pegamos a frase e dividimos ela por " " (espaços vazios)
const words = text.split(" ");

// Variável que vai contar quantas aliterações têm na frase (se não tiver, vai continuar com 0)
let alliterations = 0;

// Variável que armazena a última letra da última palavra que lemos
// Ela começa com o valor da primeira letra da primeira palavra
let lastLetter = words[0].charAt(0);

// Variável que armazena a última literação que tivemos (se tivermos)
// Começa com null, afinal, estamos na primeira letra da primeira palavra, portanto ainda não há nenhuma literação
let lastAlliteration = null;

// Repetimos o código pra cada palavra da frase
// Ou seja, para cada elemento do array words
// Por que o contador "i" começa com 1 e não 0? Por que já pegamos o elemento 0 acima: linha 32
for (let i = 1; i < words.length; i++) {
  // Variável que armazena a palavra que estamos analisando no momento
  const word = words[i];
  
  // Variável que armazena a primeira letra da variável word
  const currentLetter = word.charAt(0);
  
  // Começando a análise, nós temos 3 cenários:
  // Nota considere a palavra entre os colchetes dos exemplos: "frase frase frase [frase] frase..." 
  // como a palavra que estamos analisando no momento, a palavra atual
  
  // Casos:
  // 1: "Round the rugged [rock] the ragged rascal ran"
  // 2: "Round [the] rugged rock the ragged rascal ran"
  // 3: "Round the rugged rock the ragged rascal [ran]"
  
  // Caso 1: Caso normal, nesse momento encontramos uma aliteração, pois a palavra anterior começa com a mesma letra, 
  // e não há aliterações ocorrendo no momento (a aliteração começa a partir de agora)
  
  // Caso 2: Caso negativo, nesso momento a palavra atual não faz bate com a palavra anterior
  
  // Caso 3: Encontramos uma aliteração, da letra R, porém nesse momento já está ocorrendo uma aliteração da letra R, 
  // então esta aliteraçõa nova encontrada não vai contar
  
  // Transformando essa lógica para código:
  
  // Caso a primeira letra da palavra anterior (lastLetter) seja igual a primeira letra da palavra atual (currentLetter)...
  if (lastLetter === currentLetter) {
    // ... entre nesse bloco do IF
    
    // E aqui verificamos...
    
    // Se currentLetter for diferente da primeira letra da última aliteração...
    if (currentLetter !== lastAlliteration) {
      // Então caímos no caso 1: precisamos contar mais uma aliteração:
      alliterations++;
      // e dizer que a última aliteção foi com a letra atual
      lastAlliteration = currentLetter;
    }
    // O caso 3 está aqui, mas nada vai acontecer, por que não é necessário mudar nem a última aliteração nem contar mais uma aliteração
  } else {
    // ... se entramos nesse bloco de código, então quer dizer que caímos no caso 2
    // Portanto dizemos que a última aliteração é nula, ou seja, não tem aliterações ocorrendo no momento
    lastAlliteration = null;
  }
  // Por fim, agora colocamos a última letra como a letra atual para na próxima repetição esteja atualizada
  lastLetter = currentLetter;
}

// E mostramos a quantidade de aliterações que encontramos
console.log(alliterations);
