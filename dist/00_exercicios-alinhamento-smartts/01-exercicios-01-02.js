"use strict";
const criarFrase = (pessoa) => {
    return `\nOlá, meu nome é ${pessoa.nome}!\nTenho ${pessoa.idade} anos e trabalho como ${pessoa.profissão}.\nMeus hobbies são ${pessoa.hobbies?.join(", ") || "nenhum"}.`;
};
console.log(criarFrase({ nome: "Romulo", idade: 40, profissão: "Desenvolvedor Front-End", hobbies: ["música", "filmes", "viagens"] }));
