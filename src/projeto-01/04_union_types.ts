// TIPO UNION TYPES

// Podemos definir que uma variável pode ter um valor de um ou ( | ) mais tipos.
let userId: number | string;
userId = 123;
console.log(userId, typeof userId);

userId = "Romulo";
console.log(userId, typeof userId);


// Não é possível atribuir um valor de um tipo diferente ao tipo union.
userId = true;
console.log(userId, typeof userId);