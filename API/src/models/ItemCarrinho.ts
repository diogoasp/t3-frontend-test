import { ObjectId } from "mongodb";
import { IItemCarrinho } from "../interfaces/IItemCarrinho";
import { IProduto } from "../interfaces/IProduto";

export default class ItemCarrinho implements IItemCarrinho {
    _id: ObjectId | undefined;
    produto: IProduto;
    quantidade: number;
    valor: number = 0;

    constructor(produto: IProduto, quantidade: number, valor: number, id?: ObjectId){
        this.produto = produto;
        this.quantidade = quantidade;
        this._id = id ?? undefined;
        this.setValor();
    }

    public setValor(): void {
        this.valor = this.produto.valor * this.quantidade;
    }
}