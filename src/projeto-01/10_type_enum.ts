enum DesignColors{
  white = '#FFFFFF',
  black = '#000000',
}

console.log('White:', DesignColors.white);


enum StatusPermission1{
  Admin,
  User
}

console.log('Admin:', StatusPermission1.Admin);
console.log('User:', StatusPermission1.User);

enum StatusOficina{
  Entrada = 1,
  Revisao = 2,
  Saida = 3,
  Calote = 0,
}

console.log('Calote:', StatusOficina.Calote);
console.log('Saida:', StatusOficina.Saida);