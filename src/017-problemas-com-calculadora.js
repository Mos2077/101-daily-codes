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

const casosTeste = Number("3");
for (let i = 0; i < casosTeste; i++) {
  const entrada = "Ab23s249ttu21";
  const one = Number(entrada.substring(2, 4));
  const two = Number(entrada.substring(5, 8));
  const three = Number(entrada.substring(11, 13));
  console.log(one + two + three);
}
