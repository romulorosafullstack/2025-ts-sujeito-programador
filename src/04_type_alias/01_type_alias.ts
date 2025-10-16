// TYPE ALIAS
// Forma de simplificar o código e evitar repetições
// Usar para renomear tipos
// Permite usar os novos nomes como tipo
// Permite reutilizar nomes mais concisos
// Não é uma nova forma de declarar um tipo

// Permite usar alias para:
// tipos, arrays, objetos, funções,
// interfaces, classes, enums e namespaces

// Define um novo nome para:
// tipo, tipo complexo, array, objeto, função,
// interface, classe, enum, namespace, tipo de dados,
// tipo de dados complexo, array complexo, objeto complexo,
// função complexa, interface complexa, classe complexa,
// enum complexo e namespace complexo


// type - Declaro que é um type alias
// Uuid - Nome do alias
// = - Atribuição
// string | number | null - tipos para o alias
type Uuid = string | number | null;

function acessar(uuid: Uuid, nome: string): void {
  console.log("ACESSAR");
  console.log(`UUID: ${uuid}\nNOME: ${nome}`);
  console.log("---------------------------");
}

function logUsuario(uuid: Uuid): void{
  console.log("LOGAR USUÁRIO");
  console.log(`UUID: ${uuid}`);
  console.log("---------------------------");
}

acessar("123", "Romulo");
logUsuario(321);


// Type Alias com valores de propriedades
type Moedas = "BRL" | "USD" | "EUR";

function comprarItem(moeda: Moedas): void {
  console.log("COMPRAR");
  console.log(`MOEDA: ${moeda}`);
  console.log("---------------------------");
}

// Chamar a função passando um dos valores informados exatamente como no type alias 
// OBS: Se não informar um dos valores informados no Alias, 
// o TS grifa o param e exibindo um erro de tipo
comprarItem("BRL");
