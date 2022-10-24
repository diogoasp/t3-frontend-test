import { IProduto } from "../interfaces/produto";

export default class MockProduto implements IProduto {
  _id: string;
  nome: string;
  descricao: string;
  valor: number;

  constructor(id: string, nome: string, descricao: string, valor: number) {
    this._id = id;
    this.nome = nome;
    this.descricao = descricao;
    this.valor = valor;
  }



}