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
    emitirPedido(mesa, ...pedidos) {
        return `Pedido da Mesa: ${mesa}\nItens: ${pedidos.join(", ")}`;
    }
    alterarStatus(novoStatus) {
        if (novoStatus === "ativo") {
            console.log("Status: ativo");
        }
        else {
            console.log("Status: inativo");
        }
    }
}
const loja1a = new Loja1("Magazine Luiza", "E-commerce");
loja1a.criarLoja();
const retornoLoja = loja1a.emitirPedido(10, "Café", "Pizza", "Bebida");
console.log(retornoLoja);
loja1a.alterarStatus("inativo");
