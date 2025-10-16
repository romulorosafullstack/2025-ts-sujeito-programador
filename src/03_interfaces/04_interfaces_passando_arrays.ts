
// Declaro a interface
interface TecnologiasProps{
  id: string;
  nome: string;
  usos: string[];
}

// Instancio os objetos com a interface
let tecnologia1: TecnologiasProps = {
  id: "001",
  nome: "TypeScript",
  usos: ["Web"]
}

let tecnologia2: TecnologiasProps = {
  id: "002",
  nome: "Node",
  usos: ["Back-End","IoT"]
}

let tecnologia3: TecnologiasProps = {
  id: "003",
  nome: "React",
  usos: ["Front-End"]
}

console.log(tecnologia3)

// Função para ler os dados de cada objeto
const lerTecnologia = (item: object): void => {
  Object.entries(item).map(([key, value]) => {
    console.log(`${key}: ${value}`);
  });
  console.log("___________\n");
}


// Chamo a função para ler os dados dos objetos
lerTecnologia(tecnologia1);
lerTecnologia(tecnologia2);
lerTecnologia(tecnologia3);