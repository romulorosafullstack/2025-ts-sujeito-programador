// GETTERS AND SETTERS
// - Controlar acessos a propriedades de um objeto
// - Evitar que os dados sejam modificados de forma inesperada
// - Adicionar regras de validação
// - Controlar ações antes de alterar os dados
// - Controlar ações após alterar os dados


class Jogo{
  private _nome: string;
  private _dificuldade: number;

  constructor(nome: string, dificuldade: number){
    this._nome = nome;
    this._dificuldade = dificuldade;
  }

  // GETTERS
  // Retornam os valores dos atributos privados
  // Pegar o valor do atributo sem acessar a propriedade diretamente
  // Os métodos getter não precisam de parênteses
  // O nome do método é sempre get + nome do atributo e em camelCase
  get getNome(): string {
    console.log("=== MÉTODO GET ===")
    return `JOGO: ${this._nome}`;
  }

  //SetTERS
  // Modificam os valores dos atributos privados
  // Passar/alterar o valor do atributo sem acessar a propriedade diretamente
  // Os métodos setter não precisam de parênteses
  // O nome do método é sempre set + nome do atributo e em camelCase
  // OBS.: Para acessar o valor do atributo privado, uso o this._nome
  // OBS.: Os métodos setter precisam de um argumento
  set setNome(nomeNovo: string) {
    console.log("=== MÉTODO SET ===")
    this._nome = nomeNovo;
  }
}




//Instancio o objeto
const jogo1 = new Jogo('Super Mario', 2);

//Chamo o método getter para exibir o nome do jogo
//Não preciso usar parênteses
console.log(jogo1.getNome); // Super Mario

jogo1.setNome = 'Mario Kart';

console.log(jogo1.getNome);
