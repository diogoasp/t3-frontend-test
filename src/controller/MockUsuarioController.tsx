import { IUsuarioController } from "../interfaces/usuarioController";
import { IUsuarioRepository } from "../interfaces/usuarioRepository";

export default class MockUsuarioController implements IUsuarioController {
    
    constructor(private repo: IUsuarioRepository){}

    loginUsuario(repo: IUsuarioRepository): boolean {
        return true;
    }
}