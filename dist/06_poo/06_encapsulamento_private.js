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
    solicitarLimite(estaAutenticado, quantidade) {
        if (estaAutenticado) {
            this.aumentarLimite(quantidade);
        }
        else {
            return false;
        }
    }
}
const correntista01 = new ContaPrivate();
correntista01.solicitarLimite(true, 500);
console.log(correntista01);
