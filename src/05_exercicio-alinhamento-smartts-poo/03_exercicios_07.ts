class Conta{
  titular: string;
  saldo: number;

  // Cria um construtor para inicializar as propriedades
  constructor(titular: string, saldoInicial: number){
    this.titular = titular;
    this.saldo = saldoInicial;
  }
}

class ContaCorrente extends Conta {
  cpf: string;

  // Crio o construtor da subclasse (ContaCorrente) passando os primeiro os params da clase pai/superclasse e depois da classe filha/subclasse
  constructor(titular: string, saldoInicial: number, cpf: string) {
    // Chamo o construtor da superclasse (Conta) passando os params
    super(titular, saldoInicial);
    this.cpf = cpf;
  }

  // Adicionei método para depositar
  // Passo um param valor de tipo number
  // Uso void pois a função não tem return, pois só usa um console.log
  depositar(valor: number): void {
    // Incremento o saldo com o valor do deposito
    this.saldo += valor;
    //Exibo o saldo atual
    console.log(`Depositado ${valor} reais na conta de ${this.titular}`);
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
      console.log(`SAQUE AUTORIZADO.\nVALOR: R$ ${valor}`);
    } else {
      // Exibo uma mensagem negando o saque por saldo insuficiente
      console.log(`SALDO INSUFICIENTE`);
    }
  }

  // Adicionei método verSaldo
  // Uso void pois a função não tem return, pois só usa um console.log
  verSaldo(): void {
    console.log(`SALDO ATUAL DA CONTA: R$ ${this.saldo}`);
  }
}