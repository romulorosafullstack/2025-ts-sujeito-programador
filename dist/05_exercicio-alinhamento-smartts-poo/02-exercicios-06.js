"use strict";
class Animal {
    nome;
    som;
    constructor(nome) {
        this.nome = nome;
        this.som = 'Som do animal';
    }
    falar() {
        console.log(this.som);
    }
}
class Cachorro extends Animal {
    constructor(nome) {
        super(nome);
        this.som = 'Au Au';
    }
}
class Gato extends Animal {
    constructor(nome) {
        super(nome);
        this.som = 'Miau';
    }
}
const cachorro = new Cachorro('Rex');
const gato = new Gato('Tom');
cachorro.falar();
gato.falar();
