"use strict";
class Loja {
    nome;
    categoria;
    constructor(nome, categoria) {
        this.nome = nome;
        this.categoria = categoria;
        console.log(`Loja criada: ${this.nome}`);
        console.log("-----------------------------------");
    }
}
const loja1 = new Loja("Magazine Luiza", "E-commerce");
const loja2 = new Loja("Mercado Livre", "E-commerce");
const loja3 = new Loja("Shopee", "E-commerce");
const loja4 = new Loja("McDonald's", "Lanches");
