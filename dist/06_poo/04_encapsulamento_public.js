"use strict";
class UsuarioPublic {
    nome;
    email;
    constructor(nome, email) {
        this.nome = nome;
        this.email = email;
    }
}
class AdminPublic extends UsuarioPublic {
    cargo;
    nivelAcesso;
    constructor(nome, email, cargo, nivelAcesso) {
        super(nome, email);
        this.cargo = cargo;
        this.nivelAcesso = nivelAcesso;
    }
    mudarCargo(novocargo) {
        this.cargo = novocargo;
        console.log(`O cargo do administrador ${this.nome} foi alterado para ${this.cargo}.`);
    }
}
const admin01 = new AdminPublic("Romulo", "renato@smartts.com", "Gerente", 10);
admin01.mudarCargo("Dev Front-End Pleno");
