// ATIVIDADE <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

// URL: https://www.urionlinejudge.com.br/judge/pt/problems/view/1534

// Leia um valor inteiro N que é o tamanho da matriz que deve ser impressa conforme o modelo fornecido.

// Entrada
// A entrada contém vários casos de teste e termina com EOF. 
// Cada caso de teste é composto por um único inteiro N (3 ≤ N < 70), 
// que determina o tamanho (linhas e colunas) de uma matriz que deve ser impressa.

// Saída
// Para cada N lido, apresente a saída conforme o exemplo fornecido.


// CÓDIGO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

// Essas são todas as entradas do usuário
const lines = ["4", "7"];

// Vamos criar um loop que só vai receber um break; quando não houver mais entradas
while (true) {
  // Lemos a entrada do usuário
  const str = lines.shift();
  
  // Se ela não existir, então acaba aqui
  if (!str) break;
  
  // Porém, se existir, convertemos para o tipo Number
  const n = Number(str);
  
  // Variável que armazena o index na string do 1, no início começa no início da string, ou seja, no 0
  let oneI = 0;
  
  // Variável que armazena o index na string do 2, no início começa no fim da string, ou seja, no tamanho da string - 1
  let twoI = n - 1;
  
  // Criamos um for para criar as linhas
  for (let x = 0; x < n; x++) {
    
    // Variável que armazena a linha inteira
    let output = "";
    
    // Criamos um for para criar as colunas dessa linha, pois lembrando, isso é uma matriz
    for (let y = 0; y < n; y++) {
      
      // Essa é a variável que armazena qual número deve ser renderizado nessa linha e nessa coluna
      let current = "";
    
      // Caso o y, que é a coluna, seja igual ao index do 1, então o current recebe 1
      if (y === oneI) current = "1";

      // Caso o y, que é a coluna, seja igual ao index do 2, então o current recebe 2
      // Observação, não usamos o else aqui, pois como vemos no segundo caso de uso na descrição do site:
      // Queremos que caso o index do 2 seja igual ao index 1, o 2 sobrescreva o 1
      if (y === twoI) current = "2";
      
      // Caso o current ainda esteja em branco, então é a vez do 3
      if (current === "") current = "3";
      
      // Adicionamos à linha (variável output) o elemento atual (current)
      output += current;
    }
    
    // E então mostramos a linha
    console.log(output);
    
    // E incrementamos 1 ao index do 1
    // E diminuismo 1 ao index do 2
    // Para que no próximo loop eles estejam em posições diferentes de acordo com a lógica
    oneI++;
    twoI--;
  }
}


// Saída esperada para 4 e 7 como entradas do usuário:
// '1332'
// '3123'
// '3213'
// '2331'
// '1333332'
// '3133323'
// '3313233'
// '3332333'
// '3323133'
// '3233313'
// '2333331'
