import { IUsuario } from "../interfaces/usuario";
import { IUsuarioController } from "../interfaces/usuarioController";
import { IUsuarioRepository } from "../interfaces/usuarioRepository";

export default class MockUsuarioController implements IUsuarioController {

    constructor(private repo: IUsuarioRepository) { }

    loginUsuario(email: string, senha: string): boolean {
        return this.repo.verificarUsuario(email, senha);
    }

    getUsuario(email: string): IUsuario {
        return this.repo.getUsuario(email);
    }
}