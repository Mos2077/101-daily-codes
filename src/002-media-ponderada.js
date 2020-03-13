// EXERCÍCIO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

// URL: https://www.urionlinejudge.com.br/judge/pt/problems/view/1040

// Leia quatro números (N1, N2, N3, N4), 
// cada um deles com uma casa decimal, correspondente às quatro notas de um aluno. 
// Calcule a média com pesos 2, 3, 4 e 1, respectivamente, para cada uma destas notas e mostre esta média acompanhada pela mensagem "Media: ". 
// Se esta média for maior ou igual a 7.0, imprima a mensagem "Aluno aprovado.".
// Se a média calculada for inferior a 5.0, imprima a mensagem "Aluno reprovado.".
// Se a média calculada for um valor entre 5.0 e 6.9, inclusive estas, o programa deve imprimir a mensagem "Aluno em exame.".

// No caso do aluno estar em exame, leia um valor correspondente à nota do exame obtida pelo aluno. 
// Imprima então a mensagem "Nota do exame: " acompanhada pela nota digitada. 
// Recalcule a média (some a pontuação do exame com a média anteriormente calculada e divida por 2). 
// e imprima a mensagem "Aluno aprovado." (caso a média final seja 5.0 ou mais ) ou "Aluno reprovado.", (caso a média tenha ficado 4.9 ou menos). 
// Para estes dois casos (aprovado ou reprovado após ter pego exame) apresente na última linha uma mensagem "Media final: " 
// seguido da média final para esse aluno.

// Entrada
// A entrada contém quatro números de ponto flutuante correspendentes as notas dos alunos.

// Saída
// Todas as respostas devem ser apresentadas com uma casa decimal. 
// As mensagens devem ser impressas conforme a descrição do problema. 
// Não esqueça de imprimir o enter após o final de cada linha, 
// caso contrário obterá "Presentation Error".

// CÓDIGO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

// Pesos das respectivas notas 1, 2, 3 e 4
const pesos = [2, 3, 4, 1];

// É a soma dos pesos
// Pra entender melhor a média ponderada, siga esta URL:
// https://www.somatematica.com.br/fundam/medias2.php
const divisor = 10;

// o dividendo começa com 0
let dividendo = 0;

// Aqui é a entrada de valores do usuário, 
// portanto, modifique esta string para os que quiser testar
// A string deve estar no formato: "X.X X.X X.X X.X"
// Cada X.X é uma nota do aluno, lembre de dividi-las por um espaço
let numeros = "5 5 5 5";

// Aqui pegamos a string criada acima e transformamos em um Array de números
numeros = numeros.split(" ").map(item => Number(item));

// Neste for, a ideia é acrescentar ao dividendo a multiplicação entre a notaX do aluno com o pesoX
for (let i = 0; i < 4; i++) {
  dividendo += numeros[i] * pesos[i];
}

// Aqui somente calculamos a media ponderada
const mediaPonderada = dividendo / divisor;

// E exibimos no console arredondando pra ter sempre uma casa decimal
console.log(`Media: ${arredondar(mediaPonderada, 1)}`);

// Caso a media ponderada seja maior ou igual a 7...
if (mediaPonderada >= 7) {
  //... exibimos a mensagem "aluno aprovado"
  console.log("Aluno aprovado.");
} 
// Caso a média for menor que 5...
else if (mediaPonderada < 5) {
  //... exibimos a mensagem "aluno reprovado"
  console.log("Aluno reprovado.");
} 
// Caso a média não cair em nenhum if anterior, quer dizer que ela está entre 5.0 e 6.9, portanto...
else {
  //... exibimos a mensagem "aluno em exame"
  console.log("Aluno em exame.");
  
  // Agora vamos ler a nota que o aluno tirou no exame, recalcular a media e mostrar se ele foi aprovado ou não
  
  // Aqui é outro ponto de entrada de valor do usuário
  // E é a nota do exame, modifique-a a e faça testes
  let notaExame = "6.4";
  
  // Transformamos a nota do exame em um número
  notaExame = Number(notaExame);
  
  // Calculamos a media final somando a media ponderada com a nota do exame e dividindo tudo por dois
  // Nota: os parênteses são necessários, pois sem eles, primeiro a nota do exame seria dividida por dois e só depois somada à media ponderada
  const mediaFinal = (mediaPonderada + notaExame) / 2;
  
  // E então exibimos a nota do exame
  console.log(`Nota do exame: ${arredondar(notaExame, 1)}`);
  
  // Se a média final for maior ou igual a 5...
  if (mediaFinal >= 5) {
    //... então mostramos a mensagem "aluno aprovado"
    console.log("Aluno aprovado.");
  } 
  // se não...
  else {
    // ...exibimos a mensagem "aluno reprovado"
    console.log("Aluno reprovado.");
  }
  // e por fim apenas imprimimos no console o valor da média final
  console.log(`Media final: ${arredondar(mediaFinal, 1)}`);
}

// Função que recebe um número, e um número de casas decimais e retona uma string formatada, que utiliza como base o método nativo do Js .toFixed();
function arredondar(numero, casas) {
  return numero.toFixed(casas);
}

// Saída esperada para a entrada principal: "5 5 5 5" e a entrada secundária (a nota do exame final) com "6.4":
// 'Media: 5.0'
// 'Aluno em exame.'
// 'Nota do exame: 6.4'
// 'Aluno aprovado.'
// 'Media final: 5.7'
