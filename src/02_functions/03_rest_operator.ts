// REST OPERATOR
// Usar quando não sabemos a quantidade de itens que serão passados, porém sabemos o(s) tipo(s) dos valores

// DECLARAR A FUNÇÃO
// const - tipo de escopo da variavel
// mostrarNomes - nome da variavel
// = atribuir valor a função
// (...vendas: number[]) - rest operator de vendas um array números
// : - tipo do return
// void - sem return
// => inicializar o bloco de código
// {} bloco de código
const mostrarNomes = (...nomes: string[]): void => {
  console.log("QUANTIDADE DE NOMES:", nomes.length);

  // Percorrer cada nome no array nomes
  nomes.map(nome => {
    // Cada nome percorrido é exibido no terminal
    console.log(nome)
  })
}

// CHAMAR A FUNÇÃO
// Passar valores de param de acordo com o tipo informado na declaração da função
// OBS.: Se tentar passar um valor de outro tipo, o TS grifa esse valor como um erro de tipagemn
mostrarNomes("Romulo", "Leonardo", "Flavio", "Leandro")


// Náo sei a quantidade e valor de vendas que vão ser passadas, mas sei que pra elas vou usar um array de numeros
function vendasBalanco (...vendas : number[]): void{
  // Quando entrarem quero saber a qantidade de vendas
  const vendasQuantidade = vendas.length;

  // Quero que some as vendas
  let vendasSoma: number = 0
  vendas.map(venda => {
    vendasSoma += venda
  })

  // Quero calcular a média
  let vendasMedia: number = vendasSoma/vendasQuantidade;

  // Vou exibir o balanço
  console.log("\n------------------------------");
  console.log("VENDAS");
  console.log("--------------------------------");
  console.log(`QUANTIDADE DE VENDAS: ${vendasQuantidade}`)

  // Percorroum array com map pra mostrar cada item, seu valor e indice
  // uso.tofixed(2) pra botar os centavos
  // uso .replace pra trocar . por virgula colocando no padrão brasileiro
  vendas.map((venda: number, indice: number) => {
    console.log(`R$ ${venda.toFixed(2).replace(".",",")} - VENDA ${indice + 1}`)
  })

  console.log(`R$ ${vendasSoma.toFixed(2).replace(".",",")} - SOMATÓRIO`)
  console.log(`R$ ${vendasMedia.toFixed(2).replace(".",",")} - MÉDIA`)
}

// Chamando a função somente com valore em number
vendasBalanco(11,20.40,30.60)
