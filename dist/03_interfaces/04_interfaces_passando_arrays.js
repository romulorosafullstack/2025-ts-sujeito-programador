"use strict";
let tecnologia1 = {
    id: "001",
    nome: "TypeScript",
    usos: ["Web"]
};
let tecnologia2 = {
    id: "002",
    nome: "Node",
    usos: ["Back-End", "IoT"]
};
let tecnologia3 = {
    id: "003",
    nome: "React",
    usos: ["Front-End"]
};
console.log(tecnologia3);
const lerTecnologia = (item) => {
    Object.entries(item).map(([key, value]) => {
        console.log(`${key}: ${value}`);
    });
    console.log("___________\n");
};
lerTecnologia(tecnologia1);
lerTecnologia(tecnologia2);
lerTecnologia(tecnologia3);
