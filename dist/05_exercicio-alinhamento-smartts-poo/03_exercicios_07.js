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
    depositar(valor) {
        this.saldo += valor;
        console.log(`Depositado ${valor} reais na conta de ${this.titular}`);
    }
}
