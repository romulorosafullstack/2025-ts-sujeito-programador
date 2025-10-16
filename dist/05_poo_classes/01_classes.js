"use strict";
class Loja {
    nome;
    categoria;
    constructor(nome, categoria) {
        this.nome = nome;
        this.categoria = categoria;
        console.log(`Loja criada: ${this.nome}`);
    }
}
