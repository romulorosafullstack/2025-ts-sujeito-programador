"use strict";
class Conta {
    titular;
    saldo;
    constructor(titular, saldoInicial) {
        this.titular = titular;
        this.saldo = saldoInicial;
    }
}
class ContaCorrente extends Conta {
    cpf;
    constructor(titular, saldoInicial, cpf) {
        super(titular, saldoInicial);
        this.cpf = cpf;
    }
    depositar(valor) {
        this.saldo += valor;
        console.log(`Depositado ${valor} reais na conta de ${this.titular}`);
    }
    sacar(valor) {
        console.log(`TITULAR: ${this.titular}`);
        if (this.saldo >= valor) {
            this.saldo -= valor;
            console.log(`SAQUE AUTORIZADO.\nVALOR: R$ ${valor}`);
        }
        else {
            console.log(`SALDO INSUFICIENTE`);
        }
    }
    verSaldo() {
        console.log(`SALDO ATUAL DA CONTA: R$ ${this.saldo}`);
    }
}
