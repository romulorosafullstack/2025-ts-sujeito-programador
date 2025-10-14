const exibirSeparador = (): void => console.log("\n-----------------------------------------\n");

// ARROW FUNCTIONS
// Chamada também como função anônima, é formato mais usado profissionalmente. Também existe em JS.
// param - Podemos tipar nenhum, um ou mais de um tipo
// return - Podemos tipar nenhum (void), um ou mais de um tipo

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

exibirSeparador();


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

exibirSeparador();
