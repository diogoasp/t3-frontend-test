import { IUsuarioRepository } from "./usuarioRepository";

export interface IUsuarioController {
    loginUsuario(repo: IUsuarioRepository): boolean;
}