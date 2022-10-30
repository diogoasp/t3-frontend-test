import { ObjectId } from "mongodb";
import { IItemCarrinho } from "../interfaces/IItemCarrinho";
import { IProduto } from "../interfaces/IProduto";

export default class ItemCarrinho implements IItemCarrinho {
    _id: ObjectId | undefined;
    produto: IProduto;
    quantidade: number;

    constructor(produto: IProduto, quantidade: number, id?: ObjectId){
        this.produto = produto;
        this.quantidade = quantidade;
        this._id = id ?? undefined;
    }

    public getValor(): number {
        return this.produto.valor * this.quantidade;
    }
}