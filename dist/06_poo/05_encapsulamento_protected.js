"use strict";
class UsuarioProtected {
    id;
    nome;
    email;
    constructor(id, nome, email) {
        this.id = id;
        this.nome = nome;
        this.email = email;
    }
    verID() {
        console.log(`O ID do administrador ${this.nome} é ${this.id}.`);
    }
}
class AdminProtected extends UsuarioProtected {
    cargo;
    nivelAcesso;
    constructor(id, nome, email, cargo, nivelAcesso) {
        super(id, nome, email);
        this.cargo = cargo;
        this.nivelAcesso = nivelAcesso;
    }
    mudarCargo(novocargo) {
        this.cargo = novocargo;
        console.log(`O cargo do administrador ${this.nome} foi alterado para ${this.cargo}.`);
    }
}
const usuarioProtected01 = new UsuarioProtected(456, "Guilherme", "guilherme@smartts.com");
const adminProtected01 = new AdminProtected(123, "Romulo", "romulo@smartts.com", "Gerente", 10);
usuarioProtected01.verID();
adminProtected01.verID();
