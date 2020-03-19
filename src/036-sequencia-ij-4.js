// EXERCÍCIO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

// URL: https://www.urionlinejudge.com.br/judge/pt/problems/view/1098

// Você deve fazer um programa que apresente a sequencia conforme o exemplo abaixo.

// Entrada
// Não há nenhuma entrada neste problema.

// Saída
// Imprima a sequencia conforme exemplo abaixo.



// CÓDIGO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

// Vamos criar um for que vai:
// Criar uma variável chamada i que vai começar por 0
// Essa variável vai ganhar 0.2 a cada repetição
// Vamos continuar repetindo enquanto essa variável for menor ou igual a 2
for (let i = 0; i <= 2; i += 0.2) {
  // O JavaScript por alguma falha na Matrix ou conspiração alienígena, ele ao invés de fazer isso: 0.4 + 0.2 = 0.6, ele faz isto: 0.4 + 0.2 = 0.6000000000000001
  // Então para obrigar ele a dar apenas uma casa decimal, nós primeiro usamos o .toFixed(1) e em seguida usamos o Number() para transformar a string com uma casa decimal em um número de verdade
    i = Number(i.toFixed(1));
  
  // Para cada loop da variável i, nós criamos outro loop, que irá fazer o seguinte:
  // Criar uma variável de nome j = que vai começar com o valor da variável i + 1
  // J vai ganhar 1 a cada repetição
  // Vamos continuar repetindo enquanto a variável J for menor que i + 3. Pois essa verificação vai permitir que o laço se repita apenas 3x para cada repetição do laço da variável i
  for (let j = i + 1; j <= i + 3; j++) {
    // E dentro deste for, nós printamos a variável I e J na tela, como pede o exercício
    console.log("I=" + i + " J=" + j);
  }
}

// Saída esperada:
// 'I=0 J=1'
// 'I=0 J=2'
// 'I=0 J=3'
// 'I=0.2 J=1.2'
// 'I=0.2 J=2.2'
// 'I=0.2 J=3.2'
// 'I=0.4 J=1.4'
// 'I=0.4 J=2.4'
// 'I=0.4 J=3.4'
// .......
// 'I=1.8 J=3.8'
// 'I=1.8 J=4.8'
// 'I=2 J=3'
// 'I=2 J=4'
// 'I=2 J=5'
