"use strict";
class PessoaPoo {
    nome;
    idade;
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    falar() {
        console.log(`Olá, meu nome é ${this.nome}`);
    }
}
class FuncionarioPoo extends PessoaPoo {
    cargo;
    salario;
    constructor(nome, idade, cargo, salario) {
        super(nome, idade);
        this.cargo = cargo;
        this.salario = salario;
    }
    trabalhar() {
        console.log(`Trabalho como ${this.cargo} com salário de ${this.salario}`);
        console.log("---------------------------");
        ;
    }
}
const funcionario_01 = new FuncionarioPoo("Leandro", 38, "Tech Lead", 200000);
const funcionario_02 = new FuncionarioPoo("Flavio", 35, "Dev Back-End Senior", 15000);
const funcionario_03 = new FuncionarioPoo("Leonardo", 22, "Dev Front-End Pleno", 10000);
const funcionario_04 = new FuncionarioPoo("Romulo", 40, "Dev Front-End Jr", 4000);
funcionario_01.falar();
funcionario_01.trabalhar();
funcionario_02.falar();
funcionario_02.trabalhar();
funcionario_03.falar();
funcionario_03.trabalhar();
funcionario_04.falar();
funcionario_04.trabalhar();
