import { ObjectId } from "mongodb";
import { IProduto } from "./IProduto";

export interface IItemCarrinho {
    _id: ObjectId | undefined;
    produto: IProduto;
    quantidade: number;

    getValor(): number
}