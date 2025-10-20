// ENCAPSULAMENTO
// - Uma das principais características da orientação a objetos.
// - Técnica de programação que permite controlar o acesso a dados e métodos de uma classe.
// - Ao encapsular os dados, os métodos podem ser modificados sem afetar o funcionamento da classe.
// - O encapsulamento ajuda a manter a integridade dos dados e a evitar o uso de dados indesejados.

// - 5 MODIFICADORES/TIPOS DE ENCAPSULAMENTO:
// - public: Sendo Default, não precisa ser declarado. Pode ser acessado e modificaddo de qualquer lugar do código, pois todos tem acesso.
// - private: Pode ser acessado e modificado apenas dentro da própria classe na qual foi criado.
// - protected: Pode ser acessado e modificado dentro da própria classe e classes filhas.
// - protected (readonly): Pode ser acessado dentro da própria classe e classes filhas, mas não pode ser modificado.
// - internal: Pode ser acessado dentro do mesmo assembly (projeto).

//Declaro uma classe pai
class UsuarioPublic{
  //Atributos da classe e seus tipos
  nome: string;
  email: string;

  // Método CONSTRUTOR
  constructor(nome: string, email: string) {
    // Os valores recebidos na invocação do construtor são atribuidos aos atributos da classe
    this.nome = nome;
    this.email = email;
  }
}


// Declaro uma classe filha (Admin) que herda os atributos e métodos do pai (Usuario)
class AdminPublic extends UsuarioPublic {
  //Atributos especificos da classe filha e seus tipos
  cargo: string;
  nivelAcesso: number;

  // Método construtor da classe filha
  // Passo primeiro os argumentos e tipos da classe pai e depois da filha
  constructor(nome: string, email: string, cargo: string, nivelAcesso: number) {
    // Chamo primeiro o construtor da classe pai para inicializar os seus atributos
    super(nome, email);
    // Depois passo os valores aos atributos da classe filha
    this.cargo = cargo;
    this.nivelAcesso = nivelAcesso;
  }

  mudarCargo(novocargo:string): void {
    // Método específico da classe filha
    this.cargo = novocargo; // Altero o valor do atributo cargo da classe filha
    // Atualizo o console para mostrar a alteração do cargo
    console.log(`O cargo do administrador ${this.nome} foi alterado para ${this.cargo}.`);
  }
}


// Instancio um objeto da classe AdminPublic
const admin01 = new AdminPublic("Romulo", "renato@smartts.com", "Gerente", 10);

// Chamo o método mudarCargo() da classe filha
admin01.mudarCargo("Dev Front-End Pleno");

