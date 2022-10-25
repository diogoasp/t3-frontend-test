import { IUsuario } from "../interfaces/usuario";
import { IUsuarioRepository } from "../interfaces/usuarioRepository";

export default class MockUsuarioRepository implements IUsuarioRepository {
    
    constructor(private usuario: IUsuario){}
    
    verificarUsuario(usuario: IUsuario): boolean {
        throw new Error("Method not implemented.");
    }

}