// TIPO NUMBER

// Declarando variável com tipo number já atribuindo diretamente um valor inteiro
let inteiro1: number = 10;
console.log(`number1: ${inteiro1}`);

// Declarando variável com tipo number
let inteiro2: number;
// Atribuindo um valor inteito à variável
inteiro2 = 20;
console.log(`number2: ${inteiro2}`);

// Declarando variável com tipo number já atribuindo diretamente um valor inteiro
let real1: number = 30.5;
console.log(`number3: ${real1}`);

// Declarando variável com tipo number
let real2: number;
// Atribuindo um valor real a variável
real2 = 40.5;
console.log(`number4: ${real2}`);


// Aceita operações aritméticas com qualquer tipo de número
//Inteiros com inteiros
let sum1 = inteiro1 + inteiro2;
console.log(`sum1: ${sum1}`)

// Reais com reais
let sum2 = real1 + real2;
console.log(`sum2: ${sum2}`)

// Inteiro com real
let sum3 = inteiro1 + real1;
console.log(`sum3: ${sum3}`)