"use strict";
const exibirSeparador = () => console.log("\n-----------------------------------------\n");
const retornoApiVoid = (url) => {
    console.log(`\nRETORNO DA URL - VOID: ${url}`);
};
retornoApiVoid("https://www.smartts.com.br/");
exibirSeparador();
const retornoApiString = (url) => {
    return `RETORNO DA API - STRING: ${url}`;
};
const ApiString = retornoApiString("https://www.sujeitoprogramador.com.br/");
console.log(ApiString);
exibirSeparador();
