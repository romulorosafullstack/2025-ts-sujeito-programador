// Crie um type Pessoa 
// com nome, idade e profissão.
type Pessoa = {
  nome: string;
  idade: number;
  profissão: string;
  hobbies?: string[];
};

// Crie uma função que receba uma Pessoa 
// e retorne uma frase com seus dados.
const criarFrase = (pessoa: Pessoa): string => {
  return `\nOlá, meu nome é ${pessoa.nome}!\nTenho ${pessoa.idade} anos e trabalho como ${pessoa.profissão}.\nMeus hobbies são ${pessoa.hobbies?.join(", ") || "nenhum"}.`;
}

// Exibir a frase retornada pela função
console.log(criarFrase({nome: "Romulo", idade: 40, profissão: "Desenvolvedor Front-End", hobbies: ["música", "filmes", "viagens"]}));
