import { IProduto } from "./produto";

export interface IProdutoController {
  getAll(): IProduto[];
  getProduto(_id: number): IProduto;
  setProduto(produto: IProduto): boolean;
  deleteProduto(_id: number): boolean;
}
