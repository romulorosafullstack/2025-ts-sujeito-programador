"use strict";
class Loja1 {
    nome;
    categoria;
    constructor(nome, categoria) {
        this.nome = nome;
        this.categoria = categoria;
    }
    criarLoja() {
        console.log(`Nome: ${this.nome} | Categoria: ${this.categoria}`);
        console.log("-----------------------------------");
    }
}
const loja1a = new Loja1("Magazine Luiza", "E-commerce");
loja1a.criarLoja();
