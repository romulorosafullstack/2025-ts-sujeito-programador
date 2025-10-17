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
// - Aumentar produtividade e velocidade de desenvolvimento
// - Facilitar manutenção e evolução do código
// - Reutilizar código
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
// São mais utilizadas quando temos integrações com o backend ou outros sistemas

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
// Por convenção o nome começa com letra maiúscula e segue em camel case
// OBS: se não gerar o construtor, o TS grifa as propriedades/metodos com erro de inicialização de construtor
class Loja {
  //Atributos da Loja e seus tipos
  nome: string;
  categoria: string;

  // MÉTODO CONSTRUTOR
  // Chamado automaticamente quando um novo objeto é criado
  // O método não possui nome e retorno
  // Usado para inicializar os valores dos atributos do objeto
  // Usado para realizar qualquer outra inicialização necessária

  // constructor - método que é chamado quando um novo objeto é criado
  // (nome: string, categoria: string) - parâmetros a serem recebidos. Só valem pra dentro do escopo do construtuor
  // {} - bloco de código a ser executado
  // this.nome = nome - relação entre o atributo da class com o nome passado no construtor
  // this.categoria = categoria - relação entre o atributo da class com o nome passado no construtor
    constructor(nome: string, categoria: string) {
    this.nome = nome;
    this.categoria = categoria;
    console.log(`Loja criada: ${this.nome}`);
    console.log("-----------------------------------")
  }
}

// Instanciando objetos da classe Loja

// const - tipo de declaração
// loja - nome da variável que armazena o novo objeto
// = - atribuição
// new - palavra reservada que cria um novo objeto
// Loja - nome da classe
// ("Loja XYZ", "E-commerce") - valores passados para o construtor
const loja1 = new Loja("Magazine Luiza", "E-commerce");

const loja2 = new Loja("Mercado Livre", "E-commerce");
const loja3 = new Loja("Shopee", "E-commerce");
const loja4 = new Loja("McDonald's", "Lanches");



