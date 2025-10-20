// ENCAPSULAMENTO PRIVATE
// - Evita que os dados sejam alterados de forma indesejada.
// - Atributos e/ou métodos podem ser acessados e modificados apenas dentro da sua própria classe.



//Declaro uma classe pai
class ContaPrivate {
  private limite: number = 450;

  private aumentarLimite(quantidade: number): void {
    if (quantidade < 1000) {
      this.limite = quantidade;
      console.log(`Limite aumentado para: R$ ${this.limite.toFixed(2).replace('.', ',')}`);
    } else {
      console.log('Aumento de limite não permitido');
    }
  }

  solicitarLimite(estaAutenticado: boolean, quantidade: number): void | boolean {
    if (estaAutenticado) {
      this.aumentarLimite(quantidade);
    } else {
      return false;
    }
  }
}

// Instanciando a classe pai
const correntista01 = new ContaPrivate();
correntista01.solicitarLimite(true, 500);

console.log(correntista01);

