class Conta{
  titular: string;
  cpf: string;
  saldo: number;

  // Cria um construtor para inicializar as propriedades
  constructor(titular: string, cpf: string, saldoInicial: number){
    this.titular = titular;
    this.cpf = cpf;
    this.saldo = saldoInicial;
  }

  // Adicionei método para depositar
  // Passo um param valor de tipo number
  // Uso void pois a função não tem return, pois só usa um console.log
  depositar(valor: number): void {
    // Incremento o saldo com o valor do deposito
    this.saldo += valor;
    //Exibo o saldo atual
    console.log(`DEPÓSITO: R$ ${valor.toFixed(2)}`);
  }
  
  // Adicionei método para sacar
  // Passo um param valor de tipo number
  // Uso void pois a função não tem return, pois só usa um console.log
  sacar(valor: number): void {
    console.log(`TITULAR: ${this.titular}`);
    // Verifico se o saldo é maior ou igual ao valor do saque
    if (this.saldo >= valor) {
      // Decremento o valor do saque do saldo atual
      this.saldo -= valor;
      // Exibo uma mensagem confirmando o saque
      console.log(`SAQUE AUTORIZADO.\nVALOR: R$ ${valor.toFixed(2)}`);
    } else {
      // Exibo uma mensagem negando o saque por saldo insuficiente
      console.log(`🚫 SAQUE NÃO FOI AUTORIZADO.\nSALDO INSUFICIENTE.`);
    }
  }

  // Adicionei método verSaldo
  // Uso void pois a função não tem return, pois só usa um console.log
  verSaldo(): void {
    console.log(`SALDO ATUAL DA CONTA: R$ ${this.saldo}`);
  }
}

// Crio a subclasse (ContaCorrente) que herda da classe Conta
class ContaCorrente extends Conta {
  numeroContaCorrente: string;
  // Crio o construtor da subclasse (ContaCorrente) passando os primeiro os params da clase pai/superclasse e depois da classe filha/subclasse
  constructor(titular: string, cpf: string, saldoInicial: number, numeroContaCorrente: string) {
    // Chamo o construtor da superclasse (Conta) passando os params
    super(titular, cpf, saldoInicial);
    this.numeroContaCorrente = numeroContaCorrente;
  }
}

// Crio a subclasse (ContaPoupança) que herda da classe Conta
class ContaPoupanca extends Conta {
  numeroContaPoupanca: string;
  // Crio o construtor da subclasse (ContaCorrente) passando os primeiro os params da clase pai/superclasse e depois da classe filha/subclasse
  constructor(titular: string, cpf: string, saldoInicial: number, numeroContaPoupanca: string) {
    // Chamo o construtor da superclasse (Conta) passando os params
    super(titular, cpf, saldoInicial);
    this.numeroContaPoupanca = numeroContaPoupanca;
  }
}