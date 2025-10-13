// TIPO ENUM
// Representa um conjunto de constantes relacionadas
// Facilitar a manutenção e legibilidade do código
// TypeScript não permite valores negativos ou decimais
// Podemos usar valores literais ou constantes
// Valores default são zero, caso não seja especificado
// Valores podem ser alterados, caso desejamos
// Valores podem ser alterados, caso desejamos
enum StatusPermission2{
  Admin = 'ADMIN',
  User = 'USER'
}

// Acessamos os valores pelo nome

// 
// Serve pra enumerar tipos de dados.
// Tipo só existente em TypeScript


enum DesignColors{
  white = '#FFFFFF',
  black = '#000000',
}

// Acessamos os valores pelo nomes
console.log('White:', DesignColors.white);


//
enum StatusPermission1{
  Admin,
  User
}

//
console.log('Admin:', StatusPermission1.Admin);
console.log('User:', StatusPermission1.User);


// Podemos definir valores inteiros para os enums
enum StatusOficina{
  Entrada = 1,
  Revisao = 2,
  Saida = 3,
  Calote = 0,
}

// Acessamos os valores pelo nome
console.log('Calote:', StatusOficina.Calote);
console.log('Saida:', StatusOficina.Saida);