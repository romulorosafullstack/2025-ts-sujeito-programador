const exibirSeparador4 = (): void => {
  console.log("\n---------------------------\n");
}

const pularLinha4 = (): void => {
  console.log("\n");
}

// INTERFACES
// Forma de estruturar dados e regras
// Contrato/padrão/estrutura que precisa ser seguido para criar determinado(s) objeto(s) ou função
// Não pode ser instanciada, apenas definida
// Pode ser usada para definir tipos de dados
// Pode ter as mesmas restrições de tipos que um objeto ou função
// Pode ter métodos, propriedades e construtores
// Pode ser usada para herança múltipla


// INTERFACE PARA OBJETO
// 1) Criar interface com propriedades e tipos de dados
// Cada propriedade precisa ter pelo menos um tipo ou mais (separadas por pipes)
// Cada propriedade pode ser obrigatória (:) ou opcional (?:)
interface EmpresaProps{
  nome: string;
  endereco: string;
  status: boolean
}

// 2) Criar um objeto que implemente a interface
// Obs.: Se atribuir valores diferentes aos tipos de dados da interface, 
// o TS grifa a propriedade informando erro de tipo
// Obs.: Se atribuir uma propriedade fora da interface, 
// o TS grifa a propriedade informando que não está na interface
let empresa1: EmpresaProps = {
  nome: 'Smartts Utilities',
  endereco: 'Rua ABC, 123',
  status: true,
};

// 3) Exibir dados do objeto
pularLinha4();
console.log("EMPRESA 1: ");
console.log(empresa1);

exibirSeparador4();


// FUNÇÃO COM INTERFACE
// const - Tipo de variavel e escopo da função
// novaEmpresa  - Nome da função
// = - Atribuir valor a função
// ({nome, endereco, status}: IEmpresaProps) - Parametro com a interface
  // {nome, endereco, status} - Destructuring do objeto
  // :IEmpresaProps - Tipo do objeto é a interface
// : - Tipo do return
// void - Sem return
// => - Inicializar o bloco de código

const novaEmpresa = ({nome, endereco, status}: EmpresaProps): void => {
  console.log(`EMPRESA: ${nome}`);
  console.log(`ENDEREÇO: ${endereco}`);
  console.log(`STATUS: ${status}`);
}

// CHAMAR A FUNÇÃO
// Como o objeto foi desconstruido na função,
// os valores precisam ser passados como um objeto
// com as mesmas propriedades e tipos da interface
// OBS.: Se não passar todos os valores de params obrigatórios, o TS grifa a chamada da função
// OBS.: Se passar params que não tem na interface, o TS grifa o param na chamada da função
// OBS.: Se tentar passar valores diferentes aos tipos de dados da interface,
// o TS grifa a propriedade informando erro de tipo
// OBS.: Se tentar passar novos valores e tipos diferentes da interface, 
// o TS grifa a propriedade e valor informando erro
novaEmpresa({
  nome: 'Rosadev',
  endereco: 'Rua XYZ, 456',
  status: false,
}); 






