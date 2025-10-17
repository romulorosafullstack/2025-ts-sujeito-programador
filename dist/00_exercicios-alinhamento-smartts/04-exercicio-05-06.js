"use strict";
const produto1 = {
    nome: 'Camiseta',
    preco: 50.00,
    quantidade: 5
};
const produto2 = {
    nome: 'Calça',
    preco: 100.00,
    quantidade: 3
};
const produto3 = {
    nome: 'Mochila',
    preco: 150.00,
    quantidade: 1
};
const produtos = [produto1, produto2, produto3];
let valorTotal = 0;
produtos.map((produto) => {
    const somaItems = produto.preco * produto.quantidade;
    valorTotal += somaItems;
});
console.log(`Total de vendas: R$ ${valorTotal.toFixed(2)}`);
