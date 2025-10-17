// Crio um type alias para produto
// um objeto com nome, preço e quantidade
type Produto = {
  nome: string;
  preco: number;
  quantidade: number;
}


// Crio objetos do tipo Produto
const produto1: Produto = {
  nome: 'Camiseta',
  preco: 50.00,
  quantidade: 5
}

const produto2: Produto = {
  nome: 'Calça',
  preco: 100.00,
  quantidade: 3 
}

const produto3: Produto = {
  nome: 'Mochila',
  preco: 150.00,
  quantidade: 1
}

// Crio um array do tipo Produto
const produtos: Produto[] = [produto1, produto2, produto3];

let valorTotal = 0;

// Crio uma map para
// calcular preços x produtos de cada item
// e calcular a soma geral
produtos.map((produto) => {
  const somaItems = produto.preco * produto.quantidade;
  valorTotal += somaItems;
})

console.log(`Total de vendas: R$ ${valorTotal.toFixed(2)}`);


