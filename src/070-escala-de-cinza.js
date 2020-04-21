// EXERCÍCIO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

// URL: https://www.urionlinejudge.com.br/judge/pt/problems/view/2630

// Alguns algoritmos de processamento de imagem exigem um pré-processamento no qual é necessário transformar uma imagem colorida 
// em uma imagem em tons de cinza. Esta conversão pode ser realizada de diversas maneiras, 
// dependendo do resultado que se pretende obter.

// Para preservar a percepção das cores básicas pelo olho humano, uma conversão apropriada seria tomar 30% da componente vermelha (R),
// 59% da componente verde (G) e 11% da componente azul (B). Em termos matemáticos,

// P = 0, 30R + 0, 59G + 0, 11B

// Outras abordagens possíveis seriam determinar o valor de P através da média aritmética das três componentes ou atribuir a P 
// os valores da maior ou da menor entre as três componentes.

// Dadas as componentes RGB de um pixel da imagem colorida, determine o valor do pixel P da imagem em tons de cinza correspondente,
// determinada a conversão a ser utilizada. Despreze a parte decimal do resultado, caso exista.

// Entrada
// A entrada em T (1 ≤ T ≤ 100) casos de teste, onde o valor de T é dado na primeira linha da entrada.
// Cada caso de teste é composto por duas linhas: a primeira linha contém a conversão a ser utilizada: 
// eye para a primeira abordagem descrita, mean para a média aritmética, 
// max para o valor da maior componente e min para o valor da menor componente. 
// A segunda linha contém os valores R, G, B (0 ≤ R, G, B ≤ 255) do pixel da imagem colorida.

// Saída
// Para cada caso de testes dever ser impressa a seguinte mensagem
// "Caso #t: P", onde P é o nível de cinza do pixel da imagem em tons de cinza após a conversão do pixel da imagem colorida. 
// Esta mensagem deve ser seguida de uma quebra de linha.


// CÓDIGO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

// Criamos um objeto com as propriedades com o mesmo nome das operações que devemos fazer com a cor recebida:
// "eye" pega o P, que é a porcentagem de cinza,
// "mean" média entre o r, g, b
// "max" o maior entre o r, g e b
// "min" o menor entre o r, g e b
const op = {
  eye: (r, g, b) => r * 0.3 + g * 0.59 + b * 0.11,
  mean: (r, g, b) => (r + g + b) / 3,
  max: (...color) => Math.max(...color),
  min: (...color) => Math.min(...color)
};

// Aqui colocamos a operação que vamos realizar
const operation = "eye";

// Aqui colocamos as cores, r, g e b divididos por um espaço
const color = "23 78 197";

// Pegamos separadamente o r, g e b
const [r, g, b] = color.split(" ").map(cor => Number(cor));

// E aqui fazemos o seguinte: chamamos o objeto "op", na propriedade que tem o nome da operação atual
// E então chamamos como uma função passando o r, g e o b como parâmetro
const result = op[operation](r, g, b);
                         
// E aqui mostramos o resultado,
// e usamos o parseInt para não mostrar nenhuma casa decimal
console.log(parseInt(result));

// Saída esperada para a cor (23 78 197) e para a operação "eye":
// '74'
