// MIXINGS
import { applyMixins } from "./mixin/applyMixin";


// Crio uma classe
class Veiculo {
  // Declaro métodos
  ligar(): void {
    console.log("Veículo ligado.");
  }

  desligar(): void {
    console.log("Veículo desligado.");
  }
}

// Crio outra classe que herda dos métodos da primeira
class Descricao{
  // Declaro um atributo
  descricao: string;
  // Crio um método construtor
  constructor(descricao: string){
    this.descricao = descricao;
  }
}

// Criou uma terceira classe
class CarroMixin{
  // Declaro um atributo
  marca: string;
  // Crio um método construtor
  constructor(marca: string){
    this.marca = marca;
  }
}

// Crio uma interface vom o mesmo nome da classe na qual será usada que define os métodos dos mixins
interface CarroMixin extends Veiculo, Descricao{ }

// Chamo a função importada aplicando os métodos dos mixins ao novo tipo de veículo
applyMixins(CarroMixin, [Veiculo, Descricao]);

// Instancio um novo carro passando o atributo marca
const gol = new CarroMixin("Volkswagen");
console.log(gol);

//Chammo atributos e métodos de veiculo e descrição
gol.ligar();
gol.descricao = "Carro 1.0";
console.log(gol)
