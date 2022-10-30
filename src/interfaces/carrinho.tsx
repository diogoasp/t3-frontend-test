import { IItemCarrinho } from "./itemCarrinho";
import { IUsuario } from "./usuario";

export interface ICarrinho {
    _id: string | undefined;
    usuario: IUsuario | undefined;
    itens: Array<IItemCarrinho> | undefined;
    total: number | undefined;
}