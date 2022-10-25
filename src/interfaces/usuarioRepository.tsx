import { IUsuario } from "./usuario";

export interface IUsuarioRepository{   
    verificarUsuario(email: string, senha: string): boolean
}