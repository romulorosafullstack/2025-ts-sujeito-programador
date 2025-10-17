// Crie um sistema simples de carrinho de compras tipado:
// adiciona produto, remove produto e mostra total

// Crio um type alias para meuProduto
type MeuProduto = {
  nome: string;
  preco: number;
};

// Crio um type alias para meuCarrinho
type MeuCarrinho = {
  produtos: MeuProduto[];
  total: number;
};

// Crio um objeto do tipo Carrinho
// Inicialmente como tá vazio
// produtos é um array vazio
// total começa em zero
const carrinho: MeuCarrinho = {
  produtos: [],
  total: 0
};

// Função para adicionar produto ao carrinho
const adicionarProduto = (produto: MeuProduto) => {
  // Adiciono o produto ao array de produtos do carrinho
  carrinho.produtos.push(produto);

  // Atualizo o total do carrinho
  carrinho.total += produto.preco;
};

// Função para remover um produto do carrinho
const removerProduto = (produto: MeuProduto) => {
  // Busco o índice do produto no array de produtos do carrinho
  const index = carrinho.produtos.findIndex(p => p.nome === produto.nome);

  // Se o produto existir no array, removo-o
  if (index > -1) {
    carrinho.produtos.splice(index, 1);

    // Atualizo o total do carrinho
    carrinho.total -= produto.preco;
  }
};

// Instancio produtos
const meuProduto1: MeuProduto = {
  nome: 'Camiseta',
  preco: 50.00
};

const meuProduto2: MeuProduto = {
  nome: 'Calça',
  preco: 100.00
}; 

const meuProduto3: MeuProduto = {
  nome: 'Mochila',
  preco: 150.00
};


// Função pra mostrar os produtos do carrinho e total
const mostrarProdutosCarrinho = (nome:string) => {
  console.log(`CARRINHO - ${nome}:`);
  console.log('===============================');
  carrinho.produtos.map((produto) => console.log(produto.nome, 'R$:', produto.preco.toFixed(2)));
  console.log('TOTAL DO CARRINHO: R$:', carrinho.total.toFixed(2));
  console.log('===============================\n');
};

// Adiciono os produtos ao carrinho
adicionarProduto(meuProduto1);
adicionarProduto(meuProduto2);
adicionarProduto(meuProduto3);

// Chamo a função pra mostrar os produtos do carrinho e total
mostrarProdutosCarrinho("Adicionar");

//Removo um produto do carrinho
removerProduto(meuProduto3);

// Chamo a função pra mostrar os produtos do carrinho e total
mostrarProdutosCarrinho("Remover");

adicionarProduto(meuProduto1);
adicionarProduto(meuProduto1);
adicionarProduto(meuProduto1);
mostrarProdutosCarrinho("Adicionar");

removerProduto(meuProduto1);
adicionarProduto(meuProduto3);
mostrarProdutosCarrinho("Final");



