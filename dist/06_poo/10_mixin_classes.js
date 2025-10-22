import { applyMixins } from "./mixin/applyMixin";
class Veiculo {
    ligar() {
        console.log("Veículo ligado.");
    }
    desligar() {
        console.log("Veículo desligado.");
    }
}
class Descricao {
    descricao;
    constructor(descricao) {
        this.descricao = descricao;
    }
}
class CarroMixin {
    marca;
    constructor(marca) {
        this.marca = marca;
    }
}
applyMixins(CarroMixin, [Veiculo, Descricao]);
const gol = new CarroMixin("Volkswagen");
console.log(gol);
gol.ligar();
gol.descricao = "Carro 1.0";
console.log(gol);
