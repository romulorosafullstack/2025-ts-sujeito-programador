"use strict";
class Conta {
    titular;
    cpf;
    tipoConta;
    saldo;
    constructor(titular, cpf, tipoConta, saldoInicial) {
        this.titular = titular;
        this.cpf = cpf;
        this.tipoConta = tipoConta;
        this.saldo = saldoInicial;
    }
    depositar(valor) {
        this.saldo += valor;
        console.log(`DEPÓSITO: R$ ${valor.toFixed(2)}`);
        console.log(`SALDO ATUAL DA CONTA: R$ ${this.saldo.toFixed(2)}\n`);
    }
    sacar(valor) {
        if (this.saldo >= valor) {
            this.saldo -= valor;
            console.log(`SAQUE AUTORIZADO.\nVALOR: R$ ${valor.toFixed(2)}`);
            console.log(`🟢 SALDO ATUAL DA CONTA: R$ ${this.saldo.toFixed(2)}\n`);
        }
        else {
            console.log(`🚫 SAQUE NÃO FOI AUTORIZADO.\nSALDO INSUFICIENTE.`);
            console.log(`SALDO ATUAL DA CONTA: R$ ${this.saldo.toFixed(2)}\n`);
        }
    }
    verSaldo() {
        console.log(`TITULAR: ${this.titular}`);
        console.log(`TIPO DA CONTA: ${this.tipoConta}`);
        console.log(`CPF: ${this.cpf}`);
        console.log(`SALDO ATUAL DA CONTA: R$ ${this.saldo.toFixed(2)}`);
        console.log(`===============================\n`);
    }
}
class ContaCorrente extends Conta {
    numeroContaCorrente;
    constructor(titular, cpf, tipoConta, saldoInicial, numeroContaCorrente) {
        super(titular, cpf, tipoConta, saldoInicial);
        this.numeroContaCorrente = numeroContaCorrente;
    }
}
class ContaPoupanca extends Conta {
    numeroContaPoupanca;
    constructor(titular, cpf, tipoConta, saldoInicial, numeroContaPoupanca) {
        super(titular, cpf, tipoConta, saldoInicial);
        this.numeroContaPoupanca = numeroContaPoupanca;
    }
}
const contaCorrente = new ContaCorrente("João", "123.456.789-00", "Conta Corrente", 1000, "123456");
const contaPoupanca = new ContaPoupanca("Maria", "987.654.321-00", "Conta Poupança", 500, "654321");
contaCorrente.verSaldo();
contaCorrente.depositar(500);
contaCorrente.sacar(200);
contaCorrente.verSaldo();
contaPoupanca.verSaldo();
contaPoupanca.depositar(300);
contaPoupanca.sacar(100);
contaPoupanca.verSaldo();
