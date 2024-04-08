let primeiroNumero = prompt ('Digite o primeiro número');
let segundoNumero = prompt ('Digite o segundo numero');

primeiroNumero = Number (primeiroNumero);
segundoNumero = Number (segundoNumero);

const resultado = primeiroNumero - segundoNumero;

alert('Subtração' + resultado);
console.log('A subtração de', primeiroNumero, 'e', segundoNumero, 'é igual a', resultado)
