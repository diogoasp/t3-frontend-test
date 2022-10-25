import { IProduto } from "./produto";

export interface IProdutoController {
  getAll(): IProduto[];
  getProduto(_id: string): IProduto;
  setProduto(produto: IProduto): boolean;
  deleteProduto(_id: string): void;
}
