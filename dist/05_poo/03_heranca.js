"use strict";
class Usuario {
    nome;
    email;
    constructor(nome, email) {
        this.nome = nome;
        this.email = email;
    }
}
class Admin extends Usuario {
    cargo;
    nivelAcesso;
    constructor(nome, email, cargo, nivelAcesso) {
        super(nome, email);
        this.cargo = cargo;
        this.nivelAcesso = nivelAcesso;
    }
}
const admin1 = new Admin("Romulo", "romulo@dev.com", "Front-End", 4);
const admin2 = new Admin("Leonardo", "leo@dev.com", "Front-End", 3);
const admin3 = new Admin("Flavio", "flavio@dev.com", "Back-End", 3);
const admin4 = new Admin("Leandro", "leandro@dev.com", "Tech Lead", 2);
const admin5 = new Admin("Ricardo", "ticardo@dev.com", "Diretor", 1);
console.log(admin1);
console.log(admin2);
function mostrarAdmin(admin) {
    console.log("---------------------------");
    console.log(`Nome: ${admin.nome}`);
    console.log(`Email: ${admin.email}`);
    console.log(`Cargo: ${admin.cargo}`);
    console.log(`Nível de Acesso: ${admin.nivelAcesso}\n`);
}
mostrarAdmin(admin3);
const admins = [admin1, admin2, admin3, admin4, admin5];
function mostrarTodosAdmins(admins) {
    admins.forEach(admin => mostrarAdmin(admin));
}
mostrarTodosAdmins(admins);
