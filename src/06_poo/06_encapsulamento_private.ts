// ENCAPSULAMENTO PRIVATE
// - Evita que os dados sejam alterados de forma indesejada.
// - Atributos e/ou métodos podem ser acessados e modificados apenas dentro da sua própria classe.


//Declaro uma classe
class ContaPrivate {
  // Declaro um atributo privado chamado limite com um valor padrão de 450.
  private limite: number = 450;

  // Declaro um método privado passando um atributo number sem return.
  private aumentarLimite(quantidade: number): void {
    if (quantidade < 1000) {
      this.limite = quantidade;
      console.log(`Limite aumentado para: R$ ${this.limite.toFixed(2).replace('.', ',')}`);
    } else {
      console.log('Aumento de limite não permitido');
    }
  }

  //Declaro um método public passando um atributo boolean ou number sem return.
  solicitarLimiteApp(estaAutenticado: boolean, quantidade: number): void | boolean {
    if (estaAutenticado) {
      this.aumentarLimite(quantidade);
    } else {
      return false;
    }
  }

  // Declaro um método protected sem passar nenhum atributo ou return.
  protected solicitarLimite(quantidade: number): void | boolean {
    return this.aumentarLimite(quantidade);
  }
}

// Instanciando a classe pai
const correntista01 = new ContaPrivate();
correntista01.solicitarLimiteApp(true, 500);
console.log(correntista01);

class BancoAfiliado extends ContaPrivate{
  limiteConta() {
    return this.solicitarLimite(900);
  }
}

const correntista02 = new BancoAfiliado();
console.log(correntista02);

