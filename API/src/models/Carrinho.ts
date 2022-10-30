import { ObjectId } from "mongodb";
import { ICarrinho } from "../interfaces/ICarrinho";
import { IItemCarrinho } from "../interfaces/IItemCarrinho";
import { IUsuario } from "../interfaces/IUsuario";

export default class Carrinho implements ICarrinho {
    _id: ObjectId | undefined;
    usuario: IUsuario;
    itens: IItemCarrinho[] = [];
    total: number = 0;

    constructor(usuario: IUsuario, itens: IItemCarrinho[], id?: ObjectId) {
        this.usuario = usuario;
        this.itens = itens;
        this.total = this.calcularTotal();
        this._id = id ?? undefined;
    }

    public calcularTotal(): number{
        let soma = 0;
        if(this.itens == undefined || this.itens.length == 0) return soma;
        this.itens.forEach((elemento) => {
            soma += elemento.getValor();
        });

        return soma;
    }
}