"use strict";
const exibirSeparador1 = () => {
    console.log("\n---------------------------\n");
};
function login1(username) {
    let message = `Bem-vindo ${username}!`;
    console.log(message);
    return true;
}
console.log(login1("romulorosa11"));
const retornoLogin1 = login1("romulorosa12");
console.log(retornoLogin1);
exibirSeparador1();
function login2(username) {
    let message = `Bem-vindo ${username}!`;
    console.log(message);
    return true;
}
console.log(login2(40));
const retornoLogin2 = login1("romulorosa2");
console.log(retornoLogin2);
exibirSeparador1();
function login3(username) {
    let message = `Bem-vindo ${username}!`;
    console.log(message);
    return "pra cima!";
}
console.log(login3("romulorosa3"));
const retornoLogin3 = login1("romulorosa3");
console.log(retornoLogin3);
exibirSeparador1();
function login4(username) {
    let message = `Oi ${username}!`;
    console.log(message);
}
login4("romulorosa4");
