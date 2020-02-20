// EXERCÍCIO <><><><><><><><><><><><><><><><><><><><><><><><><><><><>

// URL: https://www.urionlinejudge.com.br/judge/pt/problems/view/1035

// Leia 4 valores inteiros A, B, C e D. A seguir, se B for maior do que C e se D for maior do que A, e a soma de C com D for maior que a soma de A e B e se C e D, ambos, forem positivos e se a variável A for par escrever a mensagem "Valores aceitos", senão escrever "Valores nao aceitos".

// Entrada
// Quatro números inteiros A, B, C e D.

// Saída
// Mostre a respectiva mensagem após a validação dos valores.

// CÓDIGO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

const entrada = "5 6 7 8";
const [A, B, C, D] = entrada.split(" ").map(item => Number(item));
const BMaiorC = B > C;
const DMaiorA = D > A;
const SomaCDMaiorSomaAB = C + D > A + B;
const APar = A % 2 === 0;
if(BMaiorC && DMaiorA && SomaCDMaiorSomaAB && C >= 0 && D >= 0){
  console.log("Valores aceitos");
}else{
  console.log("Valores nao aceitos")
}
