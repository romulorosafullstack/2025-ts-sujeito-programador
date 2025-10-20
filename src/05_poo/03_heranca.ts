// HERANÇA
// Classe Pai - Tem seus atributos e/ou métosdos
// Classe Filha - Herda todos os atributos e/ou métodos do Pai, além de ter seus próprios atributos e/ou métodos


//Declaro uma classe pai
class Usuario{
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
class Admin extends Usuario{
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
}

// Instancio objetos da classe Admin
const admin1 = new Admin("Romulo", "romulo@dev.com", "Front-End", 4);
const admin2 = new Admin("Leonardo", "leo@dev.com", "Front-End", 3);
const admin3 = new Admin("Flavio", "flavio@dev.com", "Back-End", 3);
const admin4 = new Admin("Leandro", "leandro@dev.com", "Tech Lead", 2);
const admin5 = new Admin("Ricardo", "ticardo@dev.com", "Diretor", 1);

// Imprimo os dados dos administradores
console.log(admin1);
console.log(admin2);

// Função para mostrar os dados de um administrador
function mostrarAdmin(admin: Admin): void {
  console.log("---------------------------");
  console.log(`Nome: ${admin.nome}`);
  console.log(`Email: ${admin.email}`);
  console.log(`Cargo: ${admin.cargo}`);
  console.log(`Nível de Acesso: ${admin.nivelAcesso}\n`);
}

mostrarAdmin(admin3);


// Crio um array com os administradores
const admins: Admin[] = [admin1, admin2, admin3, admin4, admin5];

// Crio uma função pra exibir cada dado de cada administrador do array
function mostrarTodosAdmins(admins: Admin[]): void {
  admins.forEach(admin => mostrarAdmin(admin));
}

mostrarTodosAdmins(admins);
