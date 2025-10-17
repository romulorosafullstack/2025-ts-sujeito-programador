"use strict";
const carrinho = {
    produtos: [],
    total: 0
};
const adicionarProduto = (produto) => {
    carrinho.produtos.push(produto);
    carrinho.total += produto.preco;
};
const removerProduto = (produto) => {
    const index = carrinho.produtos.findIndex(p => p.nome === produto.nome);
    if (index > -1) {
        carrinho.produtos.splice(index, 1);
        carrinho.total -= produto.preco;
    }
};
const meuProduto1 = {
    nome: 'Camiseta',
    preco: 50.00
};
const meuProduto2 = {
    nome: 'Calça',
    preco: 100.00
};
const meuProduto3 = {
    nome: 'Mochila',
    preco: 150.00
};
const mostrarProdutosCarrinho = (nome) => {
    console.log(`CARRINHO - ${nome}:`);
    console.log('===============================');
    carrinho.produtos.map((produto) => console.log(produto.nome, 'R$:', produto.preco.toFixed(2)));
    console.log('TOTAL DO CARRINHO: R$:', carrinho.total.toFixed(2));
    console.log('===============================\n');
};
adicionarProduto(meuProduto1);
adicionarProduto(meuProduto2);
adicionarProduto(meuProduto3);
mostrarProdutosCarrinho("Adicionar");
removerProduto(meuProduto3);
mostrarProdutosCarrinho("Remover");
adicionarProduto(meuProduto1);
adicionarProduto(meuProduto1);
adicionarProduto(meuProduto1);
mostrarProdutosCarrinho("Adicionar");
removerProduto(meuProduto1);
adicionarProduto(meuProduto3);
mostrarProdutosCarrinho("Final");
