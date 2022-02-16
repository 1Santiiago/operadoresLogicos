// Operador Atirmético
let salario = 100;
console.log(salario * salario);
//operador de incremento e decremento
let idade = 10;
console.log(idade++);
console.log(idade);

//Operador de atribuição
let valorTecladoGamer = 100;
valorTecladoGamer += valorTecladoGamer; // mesma coisa que fazer - valorTecladoGamer = valorTecladoGamer + valorTecladoGamer
console.log(valorTecladoGamer);

//Operadores de igualdade
// -> Igualdade estrita
console.log(1 === 1); // compara valor e tipo
// -> igualdade Solta
console.log("1" == 1); // ignora tipo e compara apenas valor

//Operador ternário/ usado muito pra voce fazer comparaçoes  sem precisar estar usando if e if e if e if etc...

let pontos = 99.9;
let clienteTipo = pontos >= 100 ? "Premium" : "Comum";
console.log(clienteTipo);

//Operador logico
//Usados para tomar decisoes em condiçoes multiplas
//Operador logico e (&&), retorna true se os dois operando forem true;
console.log(true && true);

let maiorIdade = false;
let carteiraDeTrabalho = false;

let PodeAplicar = maiorIdade || carteiraDeTrabalho;

console.log(PodeAplicar);

//Operador logico OU (||), retorna true se algum operando for verdadeiro

console.log(PodeAplicar);

//Operador NOT (!) = negação

let candidatoRecusado = !PodeAplicar;
console.log(candidatoRecusado);
