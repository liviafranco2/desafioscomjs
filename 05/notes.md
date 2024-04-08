Crie um script que declare uma variável e verifique se o seu valor é um booleano. Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".


let clima = "frio"; // Aqui "frio" é uma string que representa um valor
let isTrue = typeof clima; // A função typeof será usada para verificar o tipo de "clima"

console.log(isTrue); // Isso imprimirá "string" no console, pois "clima" é uma string

if (isTrue === "boolean") {
    console.log('É um booleano');
} else {
    console.log('Não é um booleano');
}