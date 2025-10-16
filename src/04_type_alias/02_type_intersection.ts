// TYPE INTERSECTIONS
// Usar para combinar vários tipos em um novo tipo.
// Usar para reutilizar código e evitar repetições.
// Usar pra criar tipos mais poderosos, reutilizáveis e com mais informações que tipos promitivos


// Declaro um type alias
type Info = {
  id: number;
  nome: string;
  descricao?: string;
}

// Instancio um objeto do tipo Info (alias)
const productInfo: Info = {
  id: 111,
  nome: 'Regata',
  //descricao: 'Algodão'
}

// Declaro outro type alias
type Categoria = {
  slug: string;
  quantidadeProduto: number;
}

// Instancio um objeto do tipo Categoria (alias)
const categoryInfo: Categoria = {
  slug: 'roupas',
  quantidadeProduto: 100
}



// Declaro outro type alias usando type intersections
// type - type alias
// ProductInfoWithCategory - nome do alias
// = - Atribuição
// Info - Nome de um alias
// & - Operador de interseção
// Categoria - Nome de outro alias
type ProductInfoWithCategory = Info & Categoria;


// Instanciando um objeto do tipo ProductInfoWithCategory (alias)
// Precisa atribuir valores para todos os campos de ambos os alias
const novoProduto: ProductInfoWithCategory = {
  id: 222,
  nome: 'Camiseta',
  descricao: 'Algodão Peruano',
  slug: 'roupas',
  quantidadeProduto: 30
}

console.log(novoProduto);







