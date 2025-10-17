// MÉTODOS - Ações/Funções/Comportamentos
// Ações que um objeto pode realizar
// São chamados usando o operador '.'
// São chamados usando o operador '()'

type Status = "ativo" | "inativo";

// Crio a Class
class Loja1 {
  // Declaro seus atributos
  nome: string;
  categoria: string;

  // MÉTODO CONSTRUTOR - É chamado quando um objeto que passa valores aos seus atributos
  constructor(nome: string, categoria: string) {
    this.nome = nome;
    this.categoria = categoria;
  }

  // MÉTODO - Ações que esse objeto pode realizar
  criarLoja(): void {
    console.log(`Nome: ${this.nome} | Categoria: ${this.categoria}`);
    console.log("-----------------------------------");
  }

  // OUTRO MÉTODO passando parametro e rest params
  emitirPedido(mesa: number, ...pedidos: string[]): string {
    return `Pedido da Mesa: ${mesa}\nItens: ${pedidos.join(", ")}`;
  }

  // OUTRO MÉTODO usando type alias
  alterarStatus(novoStatus: Status): void {
    if (novoStatus === "ativo") {
      console.log("Status: ativo");
    } else {
      console.log("Status: inativo");
    }
  }
}

// Instancio a classe Loja1 e passo valores aos seus atributos
const loja1a = new Loja1("Magazine Luiza", "E-commerce");

// Chamo o método criarLoja() do objeto loja1a
loja1a.criarLoja();

// Chamo o método emitirPedido() do objeto loja1a
const retornoLoja = loja1a.emitirPedido(10, "Café", "Pizza", "Bebida" );
console.log(retornoLoja);

// Chamo o método alterarStatus() do objeto loja1a
// Como uso type alias para definir o novoStatus, só posso usar como valor "ativo" ou "inativo"
loja1a.alterarStatus("inativo");





