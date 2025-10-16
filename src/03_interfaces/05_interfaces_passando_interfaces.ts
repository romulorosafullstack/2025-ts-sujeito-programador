// Crio a interface
interface TecnologiaProps{
  id: string;
  nome: string;
  descricao?: string;
}

// Crio outra interface para passar 
// um array com objetos da interface TecnologiaProps
interface NomesProps{
  tecnologia: TecnologiaProps[]
}

// Crio um objeto com as tecnologias
let frontend: NomesProps = {
  tecnologia: [
    {
      id: "001",
      nome: "React",
      descricao: "Lib Javascript versátil"
    },
    {
      id: "002",
      nome: "Angular",
      descricao: "Framework JavaScript robusto"
    },
    {
      id: "003",
      nome: "Angular",
      descricao: "Framework JavaScript robusto"
    },
  ]
}

console.log(frontend)

console.log(frontend.tecnologia)
