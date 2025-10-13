// TYPE ASSERTIONS
// Usar pra afirmar/forçar um tipo
// Tomar cuidado com o uso

let statusAtual: unknown = 1;

let mudarStatus: number = 0;

// Afirmar que StatusAtual é mesmo um número
mudarStatus = statusAtual as number;

//outra forma de fazer a mesma coisa
mudarStatus = <number>statusAtual;
console.log(mudarStatus); // 1

// Declarar uma variável do tipo unknow que recebe uma string
let query: unknown = 'pizza';

// Afirmar que query é mesmo uma string
let termoBusca1: string = query as string;
// outra forma de fazer a mesma coisa
termoBusca1 = <string>query;
console.log(termoBusca1); // pizza

// Se o tipo de afirmação não conferir com o valor, isso vai gerar um erro de tipo
let termoBusca2: string = query as number;