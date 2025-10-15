const exibirSeparador5 = (): void => {
  console.log("\n---------------------------\n");
}

const pularLinha5 = (): void => {
  console.log("\n");
}

// CRIAR UMA INTERFACE COM COM A PROP EM-MAIL OPCIONAL
interface CadastroProps {
  nome: string;
  email?: string;
  status: boolean;
}

// CRIAR UM OBJETO QUE IMPLEMENTA A INTERFACE
const funcionario1: CadastroProps = {
  nome: "Romulo",
  email: "romulo@teste.com",
  status: true,
};

// IMPRIMIR O OBJETO COM A INTERFACE

// Exibo o objeto todo
console.log("\nFUNCIONÁRIO 1 - EXIBINDO TODO OBJETO:");
console.log(funcionario1);
exibirSeparador5();

// MAP - Uso um loop pra exibir somente as chaves e valores do objeto
console.log("\nFUNCIONÁRIO 1 - PERCORRENDO OBJETO COM MAP:");
Object.entries(funcionario1).map(([key, value]) => {
  console.log(`${key}: ${value}`);
});


// FOR OF - Uso um loop pra exibir somente as chaves e valores do objeto
console.log("\nFUNCIONÁRIO 1 - PERCORRENDO OBJETO com FOROF:");
for (const [key, value] of Object.entries(funcionario1)) {
  console.log(`${key}: ${value}`);
}
exibirSeparador5();



// Criando uma instancia do objeto com a interface passando valores vazios
const funcionarioGeral: CadastroProps = {
  nome: "",
  email: "",
  status: true,
};

//CRIAR UMA FUNÇÃO QUE IMPLEMENTA A INTERFACE
const mostrarCadastro = (funcionarioGeral: CadastroProps): void => {
  Object.entries(funcionarioGeral).map(([key, value]) => {
    console.log(`${key}: ${value}`);
  });
  console.log("-----------------------\n");
}

mostrarCadastro({
  nome: "Leonardo",
  email: "leo@ciriaco.com",
  status: false,
});

mostrarCadastro({
  nome: "Flavio",
  email: "flavio@souza.com",
  status: true
});

mostrarCadastro({
  nome: "Leandro",
  status: true
});

// FUNÇÃO PASSANDO OBJETO DESCONSTRUIDO
function novoFuncionario1({ nome, email, status }: CadastroProps): void {
  console.log(`NOVO FUNCIONÁRIO1: ${nome}\nE-MAIL: ${email}\nSTATUS: ${status}`);
}

novoFuncionario1({
  nome: "Renato",
  email: "renato@nogueira.com",
  status: true
});

exibirSeparador5();

// FUNÇÃO PASSANDO OBJETO COMO PARAM 
function novoFuncionario2(propriedades: CadastroProps): void {
  console.log(`NOVO FUNCIONÁRIO2: ${propriedades.nome}\nE-MAIL: ${propriedades.email}\nSTATUS: ${propriedades.status}`);
}

novoFuncionario2({
  nome: "Ricardo",
  email: "ricardo@gafke.com",
  status: false
});


