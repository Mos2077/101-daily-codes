// EXERCÍCIO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

// URL: https://www.urionlinejudge.com.br/judge/pt/problems/view/1239

// RESUMO: Faça um mini rich text: a entrada é um texto que permite "_" (para itálico) e "*" para negrito, 
// você precisa transformar esse texto (usando "_" e "*") em HTML (que usa "<b>" e </b> para negrito e "<i>" e "</i>" para itálico)


// Você está ajudando a desenvolver um sistema de gerenciamento de weblog chamado bloggo. 
// Embora bloggo coloque todo o conteúdo direto no website em HTML, nem todos autores apreciam usar tags HTML em seus textos. 
// Para tornar a vida deles mais fáceis, bloggo oferece uma sintaxe simples chamada atalhos para obter alguns efeitos textuais em HTML. Sua tarefa é, dado um documento escrito com atalhos, traduzi-lo para o HTML apropriado.

// Um atalho é usado para colocar texto em itálico. HTML faz isto com as tags <i> e </i>, 
// mas no bloggo um autor pode simplesmente colocar um pedaço de texto entre dois caracteres de sublinhado, '_'. 
// Portanto, onde um autor escreve:
// You _should_ see the baby elephant at the zoo!
// bloggo vai publicar o seguinte:
// You <i>should</i> see the baby elephant at the zoo!

// Outro atalho serve para colocar texto em negrito, o que, em HTML, é feito com as tags <b> e </b>. 
// Bloggo permite aos autores fazer o mesmo com pares do caractere asterisco, '*'. 
// Quando um autor escreve o texto:
// Move it from *Receiving* to *Accounts Payable*.
// ele vai sair no website assim:
// Move it from <b>Receiving</b> to <b>Accounts Payable</b>.
                
// Entrada
// A entrada contem vários casos de teste. Cada caso de teste é composto por uma linha que contem uma string texto, com zero ou mais usos dos atalhos itálico e negrito. Cada texto tem de 1 a 50 caracteres, inclusive. Os únicos caracteres permitidos no texto são os caracteres alfabéticos (de 'a' a 'z' e de 'A' a 'Z'), o sublinhado ('_'), o asterisco ('*'), o caractere de espaço e os símbolos de pontuação ',', ';', '.', '!', '?', '-', '(' e ')'. O caractere sublinhado '_' ocorre no texto um número par de vezes. O asterisco '*' também aparece um número par de vezes no texto. Nenhuma substring do texto entre um par de sublinhados ou entre um par de asteriscos pode conter outros sublinhados ou asteriscos, respectivamente.

// Saída
// Para cada linha de entrada seu programa deve gerar uma linha de saída com o texto traduzido para HTML como demonstrado nos exemplos abaixo. Para tornar itálico um pedaço de texto no HTML, você deve iniciar este pedaço com a tag <i> e terminá-lo com a tag </i>. Para texto em negrito, inicie com <b> e termine com </b>.

// O final da entrada é determinado por EOF.


// CÓDIGO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

// Ponto de entrada, esta é a variável que armazena o texto em um tipo simplificado de markdown
let string = "I saw _Chelydra serpentina_ in *Centennial Park*.";

// Criamos um array, e esse array contém todas as letras da string anterior, então ela vai estar com este valor:
// Obs: Esse array também vai incluir espaços
// [
//   'I', ' ', 's', 'a', 'w', ' ',
//   '_', 'C', 'h', 'e', 'l', 'y',
//   'd', 'r', 'a', ' ', 's', 'e',
//   'r', 'p', 'e', 'n', 't', 'i',
//   'n', 'a', '_', ' ', 'i', 'n',
//   ' ', '*', 'C', 'e', 'n', 't',
//   'e', 'n', 'n', 'i', 'a', 'l',
//   ' ', 'P', 'a', 'r', 'k', '*',
//   '.'
// ]
const letters = string.split("");

// Como vamos entrar em um laço de repetição baseado no array letters, não podemos modificar diretamente esse mesmo array:
// Temos de criar uma cópia para altermos esta durante a repetição, e não o próprio array letters
const formattedLetters = letters;

// Esta é a variável que define se estamos procurando pela tag de fechamento ("</x>") ou de início ("<b>") do itálico
// Se está false, então estamos procurando pela tag de início
// Se está true, estão estamos procurando pela tag de fechamento
// Começa false por que iniciamos procurando pela tag de início, 
// não há sentido em procurar pela tag de fechamento visto que nem usando a tag de início ainda
let searchingItalicEndTag = false;

// A mesma função da anterior, só que para o negrito
let searchingBoldEndTag = false;

// Entramos um laço de repetição que vai repetir o código para cada letra da frase, ou seja, vai percorrer o array letters
for (let i = 0; i < letters.length; i++) {
  // Pegamos a letra atual, usando o índice como base
  const letter = letters[i];
  
  // Criamos umas variáveis para definir a tag de início e fechamento do itálico
  // Pra que? Pra não ficar diretamente nas condicionais que iremos fazer a frente
  const initItalicTag = "<i>";
  const endItalicTag = "</i>";
  
  // A mesma coisa só que para o negrito
  const initBoldTag = "<b>";
  const endBoldTag = "</b>";
  
  // Se a letra atual for um underline: "_"  (símbolo que representa o itálico) ...
  if (letter === "_") {
    // ...entramos nesse bloco de código
    
    // Aqui fazemos uma substituição:
    // Pegamos a formattedLetters, 
    // no índice que está esta letra atual 
    // e colocamos no lugar dela a tag de fechamento caso a variável "searchingItalicEndTag" seja true, 
    // se ela for false, então colocamos a tag de início
    formattedLetters[i] = searchingItalicEndTag ? endItalicTag : initItalicTag;
    
    // Agora que já substituimos, adicionamos a tag de fechamento, 
    // então agora vamos procurar pela tag de início, então colocamos false na variável que agora estava true
    // Ou fazemos o contrário, caso tenhamos colocado a tag de início agora
    searchingItalicEndTag = !searchingItalicEndTag;
  } 
  // Se não, se a letra atual for o asterisco: "*" (símbolo que representa o negrito) ...
  else if (letter === "*") {
    // ...entramos nesse bloco de código
    formattedLetters[i] = searchingBoldEndTag ? endBoldTag : initBoldTag;
    searchingBoldEndTag = !searchingBoldEndTag;
  }
  
  // Obs: se a letra não for nem um underline nem um asterisco, então não precisamos fazer nada
  // afinal, o que nós queremos é só substituir os "_" e "*" por suas respectivas tags de início ou de fechamento, 
  // não queremos manipular nada na string além disso
}

// Criamos uma string a partir de um array usando o "join()"
// Como nós juntamos o array que estava com a formatação em HTML, e transformamos em uma string, basta mostrar no console:
console.log(formattedLetters.join(""));
