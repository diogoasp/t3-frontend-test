import { IProduto } from "./produto";

export interface IItemCarrinho {
    _id: string | undefined;
    produto: IProduto | undefined;
    quantidade: number | undefined;
    valor: number;
}