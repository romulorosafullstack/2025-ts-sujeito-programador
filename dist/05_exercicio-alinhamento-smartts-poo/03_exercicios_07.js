"use strict";
class Conta {
    titular;
    cpf;
    saldo;
    constructor(titular, cpf, saldoInicial) {
        this.titular = titular;
        this.cpf = cpf;
        this.saldo = saldoInicial;
    }
    depositar(valor) {
        this.saldo += valor;
        console.log(`DEPÓSITO: R$ ${valor.toFixed(2)}`);
    }
    sacar(valor) {
        console.log(`TITULAR: ${this.titular}`);
        if (this.saldo >= valor) {
            this.saldo -= valor;
            console.log(`SAQUE AUTORIZADO.\nVALOR: R$ ${valor.toFixed(2)}`);
        }
        else {
            console.log(`🚫 SAQUE NÃO FOI AUTORIZADO.\nSALDO INSUFICIENTE.`);
        }
    }
    verSaldo() {
        console.log(`SALDO ATUAL DA CONTA: R$ ${this.saldo}`);
    }
}
class ContaCorrente extends Conta {
    numeroContaCorrente;
    constructor(titular, cpf, saldoInicial, numeroContaCorrente) {
        super(titular, cpf, saldoInicial);
        this.numeroContaCorrente = numeroContaCorrente;
    }
}
class ContaPoupanca extends Conta {
    numeroContaPoupanca;
    constructor(titular, cpf, saldoInicial, numeroContaPoupanca) {
        super(titular, cpf, saldoInicial);
        this.numeroContaPoupanca = numeroContaPoupanca;
    }
}
