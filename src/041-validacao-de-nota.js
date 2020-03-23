// EXERCÍCIO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

// URL: https://www.urionlinejudge.com.br/judge/pt/problems/view/1117

// Faça um programa que leia as notas referentes às duas avaliações de um aluno. 
// Calcule e imprima a média semestral. 
// Faça com que o algoritmo só aceite notas válidas (uma nota válida deve pertencer ao intervalo [0,10]). 
// Cada nota deve ser validada separadamente.

// Entrada
// A entrada contém vários valores reais, positivos ou negativos. 
// O programa deve ser encerrado quando forem lidas duas notas válidas.

// Saída
// Se uma nota inválida  for lida, deve ser impressa a mensagem "nota invalida".
// Quando duas notas válidas forem lidas, deve ser impressa a mensagem "media = " seguido do valor do cálculo. 
// O valor deve ser apresentado com duas casas após o ponto decimal.


// CÓDIGO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

// Ponto de entrdda, são as notas a serem avaliadas pelo programa
const nota1 = 10;
const nota2 = 2;

// Se amba as notas forem maiores ou iguais a zero e menores ou iguais a dez, então as notas são válidas...
if(nota1 >= 0 && nota1 <= 10 && nota2 >= 0 && nota2 <= 10) {
    // Portanto, imprimimos no console a nota1 + nota2  / 2
    // Lembre-se de adicionar os parênteses, pois sem eles, primeiro será feita a divisão, e não a soma dos números
    console.log("media = " + ((nota1 + nota2) / 2));
}
// Porém, caso os números falhem em algum teste acima, então as notas não são válidas
else{
    // ... logo, imprima no console "notas invalidas"
    console.log("notas invalidas");
}

// Saída esperada para as notas 10 e 2:
// 'media = 6'
