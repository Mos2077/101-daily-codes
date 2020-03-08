// EXERCÍCIO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

// URL: https://www.urionlinejudge.com.br/judge/pt/problems/view/1042

// Leia 3 valores inteiros e ordene-os em ordem crescente. 
// No final, mostre os valores em ordem crescente, uma linha em branco e 
// em seguida, os valores na sequência como foram lidos.

// Entrada
// A entrada contem três números inteiros.

// Saída
// Imprima a saída conforme foi especificado.


// CÓDIGO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

// Array de números que vamos sortear, do menor para o maior, ou seja, em ordem ascendente
const numbers = [6, 5, 4, 21];

// Criamos uma cópia do Array usando Spread, pois não queremos que ele herde o Prototype do array original (numbers)
// Protype? Herdar? Se não está familiarizado com esses termos não tem problema, pra ficar mais simples, o que foi dito acima foi isso:
// Criamos uma cópia do array numbers sem qualquer vínculo com o array original numbers
// Ou seja, mesmo que mudemos a cópia original (numbers), isso não vai afetar a cópia do array
const numbersCopy = [...numbers];

// Aqui usamos o método sort() do Javascript, esse método recebe uma função que determina a nova ordem dos elementos
// A função passada é esta: (a, b) => a - b
// Ela vai simplesmente ordenar do menor para o maior
// Como ela altera o array original, não precisamos guardar esse array ordenado em nenhuma variável
numbers.sort((a, b) => a - b);

// Aqui mostramos no console todos os elementos do array como uma string, e separamos cada elemento por "\n", ou seja, uma quebra de linha
// O método join() que faz essa "conversão", transformando o array em uma string que separa cada elemento por um termo especificado no parâmetro da função
console.log(numbers.join("\n"));

// Mostramos uma linha vazia no console pra separar
console.log("");

// Fazemos a mesma coisa que o primeiro join(), só que para a cópia do array
console.log(numbersCopy.join("\n"));
