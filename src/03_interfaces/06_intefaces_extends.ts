interface JogoProps{
  readonly id: string;
  nome: string;
  descricao: string;
  plataforma: string[];
}

const left4dead: JogoProps = {
  id: "001",
  nome: "Left 4 Dead",
  descricao: "Jogo de survival horror",
  plataforma: ["PC", "PS5"]
}

console.log(left4dead)

interface DLC extends JogoProps{
  novoConteudo: string[];
}

const left4deadDLC: DLC = {
  id: "002",
  nome: "Left 4 Dead - Redemption",
  descricao: "Novos mapas pra jogar online",
  plataforma: ["PC","PS5"],
  novoConteudo: ["Novas armas", "Novo mapa", "Novos níveis"]
}


Object.entries(left4dead).map(([key, value]) => {
  console.log(`${key}: ${value}`);
});

console.log("---------------------------\n");

Object.entries(left4deadDLC).map(([key, value]) => console.log(`${key.toLocaleUpperCase()}: ${value}`))

