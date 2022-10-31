import { IUsuario } from "../interfaces/usuario";
import { IUsuarioRepository } from "../interfaces/usuarioRepository";

export default class MockUsuarioRepository implements IUsuarioRepository {

    private usuarioDefault = { _id: 1, "email": "admin@gmail.com", "senha": "123", "role": 0 };
    private usuarioComum = { _id: 2, "email": "u@u.com", "senha": "123", "role": 1 };

    verificarUsuario(email: string, senha: string): boolean {
        if (this.usuarioDefault.email != email && this.usuarioComum.email != email) return false;
        return true;
    }

    getUsuario(email: string): IUsuario {
        if (this.usuarioDefault.email === email) return this.usuarioDefault;
        return this.usuarioComum;
    }

    setUsuario(user: IUsuario): boolean {
        if (user.email === this.usuarioDefault.email || user.email === this.usuarioComum.email)
            return false;
        else return true;
    }

}