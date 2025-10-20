// 1) Crie uma classe Animal
class Animal{
  som: string;

  constructor(public nome: string){
    this.som = 'Som do animal';
  }

  // 2) com método falar()
  falar(): void {
    console.log(this.som);
  }
}


// 3) Crie uma subclasse Cachorro que sobrescreve o método falar
class Cachorro extends Animal {
  constructor(nome: string){
    super(nome);
    this.som = 'Au Au';
  }
}

// 3) Crie uma subclasse Gato que sobrescreve o método falar
class Gato extends Animal {
  constructor(nome: string){
    super(nome);
    this.som = 'Miau';
  }
}

// Instancio os objetos
const cachorro = new Cachorro('Rex');
const gato = new Gato('Tom');

// Chamo o método falar() nos objetos
cachorro.falar(); // Au Au
gato.falar(); // Miau

