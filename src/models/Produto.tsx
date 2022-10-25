import { IProduto } from "../interfaces/produto";

export default class MockProduto implements IProduto {
  _id: number | undefined;
  nome: string;
  descricao: string;
  valor: number;

  constructor(produto: { "nome": string, "descricao": string, "valor": number, "_id": number }) {
    this._id = produto._id;
    this.nome = produto.nome;
    this.descricao = produto.descricao;
    this.valor = produto.valor;
  }




}