//Faça uma função somar(a: number, b: number): number

// Crio a interface passando os parametros seus tipos usados na função
interface SmarttsSomaProps{
  (a: number, b: number): number,
}

// Crio a função de tipo SmarttsSomaProps
// ela recebe dois numbers
// seu return é um number
const somarNumeros: SmarttsSomaProps = (a: number, b: number): number => {
  const soma = a + b;
  console.log(`${a} + ${b} = ${soma}`);
  return soma
}

// Chamo a funçâo passando seus argumentos
// Ela exibe os resultados
// Atribuo o valor a uma varável
const soma1 = somarNumeros(10, 20);
const soma2 = somarNumeros(20, 30);
const soma3 = somarNumeros(30, 40);