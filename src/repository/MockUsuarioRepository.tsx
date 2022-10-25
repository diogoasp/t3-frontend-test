import { IUsuario } from "../interfaces/usuario";
import { IUsuarioRepository } from "../interfaces/usuarioRepository";

export default class MockUsuarioRepository implements IUsuarioRepository {
    
    private usuarioDefault = {_id: 1, "email":"admin@gmail.com", "senha":"123"}
    
    verificarUsuario(email: string, senha: string): boolean {
        if(this.usuarioDefault.email != email) return false;
        return true;
    }

}