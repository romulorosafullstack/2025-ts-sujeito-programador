"use strict";
function acessar(uuid, nome) {
    console.log("ACESSAR");
    console.log(`UUID: ${uuid}\nNOME: ${nome}`);
    console.log("---------------------------");
}
function logUsuario(uuid) {
    console.log("LOGAR USUÁRIO");
    console.log(`UUID: ${uuid}`);
    console.log("---------------------------");
}
acessar("123", "Romulo");
logUsuario(321);
function comprarItem(moeda) {
    console.log("COMPRAR");
    console.log(`MOEDA: ${moeda}`);
    console.log("---------------------------");
}
comprarItem("BRL");
