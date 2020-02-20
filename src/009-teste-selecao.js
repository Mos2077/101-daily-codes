// EXERCÍCIO <><><><><><><><><><><><><><><><><><><><><><><><><><><><>

// URL: https://www.urionlinejudge.com.br/judge/pt/problems/view/1035

// Leia 4 valores inteiros A, B, C e D. A seguir, se B for maior do que C e se D for maior do que A, e a soma de C com D for maior que a soma de A e B e se C e D, ambos, forem positivos e se a variável A for par escrever a mensagem "Valores aceitos", senão escrever "Valores nao aceitos".

// Entrada
// Quatro números inteiros A, B, C e D.

// Saída
// Mostre a respectiva mensagem após a validação dos valores.

// CÓDIGO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

// Ponto de entrada dos valores pedidos no exercício aqui
// Separe cada valor por um espaço
const entrada = "5 6 7 8";

// Pegamos a string e pegamos o valor A, B, C e D
const [A, B, C, D] = entrada.split(" ").map(item => Number(item));

// Criamos variáveis que vão armazenar true se a condição
// Do exercício for atendida

// Armazena true se o valor B for maior que A
const BMaiorC = B > C;
const DMaiorA = D > A;

// Armazena true se a soma de C e D for maior que a soma de A e B
const SomaCDMaiorSomaAB = C + D > A + B;

// Armazena true se A for par
// O operador "%" pega o resto da divisão
// Ou seja, se o resto da divisão de A por 2 é 0, então A é par
const APar = A % 2 === 0;

// Caso todas as variáveis acima forem true/verdadeiras e mais estas:
// 1. C for positivo
// 2. D for positivo
if(BMaiorC && DMaiorA && SomaCDMaiorSomaAB && C >= 0 && D >= 0){
  // Se cair aqui, então os valores foram aceitos, então mostramos no console
  console.log("Valores aceitos");
}else{
  // Se cair aqui, então alguma verificação deu falso, então não aceitamos os valores
  console.log("Valores nao aceitos")
}
