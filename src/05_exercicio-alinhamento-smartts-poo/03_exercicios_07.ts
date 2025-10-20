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
  // Adicionei método para depositar
  // Passo um param valor de tipo number
  // Uso void pois a função não tem return, pois só usa um console.log
  depositar(valor: number): void {
    // Incremento o saldo com o valor do deposito
    this.saldo += valor;
    //Exibo o saldo atual
    console.log(`Depositado ${valor} reais na conta de ${this.titular}`);
  }
}