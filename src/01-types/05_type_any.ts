// TIPO ANY
// Permite atribuir qualquer tipo de valor a uma variável
// Pode ser útil quando não se sabe o tipo de dado que a variável vai receber
// O uso não é recomendado quando se sabe o tipo de dado que a variável vai receber
// Uma das vantagens do TS é a forte tipagem e no caso o any atua na contra-mão disso.

let precoProduto;

precoProduto = true;
precoProduto = 30.0;

let nota01: any;
let nota02: any;

nota01 = 20
nota02 = 30;

nota01='Teste';

console.log(precoProduto);
console.log(nota01 + nota02);

