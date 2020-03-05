// EXERCÍCIO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

// URL: https://www.urionlinejudge.com.br/judge/pt/problems/view/1041

// Leia 2 valores com uma casa decimal (x e y), 
// que devem representar as coordenadas de um ponto em um plano. 
// A seguir, determine qual o quadrante ao qual pertence o ponto,
// ou se está sobre um dos eixos cartesianos ou na origem (x = y = 0).


// Se o ponto estiver na origem, escreva a mensagem “Origem”.

// Se o ponto estiver sobre um dos eixos escreva “Eixo X” ou “Eixo Y”,
// conforme for a situação.

// Entrada
// A entrada contem as coordenadas de um ponto.

// Saída
// A saída deve apresentar o quadrante em que o ponto se encontra.


// CÓDIGO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

// Pra começar, pegamos um valor de x e y
// Pegamos o primeiro elemento do array e colocamos na variável X
// Pegamos o segundo elemento do array e colocamos na variável y
const [x, y] = [5,0];

// Se x for igual a 0, ele vai retornar um valor falso, o mesmo para y
// Usamos o operador de negação pra fazer a seguinte pergunta:
// X e Y é igual a 0? Se for...
if(!x && !y){
  // ...mostre no console "Origem"
  console.log("Origem");
}else{
  // Se os dois não forem igual a zero, então verifique se pelo menos o..
  // x é igual a zero
  if(!x){
    // Se x for igual a zero, então o ponto está no eixo y
    console.log("Eixo Y");
  }else if(!y){
    // Se o x não for igual a zero, então se o y for igual a zero,
    // quer dizer que o ponto está no eixo x
    console.log("Eixo X");
  }else{
    // Caso ainda não tenhamos caído em nenhuma excessão acima, então quer dizer que x e y tem valores diferentes de 0
    
    // Primeiro vamos verificar se o ponto está no quadrante 1
    // Ou seja, se x e y é maior que 0 (ou seja, se são positivos)
    if(x > 0 && y > 0){
      // Se forem, então o ponto está no quadrante 1
      console.log("Q1");
    }else if(x > 0 && y < 0){
      // Se cairmos aqui, quer dizer que estamos no quadrante 4, pois..
      // X é maior que zero e Y é menor que zero
      console.log("Q4")
    }else if(x < 0 && y > 0){
      // Se ainda não caímos em nenhum caso de uso, então vamos verificar se o x é menor que zero e o y maior que zero
      console.log("Q2")
    }else if(x < 0 && y < 0){
      // Então por fim, verificamos se x e y são menores que zero
      // Nós podemos remover este If, mas para ficar algo mais didático e legível, é bom deixar este último if
      // Então imprimimos no console que estamos no quadrante 3
      console.log("Q3")
    }
  }
}
