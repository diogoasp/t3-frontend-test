import { IUsuario } from "./usuario";

export interface IUsuarioRepository{   
    verificarUsuario(usuario: IUsuario): boolean
}