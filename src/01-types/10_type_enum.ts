// TIPO ENUM
// Não tem em JS.
// Seve pra atribuir valores para os enums
// Serve para enumerar/ordenar tipos de dados


// Atribuir valores para os enums
enum DesignColors{
  white = '#FFF',
  black = '#000',
}
// Acessar esses valores pelo nomes
console.log(`White: ${DesignColors.white}`);



// Se não atribuimos valores para os enums por default o TS define valores inteiros na ordem de declaração a começar por 0
enum StatusPermission{
  Admin,
  User,
  Support
}
// Acessar os valores da ordem de declaração pelo nomes
console.log('StatusPermission - Admin:', StatusPermission.Admin);
console.log('StatusPermission - User:', StatusPermission.User);
console.log('StatusPermission - Support:', StatusPermission.Support);




// Podemos definir valores inteiros para os enums independente da ordem de declaração
enum StatusOficina{
  Entrada = 1,
  Revisao = 2,
  Saida = 3,
  Calote = 0,
}
// Acessamos os valores pelo nome
console.log('Calote:', StatusOficina.Calote);
console.log('Saida:', StatusOficina.Saida);