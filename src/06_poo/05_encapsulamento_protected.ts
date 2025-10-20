// ENCAPSULAMENTO PROTECTED
//  - Evita que os dados sejam alterados de forma indesejada.
//  - Atributos e/ou métodos podem ser acessados e modificados apenas dentro da própria classe e classes filhas.

//Declaro uma classe pai
class UsuarioProtected  {
  //Atributos da classe e seus tipos
  protected id: number; // Pode ser chamada na classe pai (UsuarioProtected) e classes filhas (AdminProtected)
  nome: string;
  email: string;

  // Método CONSTRUTOR
  constructor(id: number, nome: string, email: string) {
    // Os valores recebidos na invocação do construtor são atribuidos aos atributos da classe
    this.id = id;
    this.nome = nome;
    this.email = email;
  }

  verID(): void {
    // Método específico da classe filha
    console.log(`O ID do administrador ${this.nome} é ${this.id}.`);
  }
}


// Declaro uma classe filha (Admin) que herda os atributos e métodos do pai (Usuario)
class AdminProtected extends UsuarioProtected {
  //Atributos especificos da classe filha e seus tipos
  cargo: string;
  nivelAcesso: number;

  // Método construtor da classe filha
  // Passo primeiro os argumentos e tipos da classe pai e depois da filha
  constructor(id: number, nome: string, email: string, cargo: string, nivelAcesso: number) {
    // Chamo primeiro o construtor da classe pai para inicializar os seus atributos
    super(id, nome, email);
    // Depois passo os valores aos atributos da classe filha
    this.cargo = cargo;
    this.nivelAcesso = nivelAcesso;
  }

  // Método específico da classe filha
  protected mudarCargo(novocargo: string): void {
    // Altero o valor do atributo cargo da classe filha
    this.cargo = novocargo; 
    // Atualizo o console para mostrar a alteração do cargo
    console.log(`O cargo do administrador ${this.nome} foi alterado para ${this.cargo}.`);
  }
}


// Instancio um objeto da classe AdminPublic
const usuarioProtected01 = new UsuarioProtected(456, "Guilherme", "guilherme@smartts.com");
const adminProtected01 = new AdminProtected(123, "Romulo", "romulo@smartts.com", "Gerente", 10);

// Chamo o método mudarCargo() da classe mãe
usuarioProtected01.verID()

// Chamo o método mudarCargo() da classe filha
adminProtected01.verID();