"use strict";
const exibirSeparador2 = () => {
    console.log("\n---------------------------\n");
};
const retornoApiVoid = (url) => {
    console.log(`\nRETORNO DA URL - VOID: ${url}`);
};
retornoApiVoid("https://www.smartts.com.br/");
exibirSeparador2();
const retornoApiString = (url) => {
    return `RETORNO DA API - STRING: ${url}`;
};
const ApiString = retornoApiString("https://www.sujeitoprogramador.com.br/");
console.log(ApiString);
exibirSeparador2();
const cadastroObrigatorio = (nome, email, senha) => {
    let data = { nome, email, senha };
    console.log(data);
};
cadastroObrigatorio("Romulo", "romulo@teste.com", "12345");
exibirSeparador2();
const cadastroOpcionais = (dia, mes, ano) => {
    let data = { dia, mes, ano };
    console.log(data);
};
cadastroOpcionais(2, 2);
exibirSeparador2();
const cadastroLoja = (nome, email, status = false) => {
    console.log(`NOME: ${nome} | STATUS: ${status}`);
    return status;
};
cadastroLoja("Romulo", "romulo@teste.com");
cadastroLoja("Guilherme", "guilherme@teste.com", true);
