// EXERCÍCIO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

// URL: https://www.urionlinejudge.com.br/judge/pt/problems/view/2344

// RESUMO: Leia um inteiro entre 0 e 100, e converta para o sistema de letras "A", "B", "C", "D" ou "E". 
// Usando de base a tabela que está presente na URL.

// Rosy é uma talentosa professora do Ensino Médio que já ganhou muitos prêmios pela qualidade de sua aula. 
// Seu reconhecimento foi tamanho que foi convidada a dar aulas em uma escola da Inglaterra. 
// Mesmo falando bem inglês, Rosy ficou um pouco apreensiva com a responsabilidade, 
// mas resolveu aceitar a proposta e encará-la como um bom desafio.

// Tudo ocorreu bem para Rosy até o dia da prova. Acostumada a dar notas de 0 (zero) a 100 (cem), 
// ela fez o mesmo na primeira prova dos alunos da Inglaterra. No entanto, os alunos acharam estranho,
// pois na Inglaterra o sistema de notas é diferente: as notas devem ser dadas como conceitos de A a E. 
// O conceito A é o mais alto, enquanto o conceito E é o mais baixo.

// Conversando com outros professores, ela recebeu a sugestão de utilizar a seguinte tabela, 
// relacionando as notas numéricas com as notas de conceitos:

// O problema é que Rosy já deu as notas no sistema numérico, e terá que converter as notas para o sistema de letras. 
// Porém, Rosy precisa preparar as próximas aulas (para manter a qualidade que a tornou reconhecida), 
// e não tem tempo suficiente para fazer a conversão das notas manualmente.

// Você deve escrever um programa que recebe uma nota no sistema numérico e determina o conceito correspondente.

// Entrada
// A entrada contém um único conjunto de testes, que deve ser lido do dispositivo de entrada padrão (normalmente o teclado). 
// A entrada contém uma única linha com um número inteiro N (0 ≤ N ≤ 100), representando uma nota de prova no sistema numérico.

// Saída
// Seu programa deve imprimir, na saída padrão, uma letra (A, B, C, D, ou E em maiúsculas) 
// representando o conceito correspondente à nota dada na entrada.


// CÓDIGO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

// Esta é a entrada que converteremos para o sistema de letras
const nota = 72;

// Se nota for 0, então é letra E...
if (nota === 0) console.log("E");

// Se for maior que 1 e menor que 35... D
else if (nota >= 1 && nota <= 35) console.log("D");

// Se for maior que 35 e menor que 60... C
else if (nota > 35 && nota <= 60) console.log("C");

// Se for maior que 61 e menor que 85... B
else if (nota > 61 && nota <= 85) console.log("B");

// Se for maior que 85... A
else if (nota > 85) console.log("A");


// Saída esperada para a nota 72
// 'B'
