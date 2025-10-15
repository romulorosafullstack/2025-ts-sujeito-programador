"use strict";
const exibirSeparador6 = () => {
    console.log("\n---------------------------\n");
};
const pularLinha6 = () => {
    console.log("\n");
};
function mostrarPromo(preco) {
    console.log("PROMOÇÃO DO CURSO");
    console.log(`DE: R$ ${preco.toFixed(2)}`);
    console.log(`POR R$ ${(preco - (preco * 0.2)).toFixed(2)}`);
}
const curso01 = {
    id: "0001",
    nome: "TyprScript",
    preco: 1200,
    promocao: (preco) => {
        console.log(`DE: R$ ${preco}`);
        console.log(`POR: R$ ${preco - (preco * 0.2)}`);
    }
};
console.log(curso01);
console.log(curso01.promocao(5000));
exibirSeparador6();
let somaNumeros = (valor1, valor2) => {
    const soma = valor1 + valor2;
    console.log(`${valor1} + ${valor2} = ${soma}`);
    return soma;
};
const resultado1 = somaNumeros(10, 20);
const resultado2 = somaNumeros(20, 20);
const resultado3 = somaNumeros(20, 30);
