// 1) Crie uma classe Pessoa com nome e idade
class PessoaPoo {

  // Declarei as propriedades e seus tipos
  nome: string;
  idade: number;

  // Declarei o construtor da classe passando params e seus tipos
  constructor(nome: string, idade: number) {
    // Inicializei as propriedades do objeto com os params passados no construtor
    this.nome = nome;
    this.idade = idade;
  }

  // 2) Adicione um método falar() que imprime uma mensagem com o nome. Usei um void porquwe não preciso retornar nada
  falar(): void {
    console.log(`Olá, meu nome é ${this.nome}`);
  }
}

// 3) Crie uma classe Funcionario que herda de Pessoa e adiciona cargo e salario.
class FuncionarioPoo extends PessoaPoo {
  // Declarei as propriedades e seus tipos
  cargo: string;
  salario: number;

  // Declarei o construtor da classe Funcionario passando params e seus tipos da classe PessoaPoo adicionando os params e tipos da classe Funcionario (precisa ser nessa ordem quando há herança)
  constructor(nome: string, idade: number, cargo: string, salario: number) {

    // Chamei o construtor da classe PessoaPoo passando os params
    super(nome, idade);

    // Inicializa as novas propriedades
    this.cargo = cargo;
    this.salario = salario;
  }

  //4) Adicione um método trabalhar().
  trabalhar(): void {
    console.log(`Trabalho como ${this.cargo} com salário de ${this.salario}`)
    console.log("---------------------------");;
  }
}

//Instanciei objetos da classe Funcionario
const funcionario_01 = new FuncionarioPoo("Leandro", 38, "Tech Lead", 200000);
const funcionario_02 = new FuncionarioPoo("Flavio", 35, "Dev Back-End Senior", 15000);
const funcionario_03 = new FuncionarioPoo("Leonardo", 22, "Dev Front-End Pleno", 10000);
const funcionario_04 = new FuncionarioPoo("Romulo", 40, "Dev Front-End Jr", 4000);

//Chamei os métodos de falar() e trabalhar() de cada objeto
funcionario_01.falar();
funcionario_01.trabalhar();

funcionario_02.falar();
funcionario_02.trabalhar();

funcionario_03.falar();
funcionario_03.trabalhar();

funcionario_04.falar();
funcionario_04.trabalhar();

