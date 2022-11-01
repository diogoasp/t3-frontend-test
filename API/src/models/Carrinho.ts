import { ObjectId } from "mongodb";
import { ICarrinho } from "../interfaces/ICarrinho";
import { IItemCarrinho } from "../interfaces/IItemCarrinho";
import { IUsuario } from "../interfaces/IUsuario";

export default class Carrinho implements ICarrinho {
    _id: ObjectId | undefined;
    usuario: IUsuario;
    itens: IItemCarrinho[];
    total: number = 0;

    constructor(usuario: IUsuario, itens: IItemCarrinho[] = [], id?: ObjectId) {
        this.usuario = usuario;
        this.itens = itens;
        this.calcularTotal();
        this._id = id ?? undefined;
    }

    public calcularTotal() {
        this.itens.forEach((elemento) => {
            this.total += elemento.valor ?? 0;
        });
    }
}