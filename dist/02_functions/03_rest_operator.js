"use strict";
const mostrarNomes = (...nomes) => {
    console.log("QUANTIDADE DE NOMES:", nomes.length);
    nomes.map(nome => {
        console.log(nome);
    });
};
mostrarNomes("Romulo", "Leonardo", "Flavio", "Leandro");
function vendasBalanco(...vendas) {
    const vendasQuantidade = vendas.length;
    let vendasSoma = 0;
    vendas.map(venda => {
        vendasSoma += venda;
    });
    let vendasMedia = vendasSoma / vendasQuantidade;
    console.log("\n------------------------------");
    console.log("VENDAS");
    console.log("--------------------------------");
    console.log(`QUANTIDADE DE VENDAS: ${vendasQuantidade}`);
    vendas.map((venda, indice) => {
        console.log(`R$ ${venda.toFixed(2).replace(".", ",")} - VENDA ${indice + 1}`);
    });
    console.log(`R$ ${vendasSoma.toFixed(2).replace(".", ",")} - SOMATÓRIO`);
    console.log(`R$ ${vendasMedia.toFixed(2).replace(".", ",")} - MÉDIA`);
}
vendasBalanco(11, 20.40, 30.60);
