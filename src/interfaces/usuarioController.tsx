import { IUsuario } from "./usuario";

export interface IUsuarioController {
    loginUsuario(email: string, senha: string): boolean;
}