"use strict";
class Jogo {
    _nome;
    _dificuldade;
    constructor(nome, dificuldade) {
        this._nome = nome;
        this._dificuldade = dificuldade;
    }
    get getNome() {
        console.log("=== MÉTODO GET ===");
        return `JOGO: ${this._nome}`;
    }
    set setNome(nomeNovo) {
        console.log("=== MÉTODO SET ===");
        this._nome = nomeNovo;
    }
}
const jogo1 = new Jogo('Super Mario', 2);
console.log(jogo1.getNome);
jogo1.setNome = 'Mario Kart';
console.log(jogo1.getNome);
