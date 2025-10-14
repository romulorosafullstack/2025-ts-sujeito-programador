// ARRAYS
// Estrutura de dados que armazena valores do mesmo tipo.
// Podem ser usados para armazenar dados relacionados (ex: nomes, idades, endereços)
// Podem ser inicializados com valores pré-definidos ou vazios.
// Podem ser de qualquer tamanho e modificados após sua criação.

// ELEMENTOS DO ARRAY
// Podem ser acessados usando os índices (posições) que começam em 0.

// FORMAS DE DECLARAR OS ARRAYS
// ARRAY DE STRINGS  - string[] ou Array<string>
// ARRAY DE NUMEROS  - number[] ou Array<number>
// ARRAY DE BOOLEANS - boolean[] ou Array<boolean>
// ARRAY DE OBJETOS  - object[] ou Array<object>
// ARRAY DE FUNÇÕES  - Function[] ou Array<Function>
// ARRAY DE TIPOS UNION - (string | number | boolean)[] ou Array<(string | number | boolean)>


let numeros1: number[];
numeros1 = [1, 2, 3, 4, 5];

let numeros2: Array<number>;
numeros2 = [6, 7, 8, 9, 10];

console.log("Numeros1:", numeros1);
console.log("Numeros2:", numeros2);

let letras1: string[];
let letras2: Array<string>;

letras1 = ['a', 'b', 'c', 'd', 'e'];
letras2 = ['f', 'g', 'h', 'i', 'j'];

console.log("Letras1:", letras1);
console.log("Letras2:", letras2);

let pessoa1: (string | number)[];
let pessoa2: Array<(string | number)>;

pessoa1 = ['Romulo', 40];
pessoa2 = ['Guilherme', 30];

console.log("Pessoa1:", pessoa1);
console.log("Pessoa2:", pessoa2);

let jogador1: (string | number | boolean)[];
let jogador2: Array<(string | number | boolean)>;

jogador1 = ['Lebron', 24, true];
jogador2 = ['Jordan', 23, false];

console.log("Jogador1:", jogador1);
console.log("Jogador2:", jogador2);
