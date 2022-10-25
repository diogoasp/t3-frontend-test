import { IProduto } from "./produto";

export interface IProdutoRepository {
  getAll(): IProduto[];
  getProduto(_id: number): IProduto;
  setProduto(produto: IProduto): boolean;
  deleteProduto(_id: number): void;
}
