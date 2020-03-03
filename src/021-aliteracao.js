// EXERCÍCIO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

// URL: https://www.urionlinejudge.com.br/judge/pt/problems/view/1263

// Uma aliteração ocorre quando duas ou mais palavras consecutivas de um texto possuem a mesma letra inicial 
// (ignorando maiúsculas e minúsculas). Sua tarefa é desenvolver um programa que identifique, 
// a partir de uma sequência de palavras, o número de aliterações que essa sequência possui.

// Entrada
// A entrada contém diversos casos de testes. Cada caso é expresso como um texto em uma única linha, 
// contendo de 1 a 100 palavras separadas por um único espaço, 
// cada palavra tendo de 1 a 50 letras minúsculas ou maiúsculas ('A'-'Z','a'-'z'). A entrada termina em EOF.

// Saída
// Para cada caso de teste imprima o número de aliterações existentes no texto informado, conforme exemplos abaixo.


// CÓDIGO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

let getout = false;
while (!getout) {
  const text = lines.shift().toLowerCase();
  if (!text) {
    getout = true;
    break;
  }
  const words = text.split(" ");

  let alliterations = 0;
  let lastLetter = words[0].charAt(0);
  let lastAlliteration = null;

  for (let i = 1; i < words.length; i++) {
    const word = words[i];
    const currentLetter = word.charAt(0);

    if (lastLetter === currentLetter) {
      if (currentLetter !== lastAlliteration) {
        alliterations++;
        lastAlliteration = currentLetter;
      }
      lastLetter = currentLetter;
    } else {
      lastLetter = currentLetter;
      lastAlliteration = null;
    }
  }

  console.log(alliterations);
}
