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

const [x, y] = [5,0];

if(!x && !y){
  console.log("Origem");
}else{
  if(!x){
    console.log("Eixo Y");
  }else if(!y){
    console.log("Eixo X");
  }else{
    if(x > 0 && y > 0){
      console.log("Q1");
    }else if(x > 0 && y < 0){
      console.log("Q4")
    }else if(x < 0 && y > 0){
      console.log("Q2")
    }else if(x < 0 && y < 0){
      console.log("Q3")
    }
	}
}
