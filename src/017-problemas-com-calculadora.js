// EXERCÍCIO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

// URL: https://www.urionlinejudge.com.br/judge/pt/problems/view/2694

// Joãozinho tem que ajudar seu pai. Um relatório específico com alguns números está saindo com caracteres indesejáveis no meio. 
// A ideia é apenas somar os 3 valores que aparecem em cada linha sempre na mesma posição, ignorando as letras e apresentar esta soma. 
// Não existem espaços em branco na linha.

// Entrada
// A primeira linha de entrada contém um inteiro N (N < 100000). Seguem N linhas com exatos 14 caracteres que devem ser lidas 
// e delas extraídos e somados os três números existentes.

// Saída
// Para cada linha de entrada, seu programa deve apresentar um valor numérico inteiro, que é a soma dos 3 números existentes na linha.


// CÓDIGO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

// Aqui lemos a quantidade de casos de testes que devem ser feito
const casosTeste = 5;

// For que permite a iteração, repete o código de código X vezes, o valor de X é a quantidade de casos de testes que foram lidas acima
for (let i = 0; i < casosTeste; i++) {
  // Primeiro lemos a entrada da string que vamos retirar os numeros
  const entrada = "Ab23s249ttu21";

  // Antes de continuar, vamos ver como funciona o método substring:
  // String de exemplo: "CARRO"
  // "CARRO".substring(0, 1) vai retonar C
  // Pois: o primeiro parâmetro é o index da string que queremos retornar, já o segundo é o index da string que queremos cortar a string (não incluindo)

  // Nota: use o Number() para transformar a String em um número
  // Pegamos o primeiro número
  const one = Number(entrada.substring(2, 4));

  // Pegamos o segundo número
  const two = Number(entrada.substring(5, 8));

  // E pegamos o terceiro número
  const three = Number(entrada.substring(11, 13));
  
  // E mostramos a soma no console
  console.log(one + two + three);
}
