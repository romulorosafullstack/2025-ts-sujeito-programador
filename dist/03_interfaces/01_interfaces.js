"use strict";
const exibirSeparador4 = () => {
    console.log("\n---------------------------\n");
};
const pularLinha4 = () => {
    console.log("\n");
};
let empresa1 = {
    nome: 'Smartts Utilities',
    endereco: 'Rua ABC, 123',
    status: true,
};
pularLinha4();
console.log("EMPRESA 1: ");
console.log(empresa1);
exibirSeparador4();
const novaEmpresa = ({ nome, endereco, status }) => {
    console.log(`EMPRESA: ${nome}`);
    console.log(`ENDEREÇO: ${endereco}`);
    console.log(`STATUS: ${status}`);
};
novaEmpresa({
    nome: 'Rosadev',
    endereco: 'Rua XYZ, 456',
    status: false,
});
