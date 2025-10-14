// TIPO TUPLA
// Tipo presente só em TS. Não tem em JS.

// É um tipo de array no qual passamos elementos com tipos específicos.
let aluno1: [string, number];
// Para que o array seja atualizado precisa seguir um contrato/formato passado na sua declaração.
aluno1 = ['Romulo', 40];
console.log("Aluno 1:", aluno1)

let aluno2: [number, string];
aluno2 = [40, "Romulo"];
console.log("Aluno 2:",aluno2);

// Ao tentar atualizar o array, o TS verifica se o novo elemento segue o contrato/formato. 

// Se seguir, atualiza o array
let aluno3: [string, number, string[]];
aluno3 = ['Romulo', 40, ['Dev', 'DJ']];
console.log("Aluno 3:", aluno3);

// Se seguir, permite alterar o valor de um elemento já existente.
let aluno5: [string[], number, boolean];
aluno5 = [['Romulo', 'Rosa'], 40, true];
aluno5[0] = ['Guilherme', 'Rosa'];
console.log("Aluno 5:", aluno5);

// Se tentar alterar o tipo de dados, exibe um erro de tipo.
let aluno4: [string[], number, boolean];
aluno4 = [['Romulo','Rosa'], 40, 'dev'];
console.log("Aluno 4:", aluno4);

// Se tentar alterar o valor de um elemento que não existe, exibe um erro de indexação.
let aluno6: [string[], number, boolean];
aluno6 = [['Romulo', 'Rosa'], 40, true];
aluno6[3] = 'Em produção';
console.log("Aluno 6:", aluno6);

// Se tentar alterar o tipo de dados de um elemento que não existe, exibe um erro de tipo.}
let aluno7: [string[], number, boolean];
aluno7 = [['Romulo', 'Rosa'], 40, true];
aluno7[0] = 40;
console.log("Aluno 7:", aluno7);
