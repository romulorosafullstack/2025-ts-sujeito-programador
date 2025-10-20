
// Declarei um type alias pra usuario não fugir desses dois valores
type tipoConta = "Conta Corrente" | "Conta Poupança";

// Declarei a classe-mãe Conta
class Conta{
  // Declarei as props e seus tipos
  titular: string;
  cpf: string;
  tipoConta: tipoConta;
  saldo: number;

  // Criei um construtor para inicializar as propriedades
  constructor(titular: string, cpf: string, tipoConta: tipoConta, saldoInicial: number){
    this.titular = titular;
    this.cpf = cpf;
    this.tipoConta = tipoConta;
    this.saldo = saldoInicial;
  }

  // Adicionei método para depositar
  // Passei um param valor de tipo number
  // Usei void pois a função não tem return, pois só usa um console.log
  depositar(valor: number): void {
    // Incrementei o saldo com o valor do deposito
    this.saldo += valor;
    //Exibi o saldo atual
    console.log(`DEPÓSITO: R$ ${valor.toFixed(2)}`);
    console.log(`SALDO ATUAL DA CONTA: R$ ${this.saldo.toFixed(2)}\n`);
  }
  
  // Adicionei método para sacar
  // Passei um param valor de tipo number
  // Usei void pois a função não tem return, pois só usa um console.log
  sacar(valor: number): void {
    // Verifiquei se o saldo é maior ou igual ao valor do saque
    if (this.saldo >= valor) {
      // Decrementei o valor do saque do saldo atual
      this.saldo -= valor;
      // Exibi uma mensagem confirmando o saque
      console.log(`SAQUE AUTORIZADO.\nVALOR: R$ ${valor.toFixed(2)}`);
      console.log(`🟢 SALDO ATUAL DA CONTA: R$ ${this.saldo.toFixed(2)}\n`);
    } else {
      // Exibi uma mensagem negando o saque por saldo insuficiente
      console.log(`🚫 SAQUE NÃO FOI AUTORIZADO.\nSALDO INSUFICIENTE.`);
      console.log(`SALDO ATUAL DA CONTA: R$ ${this.saldo.toFixed(2)}\n`);
    }
  }

  // Adicionei método verSaldo
  // Usei void pois a função não tem return, pois só usa um console.log
  verSaldo(): void {
    console.log(`TITULAR: ${this.titular}`);
    console.log(`TIPO DA CONTA: ${this.tipoConta}`);
    console.log(`CPF: ${this.cpf}`);
    console.log(`SALDO ATUAL DA CONTA: R$ ${this.saldo.toFixed(2)}`);
    console.log(`===============================\n`);
  }
}

// Criei a subclasse/classe filha (ContaCorrente) que herda da classe Conta
class ContaCorrente extends Conta {
  numeroContaCorrente: string;
  // Criei o construtor da subclasse (ContaCorrente) passando os primeiro os params da clase pai/superclasse e depois da classe filha/subclasse
  constructor(titular: string, cpf: string, tipoConta: tipoConta, saldoInicial: number, numeroContaCorrente: string) {
    // Chamei o construtor da superclasse (Conta) passando os params
    super(titular, cpf, tipoConta, saldoInicial);
    this.numeroContaCorrente = numeroContaCorrente;
  }
}

// Criei a subclasse/classe filha (ContaPoupança) que herda da classe Conta
class ContaPoupanca extends Conta {
  numeroContaPoupanca: string;
  // Criei o construtor da subclasse (ContaCorrente) passando os primeiro os params da clase pai/superclasse e depois da classe filha/subclasse
  constructor(titular: string, cpf: string, tipoConta: tipoConta, saldoInicial: number, numeroContaPoupanca: string) {
    // Chamei o construtor da superclasse (Conta) passando os params
    super(titular, cpf, tipoConta, saldoInicial);
    this.numeroContaPoupanca = numeroContaPoupanca;
  }
}

// Criei uma instância da classe ContaCorrente
const contaCorrente = new ContaCorrente("João", "123.456.789-00", "Conta Corrente", 1000, "123456");

// Criei uma instância da classe ContaPoupanca
const contaPoupanca = new ContaPoupanca("Maria", "987.654.321-00", "Conta Poupança", 500, "654321");

// Chamei os métodos da instância de Conta Corrente
contaCorrente.verSaldo();
contaCorrente.depositar(500);
contaCorrente.sacar(200);
contaCorrente.verSaldo();

// Chamei os métodos da instância de Conta Poupança
contaPoupanca.verSaldo();
contaPoupanca.depositar(300);
contaPoupanca.sacar(100);
contaPoupanca.verSaldo();
