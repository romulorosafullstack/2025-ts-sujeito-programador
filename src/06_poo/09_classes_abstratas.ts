// CLASSE ABSTRATA
// Um conceito que nos permite criar uma classe com atributos e/ou métodos, mas não possui implementação
// Um contrato/modelo que todos os objetos que herdam dela devem seguir
// Não pode ser instanciada, apenas definida
// Pode ser usada para herança múltipla
// Pode ter as mesmas restrições de tipos que um objeto ou função
// Pode ter métodos, propriedades e construtores


//Crio um type alias
type ContaDados = {
  nome: string;
  numero: string;
  email: string;
}

// Crio a classe abstrata
// Não pode ser acessada diretamente por uma instância
abstract class ContaBanco {

  // Declaro um método abstrato
  abstract abrirConta(dados: ContaDados): boolean;
}

// Crio uma outra classe que herda de ContaBanco
// Assim acesso todos métodos abstratos da classe ContaBanco
class PessoaFisica extends ContaBanco {

  // Chamo o método abstrato abrirConta da classe abstrata ContaBanco
  // A implementação do método é feita na classe que herda
  // O método abstrato não pode ser chamado diretamente
  // A implementação é feita usando o keyword "abstract" e não pode ser omitido
  // O método abstrato não pode ser:
  // - sobrescrito em uma subclasse
  // - chamado diretamente por uma instância da subclasse
  // - chamado diretamente por um objeto da subclasse
  abrirConta(dados: ContaDados): boolean {
    console.log("=======================================");
    console.log("Conta Pessoa Fisica criada com sucesso!\n");
    console.log(`Nome: ${dados.nome}`);
    console.log(`Número da Conta: ${dados.numero}`);
    console.log(`Email: ${dados.email}`);
    console.log("=======================================\n");
    return true;
  }
}

// Crio uma outra classe que herda de ContaBanco
// Assim acesso todos métodos abstratos da classe ContaBanco
class PessoaJuridica extends ContaBanco {

  // Chamo o método abstrato abrirConta da classe abstrata ContaBanco
  // A implementação do método é feita na classe que herda
  // O método abstrato não pode ser chamado diretamente
  // A implementação é feita usando o keyword "abstract" e não pode ser omitido
  // O método abstrato não pode ser:
  // - sobrescrito em uma subclasse
  // - chamado diretamente por uma instância da subclasse
  // - chamado diretamente por um objeto da subclasse
  abrirConta(dados: ContaDados): boolean {
    console.log("=======================================");
    console.log("Conta Pessoa Jurídica criada com sucesso!\n");
    console.log(`Nome: ${dados.nome}`);
    console.log(`Número da Conta: ${dados.numero}`);
    console.log(`Email: ${dados.email}`);
    console.log("=======================================\n");
    return true;
  }
}

// Instancio objetos das subclasses
const pessoaFisica1 = new PessoaFisica();
const pessoaFisica2 = new PessoaFisica();
const pessoaJuridica1 = new PessoaJuridica();
const pessoaJuridica2 = new PessoaJuridica();

// Chamo o método abstrato abrirConta da subclasse
pessoaFisica1.abrirConta({
  nome: "Romulo",
  email: "romulo@teste.com",
  numero: "1234-5"
});

pessoaFisica2.abrirConta({
  nome: "Leo",
  email: "leo@teste.com",
  numero: "6789-0"
});

pessoaJuridica1.abrirConta({
  nome: "Smartts Utilities",
  email: "smarttsutilities@smartts.com",
  numero: "12121-2"
});

pessoaJuridica2.abrirConta({
  nome: "CEDAE",
  email: "cedae@cedae.com",
  numero: "34343-4"
});
