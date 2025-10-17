"use strict";
const somarToTalMap = (...numeros) => {
    let somaMap = 0;
    numeros.map(numero => {
        somaMap += numero;
    });
    return somaMap;
};
console.log('SOMA TOTAL - MAP :', somarToTalMap(1, 2, 3, 4, 5));
const listaNumeros1 = [2, 4, 6, 8, 10];
const somarTotalForEach = (numeros) => {
    let somaForEach = 0;
    listaNumeros1.forEach(numero => {
        somaForEach += numero;
    });
    return somaForEach;
};
console.log('SOMA TOTAL - FOR EACH :', somarTotalForEach(listaNumeros1));
const listaNumeros2 = [10, 20, 30, 40, 50];
const somarTotalReduce = (numeros) => {
    const somaReduce = numeros.reduce((acumulador, numero) => {
        return acumulador + numero;
    }, 0);
    return somaReduce;
};
console.log('SOMA TOTAL - REDUCE :', somarTotalReduce(listaNumeros2));
