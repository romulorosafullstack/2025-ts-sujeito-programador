// Crie uma função que receba um array de números
// e retorne a soma total.

// FUNÇÃO COM REST OPERATOR + MAP
// Criou uma função com rest operator assim não especifico a quantidade de argumentos
const somarToTalMap = (...numeros: number[]): number => {
  // Crio uma variavel pra armazenar a soma começando por 0
  let somaMap = 0;

  // Uso um map pra iterar todo o array e fazer o calculo.
  numeros.map(numero => {
    somaMap += numero;
  })

  // Retorno a soma total.
  return somaMap
}

//Exibo o resultado
console.log('SOMA TOTAL - MAP :', somarToTalMap(1, 2, 3, 4, 5)); 


// FUNÇÃO + FOREACH
//Crio o array de numeros
const listaNumeros1 = [2, 4, 6, 8, 10];

// Crio uma função que recebe um array de números
// e retorna um valor em number.
const somarTotalForEach = (numeros: number[]): number => {
  // Crio uma variavel pra armazenar a soma começando por 0
  let somaForEach = 0;

  // Uso um forEach pra iterar cada item do array e fazer o calculo.
  listaNumeros1.forEach(numero => {
    somaForEach += numero;
  })

  // Retorno a soma que é um number
  return somaForEach
}

//Exibo o resultado
console.log('SOMA TOTAL - FOR EACH :', somarTotalForEach(listaNumeros1));


// FUNÇÃO + REDUCE
// Crio o array de numeros
const listaNumeros2 = [10, 20, 30, 40, 50];

// Crio uma função que recebe um array de números
// e retorna um valor em number.
const somarTotalReduce = (numeros: number[]): number => {

  // Uso um reduce pra calcular a soma do array.
  const somaReduce = numeros.reduce((acumulador, numero) => {
    return acumulador + numero;
  }, 0);

  // Retorno a soma que é um number
  return somaReduce
}

//Exibo o resultado
console.log('SOMA TOTAL - REDUCE :', somarTotalReduce(listaNumeros2));


