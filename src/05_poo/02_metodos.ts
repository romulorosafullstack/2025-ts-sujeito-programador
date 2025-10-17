// MÉTODOS - Ações/Funções/Comportamentos
// Ações que um objeto pode realizar
// São chamados usando o operador '.'
// São chamados usando o operador '()'


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
}

// Instancio a classe Loja1 e passo valores aos seus atributos
const loja1a = new Loja1("Magazine Luiza", "E-commerce");

// Chamo o método criarLoja() do objeto loja1a
loja1a.criarLoja();



