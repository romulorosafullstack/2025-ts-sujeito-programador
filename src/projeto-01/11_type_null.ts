// TYPE NULL
// Usar pra indicar uma variável que não possui um valor inicial definido.
// É um tipo primitivo que não pode ser atribuído a outro tipo.
// Não é possível atribuir um null a uma variável do tipo number, string ou boolean.
// Ao tentar atribuir um valor diferente de um dos tipos acima, TS gera um erro de tipo.

// Declarando uma variável do tipo string ou null já atribuindo o valor null diretamente
let dado1: string | null = null;
console.log('dado1:', dado1, typeof dado1);

// Declarando uma variável do tipo string ou null
let dado2: string | null;
// Atribuindo o valor null a variavel 
dado2 = null;
console.log('dado2:', dado2, typeof dado2);

// Ao declarar uma variável e definir seu tipo como null, erro ao atribuir diretamente qualquer valor diferente de null 
let dado3: null = 'Teste';

// Ao declarar uma variável e definir seu tipo como null
let dado4: null;
// Erros ao tentar atribuir valor diferente de null
dado4 = 10;




