// TIPO BOOLEANO
// Nativamente, boolean possui dois valores: true ou false.
let estaAutenticado: boolean = true;
console.log(estaAutenticado);

// Ao converter outro tipo de dado para boolean qualquer valor que for diferente de 0, string vazia ou undefined será considerado true, do contrário false.
let statusUsuario;
let codeStatus: number = 0;
statusUsuario = Boolean(codeStatus);
console.log(statusUsuario);
