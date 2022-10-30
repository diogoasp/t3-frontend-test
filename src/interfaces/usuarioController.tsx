import { IUsuario } from "./usuario";

export interface IUsuarioController {
    loginUsuario(email: string, senha: string): boolean;
    getUsuario(email: string): IUsuario;
    setUsuario(email: string, senha: string): boolean;
}