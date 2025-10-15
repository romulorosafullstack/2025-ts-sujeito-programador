"use strict";
const exibirSeparador5 = () => {
    console.log("\n---------------------------\n");
};
const pularLinha5 = () => {
    console.log("\n");
};
const funcionario1 = {
    nome: "Romulo",
    email: "romulo@teste.com",
    status: true,
};
console.log("\nFUNCIONÁRIO 1 - EXIBINDO TODO OBJETO:");
console.log(funcionario1);
exibirSeparador5();
console.log("\nFUNCIONÁRIO 1 - PERCORRENDO OBJETO COM MAP:");
Object.entries(funcionario1).map(([key, value]) => {
    console.log(`${key}: ${value}`);
});
console.log("\nFUNCIONÁRIO 1 - PERCORRENDO OBJETO com FOROF:");
for (const [key, value] of Object.entries(funcionario1)) {
    console.log(`${key}: ${value}`);
}
exibirSeparador5();
const funcionarioGeral = {
    nome: "",
    email: "",
    status: true,
};
const mostrarCadastro = (funcionarioGeral) => {
    Object.entries(funcionarioGeral).map(([key, value]) => {
        console.log(`${key}: ${value}`);
    });
    console.log("-----------------------\n");
};
mostrarCadastro({
    nome: "Leonardo",
    email: "leo@ciriaco.com",
    status: false,
});
mostrarCadastro({
    nome: "Flavio",
    email: "flavio@souza.com",
    status: true
});
mostrarCadastro({
    nome: "Leandro",
    status: true
});
function novoFuncionario({ nome, email, status }) {
    console.log(`NOVO FUNCIONÁRIO: ${nome}\nE-MAIL: ${email}\nSTATUS: ${status}`);
}
novoFuncionario({
    nome: "Gabriel",
    email: "gabriel@souza.com",
    status: true
});
