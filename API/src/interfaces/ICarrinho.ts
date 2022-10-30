import { ObjectId } from "mongodb";
import { IItemCarrinho } from "./IItemCarrinho";
import { IUsuario } from "./IUsuario";

export interface ICarrinho {
    _id: ObjectId | undefined;
    usuario: IUsuario;
    itens: Array<IItemCarrinho>;
    total: number;

    calcularTotal(): void;
}