const exibirSeparador1 = (): void => {
  console.log("\n---------------------------\n");
}

//FUNCTIONS

// 1) COM PARAM E RETUN COM TIPOS DEFINIDOS
// function login - Declaro uma function e seu nome e
// (username:string) - Defino um parametro tipado a ser passado (no caso usaername do tipo string)
// : boolean - Defino que um return tipado (no caso um boolean)
function login1(username: string): boolean{
  let message = `Bem-vindo ${username}!`;
  console.log(message)
  return true;
}

//Exibo o valor chamando a função e passando parâmetro diretamente
console.log(login1("romulorosa11"));


//Declaro uma variavel e atribuo como valor a função passando parâmetro
const retornoLogin1 = login1("romulorosa12");
console.log(retornoLogin1);

exibirSeparador1();


// 2) COM PARAM DE MAIS DE UM TIPO
// function login - Declaro uma function e seu nome e
// (username:string | number) - Defino um parametro tipado a ser passado (no caso username precisa ser tipo string OU number)
// : boolean - Defino que um return tipado (no caso um boolean)
function login2(username: string | number): boolean{
  let message = `Bem-vindo ${username}!`;
  console.log(message)
  return true;
}

//Exibo o valor chamando a função e passando parâmetro diretamente
console.log(login2(40));


//Declaro uma variavel e atribuo como valor a função passando parâmetro
const retornoLogin2 = login1("romulorosa2");
console.log(retornoLogin2);

exibirSeparador1();


// COM RETURN DE MAIS DE UM TIPO
// function login - Declaro uma function e seu nome e
// (username:string) - Defino um parametro tipado a ser passado (no caso username é do tipo string)
// : boolean | string - Defino o return tipado (no caso boolean OU string)
// OBS: Se tentar um return de outro tipo, o TS grifa sinalizando o erro
function login3(username: string): boolean | string{
  let message = `Bem-vindo ${username}!`;
  console.log(message)
  return "pra cima!";
}

//Exibo o valor chamando a função e passando parâmetro diretamente
console.log(login3("romulorosa3"));


//Declaro uma variavel e atribuo como valor a função passando parâmetro
const retornoLogin3 = login1("romulorosa3");
console.log(retornoLogin3);

exibirSeparador1();


// void - SEM RETURN
// function - Declaro uma function
// login - Declaro seu nome
// (username:string) - Defino um parametro tipado a ser passado (no caso username do tipo string)
// :void - Defino que essa function não tem return
// Obs: Se tento usar return o TS sinaliza erro
function login4(username: string): void{
  let message = `Oi ${username}!`;
  console.log(message)
}

login4("romulorosa4")
