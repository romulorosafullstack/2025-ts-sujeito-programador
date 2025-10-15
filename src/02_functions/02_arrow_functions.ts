const exibirSeparador2 = (): void => {
  console.log("\n---------------------------\n");
}

// ARROW FUNCTIONS
// Chamada também como função anônima, é o formato mais usado profissionalmente. Também existe em JS.
// param - Podemos tipar com nenhum tipo, um ou mais de um
// return - Podemos tipar com nenhum tipo (void), um ou mais de um

// const - tipo da variavel
// retornoApi - nume da function
// = atribuindo o que vier a sua direita a variavel retornoApi
// (parametro: tipagem1 | tipagem2) => passo um parametro e sua tipagem
// (caso tenha mais de um tipo separar por pipes | )
// : tipagem do return
// (caso tenha mais de um tipo separar por pipes | )
// => inicialização o bloco de código
// {] bloco de código


// FUNÇÃO ANÔNIMA RETURN VOID (SEM RETURN)
// OBs.: Se tentar usar return o TS acusa erro de tipagem
const retornoApiVoid = (url:string): void => {
  console.log(`\nRETORNO DA URL - VOID: ${url}`);
}

retornoApiVoid("https://www.smartts.com.br/");

exibirSeparador2()


// FUNÇÃO ANÔNIMA COM PARAM(S) E RETURN TIPADO(S)
// Função declarada passando com param(s) e return tipados precisam ter essas condições atendidas ao chamar a função
// OBS.: return - Se não usar return, o TS acusa erro grifando a tipagem de retorno declarada
// OBS.: return - Se passar param(s) com tipagem diferente, o TS acusa erro grifando o return
const retornoApiString = (url:string): string => {
  return `RETORNO DA API - STRING: ${url}`
}

// CHAMAR A FUNÇÃO
// Precisa passar o(s) param(s) com o(s) tipo(s) declarado(s)
// OBS.: Se não, o TS acusa erro grifando o(s) param(s) na chamada da função
const ApiString = retornoApiString("https://www.sujeitoprogramador.com.br/");
console.log(ApiString)

exibirSeparador2();


// FUNÇÃO COM PARAMS OBRIGATÓRIOS TIPADOS
// Param obrigat[orio - (param : tipo)
const cadastroObrigatorio = (nome: string, email: string, senha: string): void => {
  let data = { nome, email, senha};
  console.log(data)
}

cadastroObrigatorio("Romulo","romulo@teste.com","12345")

exibirSeparador2();


// FUNÇÃO COM PARAM(S) OBRIGATÓRIO(S) E OPCIONAIS TIPADO(S)
// Param(s) obrigatório(s) - (param : tipo) ou (param: tipo1 | tipo2)
// Param(s) opcional - (param ?: tipo) ou (param ?: tipo | tipo2)
const cadastroOpcionais = (dia: number, mes: number, ano?: number): void => {
  let data = { dia,  mes, ano };
  console.log(data)
}

// AO CHAMAR A FUNÇÃO
// Sempre passar os valores dos params obrigatorios atendendo a tipagem declarada
// Se passar os valores dos params opcionais eles precisam atender a tipagem declarada
// OBS.: Se não passar todos os valores de params obrigatórios, o TS grifa a chamada da função
// OBS.: Se passar valores de params com tipos diferentes, o TS grifa o param na chamada da função
cadastroOpcionais(2, 2);


exibirSeparador2();


// FUNÇÃO PASSANDO VALOR DEFAULT PARA PARAM
// Se não passar um valor na chamada da função é atribuido o valor declarado com default
const cadastroLoja = (nome: string, email?: string, status = false) : boolean => {
  console.log(`NOME: ${nome} | STATUS: ${status}`);
  return status;
};

cadastroLoja("Romulo", "romulo@teste.com")
cadastroLoja("Guilherme", "guilherme@teste.com", true)
