export class Vaga {
  id: number;
  nome: string;
  foto: string;
  descricao: string;
  salario: number;

  constructor (id: number, nome: string, foto: string, descricao: string, salario: number) {
    this.id = id;
    this.nome = nome;
    this.foto = foto;
    this.descricao = descricao;
    this.salario = salario;
  }
}