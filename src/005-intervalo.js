// Aqui é o ponto de entrada, aceita qualquer valor float
const entrada = 10.2;

// Declaramos uma variavel que vai dizer se a entrada esta fora do intervalo
// Nota: o operador || faz com que a expressão retorne TRUE se pelo menos uma comparação for verdadeira, já o && obriga que todas as comparações sejam verdadeiras para que retorna TRUE
const foraDoIntervalo = entrada < 0 || entrada > 100;

// Se estiver fora do intervalo, imprimimos no console
if (foraDoIntervalo) console.log("Fora de intervalo");

// Caso esteja entre 0 e 25 imprimimos no console
else if (entrada >= 0 && entrada <= 25) console.log("Intervalo [0,25]");

// A mesma coisa porém no intervalo maior que 25 e menor ou igual a 50
else if (entrada > 25 && entrada <= 50) console.log("Intervalo (25,50]");

// O mesmo só que maior que 50 e menor ou igual a 75
else if (entrada > 50 && entrada <= 75) console.log("Intervalo (50,75]");

// Caso não caia em nenhum dos casos anteriores, então o intervalo é maior que 75 e menor ou igual a 100
else console.log("Intervalo (75,100]");
