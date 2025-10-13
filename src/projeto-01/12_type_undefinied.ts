// TYPE UNDEFINIED
// Usar pra definir que a variável está vazia, mas que depois pode receber qualquer tipo de valor
// Útil quando não se sabe o tipo de dado que a variável vai receber
// Não é recomendado quando se sabe o tipo de dado que a variável vai receber
// Uma das vantagens do TS é a forte tipagem e no caso o undefined atua na contra-mão disso.
// Como tipo é raramente usado.

// Declarar uma variável sem definir tipo e nem atribuir valor inicial
let nome10;
// Nativamente seu tipo e valor inicial são undefined
console.log('nome10:', nome10, typeof nome10);

// Declarar uma variável e definindo seu tipo como undefinied sem atribuir diretamenete um valor inicial
let nome20: undefined = undefined;
console.log('nome20:', nome20, typeof nome20);

// Declarar uma variável e definindo seu tipo como undefinied
let nome30: undefined;
// Atribuir o valor undefinied a variável
nome30 = undefined;
console.log('nome30:', nome30, typeof nome30);

// Erro de tipo ao declarar uma variável, definir seu tipo como undefinied e atribir um valor diferente de undefinied
let nome40: undefined = "casa";
console.log('nome40:', nome40, typeof nome40);

// Ao declarar uma variável e definir seu tipo como undefinied
let nome50: undefined;
// Erro ao tentar atribuir qualquer outro valor diferente de undefinied
nome50 = "Lebron James";
console.log('nome50:', nome50, typeof nome50);
