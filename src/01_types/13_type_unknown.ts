// TYPE UNKNOWN
// Usar pra definir quando não se sabe o tipo de valor, mas que pode receber qualquer um.
// Não é recomendado quando se sabe o tipo de dado que a variável vai receber.
// Uma das vantagens do TS é a forte tipagem e no caso o unknown atua na contra-mão disso.
// Analisar a aplicação. Muitas vezes o any se aplica melhor.

// Declarar uma variável definindo tipo e sem atribuir valor inicial
let idade: unknown;
// Atribuir a variável um valor de qualquer tipo
idade = true;
idade = 30.0;

// Numa variável de tipo unknown não é possível usar métodos ou funções que esperam um número, apesar da última atribuição ser um número.
console.log(idade.toFixed(2));

// Numa variável de outro tipo não é possível atribuir como valor uma variável de tipo unknown.
let perfil1: string = idade

// Exceto uma variável de tipo unknown ou any.
let perfil2: unknown = idade;
let perfil3: any = idade;