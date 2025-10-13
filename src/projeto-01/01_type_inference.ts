// TIPE INFERENCE
// TS atriubui dinamicamente o tipo de uma variável baseado no seu valor inicial.

// String
let linguagem = 'TypeScript';
console.log(`linguagem: ${linguagem} - Tipo:`, typeof linguagem);

// Number
let camisa = 10;
console.log(`camisa: ${camisa} - Tipo:`, typeof camisa)

// Boolean
let statusUsuario1 = true;
console.log(`statusUsuario1: ${statusUsuario1} - Tipo:`, typeof statusUsuario1);

let statusUsuario2 = false;
console.log(`statusUsuario2: ${statusUsuario2} - Tipo:`, typeof statusUsuario2);

// Usando o operador not pra negar/inverter um valor booleano
let statusUsuario3 = !true;
console.log(`statusUsuario3: ${statusUsuario3} - Tipo:`, typeof statusUsuario3);

let statusUsuario4 = !false;
console.log(`statusUsuario4: ${statusUsuario4} - Tipo:`, typeof statusUsuario4);

// Usando 2x o operador not pra negar/inverter um valor booleano já negado/invertido
// Retorno a um valor inical do booleano
// Má prática por causar bug. Se confunde com o operador &&
let statusUsuario5 = !!true;
console.log(`statusUsuario5: ${statusUsuario5} - Tipo:`, typeof statusUsuario5);

let statusUsuario6 = !!false;
console.log(`statusUsuario6: ${statusUsuario6} - Tipo:`, typeof statusUsuario6);

// Object com array de tipos iguais
let nomeCompleto = ['Romulo', 'Rosa'];
console.log(`nomeCompleto: ${nomeCompleto} - Tipo:`, typeof nomeCompleto);

// Object com Array de tipos diferentes
let tecnologias = ['PHP', 'React JS', 2025];
console.log(`tecnologias: ${tecnologias} - Tipo:`, typeof tecnologias);