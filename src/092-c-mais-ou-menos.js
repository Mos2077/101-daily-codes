// EXERCÍCIO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

// URL: https://www.urionlinejudge.com.br/judge/pt/problems/view/2486

// Ultimamente, diversas pessoas estão indo à Dra. Cláudia Café com Leite para saber 
// se estão consumindo a quantidade recomendada diária de vitamina C. Isso tem a deixado exausta, 
// e por isso ela lhe pediu para escrever um programa que, dado o consumo diário de alimentos ricos
// em vitamina C por uma pessoa, indique o quanto essa pessoa deve consumir a mais ou a menos para 
// atingir o recomendado.

// Para tal, você poderá utilizar a tabela a seguir:

// Alimentos ricos em Vitamina C	| Quantidade de Vitamina C
// suco de laranja	                | 120 mg
// morango fresco	                | 85 mg
// mamao	                        | 85 mg
// goiaba vermelha	                | 70 mg
// manga	                        | 56 mg
// laranja	                        | 50 mg
// brocolis	                        | 34 mg

// Considere que o consumo diário recomendado de vitamina C está entre 110 mg e 130 mg, inclusive.

// Entrada
// Cada caso de teste é composto um inteiro T (1 ≤ T ≤ 7) indicando que a pessoa consome diariamente T 
// alimentos entre os 7 alimentos da tabela. Em seguida, haverá T linhas com um inteiro N e um alimento 
// (totalmente em caixa baixa e sem acentuações), indicando que a pessoa consome uma quantidade N daquele alimento.
// A entrada termina com T = 0.

// Saída
// Para cada caso de teste (T), se o consumo ultrapassou o limite recomendado, imprima "Menos X mg", em que X 
// representa a quantidade a menos a ser consumida para atingir o limite recomendado; se o consumo não atingiu o recomendado, 
// imprima "Mais X mg", em que X representa a quantidade a mais para atingir o recomendado; 
// se o consumo está dentro do intervalo recomendado, imprima "X mg", 
// em que X representa a quantidade consumida diariamente pela pessoa.


// CÓDIGO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

// Todas as comidas que estão na tabela, no formato:
// {
//    "nome da comida": valor em miligramas
// }
const foods = {
  "suco de laranja": 120,
  "morango fresco": 85,
  mamao: 85,
  "goiaba vermelha": 70,
  manga: 56,
  laranja: 50,
  brocolis: 34,
};

// Ponto de entrada, é um array com todas as comidas que o paciente ingeriu, no formato:
// Cada elemento do array no formato de string: "Quantidade Nome da comida"
const eatedFoods = ["2 suco de laranja", "3 mamao"];

// Essa é a quantidade de comidas diferentes que o paciente ingeriu
const foodLength = 2;

// Aqui armazenamos a o total em miligramas da vitamina C, C++, C# (Por favor, me perdoe)
let total = 0;

// Criamos um for que vai contabilizar cada tipo de comida que o cliente ingeriu
for (let i = 0; i < foodLength; i++) {
  // Pegamos a quantidade e o nome da comida através da desestruturação de Array
  let [qtd, ...name] = eatedFoods[i].split(" ");
  // Como separamos por um espaço vazio: " ", as palavras do nome que são compostas também viraram array,
  // Para consertar isso, juntamos ela de novo com uma string, usando .join()
  name = name.join(" ");
  
  // Adicionamos ao total, o valor da comida * a quantidade ingerida na variável total
  total += foods[name] * qtd;
}

// Caso o total seja menor que 110, que é a quantidade mínima
// Imprimimos: Mais [Quantidade que falta para chegar à 110 miligramas] mg
if (total < 110) console.log("Mais " + (110 - total) + " mg");

// Caso o total seja maior que 130, que é a quantidade máxima,
// Imprimimos: Menos [Quantidade que está em excesso comparado à quantidade máximaem miligramas] mg
else if (total > 130) console.log("Menos " + (total - 130) + " mg");

// Caso o total seja esteja entre a quantidade recomendada,
// Imprimimos: [Quantidade que o paciente ingeriu em miligramas] mg
else console.log(total + " mg");


// Saída esperada para 2 tipos de comida: 2 sucos de laranja e 3 mamões
// 'Menos 365 mg'
