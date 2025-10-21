// MODIFICADOR READONLY
// Permite acessar o valor de um atributo, mas não permite alterar o valor após sua inicialização.
// O TS gera um erro de tipo se tentar fazer isso
// OBS.: Não é possível usar o modificador readonly em:
// - arrays ou objetos literais
// - funções que possuem retorno
// - funções que possuem parametros de entrada

// Crio uma classe
class Carro {
  // Atributo com o modificador readonlyDeclaro um atributo como readonly e inicializo o valor com "XYZ12345"
  readonly placa: string = "XYZ12345";
  marca: string;
  ano: number;
  modelo: string;
  cor: string;
  airbags: boolean;
  sinalizadorTraseira: boolean;


  // Crio o construtor da classe.
  // Não passo o valor que é readonly
  constructor(marca: string, ano: number, modelo: string, cor: string, airbags: boolean, sinalizadorTraseira: boolean) {
    this.marca = marca;
    this.ano = ano;
    this.modelo = modelo;
    this.cor = cor;
    this.airbags = airbags;
    this.sinalizadorTraseira = sinalizadorTraseira;
  }

  // Método que exibe a placa do carro
  mostrarPlaca(): void {
    console.log(`Placa: ${this.placa}`)
  }
}

// Instancio novos objetos do carro
const carro1 = new Carro("Volkswagen", 2020, "Gol", "Preto", true, true);
const carro2 = new Carro("Fiat", 2015, "Uno", "Vermelho", false, false);
const carro3 = new Carro("Ford", 2018, "Fusion", "Azul", true, true);

// Exibo as placas
// OBS.: Como a propriedade placa é readonly é possivel acessar o valor desse atributo, mas não é possível alterar o valor
carro1.mostrarPlaca();
carro2.mostrarPlaca();
carro3.mostrarPlaca();
