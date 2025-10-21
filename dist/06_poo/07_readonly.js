"use strict";
class Carro {
    placa = "XYZ12345";
    marca;
    ano;
    modelo;
    cor;
    airbags;
    sinalizadorTraseira;
    constructor(marca, ano, modelo, cor, airbags, sinalizadorTraseira) {
        this.marca = marca;
        this.ano = ano;
        this.modelo = modelo;
        this.cor = cor;
        this.airbags = airbags;
        this.sinalizadorTraseira = sinalizadorTraseira;
    }
    mostrarPlaca() {
        console.log(`Placa: ${this.placa}`);
    }
}
const carro1 = new Carro("Volkswagen", 2020, "Gol", "Preto", true, true);
const carro2 = new Carro("Fiat", 2015, "Uno", "Vermelho", false, false);
const carro3 = new Carro("Ford", 2018, "Fusion", "Azul", true, true);
carro1.mostrarPlaca();
carro2.mostrarPlaca();
carro3.mostrarPlaca();
