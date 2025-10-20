"use strict";
class ContaPrivate {
    limite = 450;
    aumentarLimite(quantidade) {
        if (quantidade < 1000) {
            this.limite = quantidade;
            console.log(`Limite aumentado para: R$ ${this.limite.toFixed(2).replace('.', ',')}`);
        }
        else {
            console.log('Aumento de limite não permitido');
        }
    }
    solicitarLimiteApp(estaAutenticado, quantidade) {
        if (estaAutenticado) {
            this.aumentarLimite(quantidade);
        }
        else {
            return false;
        }
    }
    solicitarLimite(quantidade) {
        return this.aumentarLimite(quantidade);
    }
}
const correntista01 = new ContaPrivate();
correntista01.solicitarLimiteApp(true, 500);
console.log(correntista01);
class BancoAfiliado extends ContaPrivate {
    limiteConta() {
        return this.solicitarLimite(900);
    }
}
const correntista02 = new BancoAfiliado();
console.log(correntista02);
