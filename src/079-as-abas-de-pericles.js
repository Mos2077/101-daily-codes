// EXERCÍCIO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

// URL: http://urionlinejudge.com.br/judge/pt/problems/view/2061

// RESUMO: Ler dois números X e Y, depois ler um Array[Y] (de tamanho Y), e percorrer cada elemento do Array e fazer o seguinte:
// Armazenar a quantidade de vezes que a palavra "clicou" aparece no Array - (Variável A)
// Armazenar a quantidade de vezes que a palavra "fechou" aparece no Array - (Variável B)
// E mostrar X + (A - B) 
// Y só serve pra fazer o for que percorre o Array (e se buscarmos usar o método filter, Y fica inútil)


// Péricles é um rapaz que tem um interesse único por história.
// Utilizando seu atualizadíssimo navegador de internet rapoza cromada, 
// conheceu até os sitios mais remotos e obscuros atrás de informações sobre a mitologia grega.

// Por ironia do destino, o navegador de Péricles acabou sendo infectado por um malware com uma caracterísica peculiar: 
// cada vez que Péricles fechava uma aba no seu navegador, outras duas abas apareciam!
// No entanto, quando Péricles clicou sem querer em uma das propagandas de uma aba, percebeu que, por um erro do navegador,
// a aba foi encerrada (sem abrir outras abas). Por causa do malware, todas as abas possuem irritantes propagandas.

// Sua tarefa é descobrir com quantas abas que o navegador de Péricles ficou, 
// sabendo o número inicial de abas e a sequência de ações de Péricles.
// As ações podem ser fechou (quando Péricles fechou uma aba) ou clicou (quando Péricles clicou em uma propaganda).

// Entrada
// A entrada é iniciada por uma linha contendo dois números inteiros positivos, N e M (0 < N, M < 500), 
// representando o número inicial de abas e o número de ações de Péricles. 
// Cada linha subsequente contém uma ação (fechou ou clicou). Naturalmente, o número de abas é sempre maior ou igual a zero.

// Saída
// A saída deve ser uma linha contendo o número final de abas.

// CÓDIGO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

// Variáveis de entradas: [Variável que armazena a quantidade de abas iniciais, Variável que armazena a quantidade de ações]

const actions = ["fechou", "fechou", "clicou", "clicou", "clicou"];

let [initialTabs, actionsLength] = [3, 5];

// Fazemos um for para percorrer cada ação
for (let act = 0; act < actionsLength; act++) {
  // Pegamos a ação atual do Array de ações
  const currentAction = actions[act];

  // Verificamos, se for igual a "fechou", aumentamos em 1 as abas:
  // Por que quando ele tenta fechar 1 aba, o navegador abre 2
  if (currentAction === "fechou") initialTabs++;
  // Agora se ele clicou no anúncio, diminuimos uma aba
  else initialTabs--;
}

// No final, imprimimos as abas restantes
console.log(initialTabs);


// Saída esperada para [3, 5] como entrada e ["fechou", "fechou", "clicou", "clicou", "clicou"] como ações de Péricles:
// '2'

