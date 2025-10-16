// POO CLASSES

// POO - Programação Orientada a Objetos
// Paradigma de programação que modela objetos e suas interações
// Permite reutilizar código e abstrair complexidades
// Uma das principais características do POO é a encapsulamento
// onde os dados e as operações relacionadas são organizadas em objetos
// Pode ser usado para representar entidades reais (ex: pessoas, produtos, etc.)

// POO - USAR PARA:
// - Gerar código mais legível e fácil de manter
// - Estruturar código de forma modular e organizada
// - Facilitar manutenção e evolução do código
// - Reutilizar código
// - Aumentar produtividade e velocidade de desenvolvimento
// - Evitar depender de bibliotecas ou frameworks específicos
// - Criar sistemas escaláveis e de alta disponibilidade
// - Criar APIs e interfaces mais eficientes e intuitivas
// - Realizar testes unitários e de integração
// - Realizar simulações e modelar problemas complexos
// - Facilitar a integração com outros sistemas


// CLASSES
// Modelo que define as características e comportamentos do objeto
// Uma classe possui atributos (propriedades) e métodos (funções)
// Herdadas (extendidas) para criar subclasses
// Abstratas - Não possuem implementação

// ATRIBUTOS - Características/Propriedades/Dados
// Dados que um objeto possui

// MÉTODOS - Ações/Funções/Comportamentos
// Ações que um objeto pode realizar
// São chamados usando o operador '.'
// São chamados usando o operador '()'

//ATRIBUTOS E MÉTODOS - PODEM SER
// - Públicos: Acessados de qualquer lugar
// - Privados: Acessados apenas dentro da classe
// - Estáticos: Acessados sem um objeto
// - Herdados: Reutilizados por subclasses
// - Sobrescritos: Substituídos por subclasses

// class - nome da classe
class Loja {
  nome: string;
  categoria: string;

  // MÉTODO CONSTRUTOR 
  // Chamado automaticamente quando um novo objeto é criado
  // Usado para inicializar os atributos do objeto
  // O método não possui nome e retorno
  // Usado para inicializar os valores dos atributos do objeto
  // Usado para realizar qualquer outra inicialização necessária
  constructor(nome: string, categoria: string) {
    this.nome = nome;
    this.categoria = categoria;
    console.log(`Loja criada: ${this.nome}`);
  }
}
