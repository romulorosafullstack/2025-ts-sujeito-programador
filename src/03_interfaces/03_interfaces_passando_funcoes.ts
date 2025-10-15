const exibirSeparador6 = (): void => {
  console.log("\n---------------------------\n");
}

const pularLinha6 = (): void => {
  console.log("\n");
}


// 1) Declarei a interface para definir as propriedades dos cursos
interface CursoProps{
  id: string;
  nome: string;
  preco: number;

  // 3) Declarar uma função entre as propriedades
  // promocao - função que calcula a promoção do curso
  // (preco: number) - parametro e seu tipo
  // => - tipo do return
  // void - sem return
  promocao: (preco: number) => void;
}

// 2) Declarei a função que exibe a promoção do curso
function mostrarPromo(preco: number): void {
  console.log("PROMOÇÃO DO CURSO");
  console.log(`DE: R$ ${preco.toFixed(2)}`);
  console.log(`POR R$ ${(preco - (preco * 0.2)).toFixed(2)}`);
}
  
// 4) Instanciando novo objeto do curso
const curso01: CursoProps = {
  id: "0001",
  nome: "TyprScript",
  preco: 1200,
  promocao: (preco: number): void => {
    console.log(`DE: R$ ${preco}`);
    console.log(`POR: R$ ${preco - (preco * 0.2)}`);
  }
}


// 6) Exibir dados do curso
console.log(curso01);

// 5) Exibir curso 1 promoção
console.log(curso01.promocao(5000));

exibirSeparador6()


// INTERFACE COM UMA FUNÇÃO COMO PROPS

// Crio a interface com
// (valor1: number, valor2: number) - Params e tipos usados na função
// : number - Tipo de return number
interface SomaProps{
  (valor1: number, valor2: number): number,
}

// let - Tipo de variavel e escopo
// somaNumeros - Nome da função
// : SomaProps - Tipo da função
// = Atribiuição
// (valor1: number, valor2: number) - params e tipos
// : number - tipo de return number
// => - inicializa a função
// {} - bloco de código
let somaNumeros: SomaProps = (valor1: number, valor2: number): number => {
  const soma = valor1 + valor2;
  console.log(`${valor1} + ${valor2} = ${soma}`);
  return soma;
}

const resultado1 = somaNumeros(10, 20)
const resultado2 = somaNumeros(20, 20)
const resultado3 = somaNumeros(20, 30)