import Usuario from "../database/schemas/UsuarioTabela";
import { IRepository } from "../interfaces/IRepository";
import { IUsuario } from "../interfaces/IUsuario";

export default class UsuarioRepository implements IRepository<IUsuario> {
    
    async getByName(email: string): Promise<IUsuario | null> {
        return await Usuario.findOne({email});
    }
    
    async save(usuario: IUsuario): Promise<void> {
        const data = await Usuario.create(usuario);
    }

    async delete(id: string): Promise<void> {
        const prod = await this.getById(id);
        const data = await Usuario.remove(prod);
        console.log(data);
    }

    async update(id: string, usuario: IUsuario): Promise<void> {
        let prod = await this.getById(id);
        prod = usuario;
        const data = await Usuario.updateOne(prod);
        console.log(data)
    }
    
    async getAll(): Promise<IUsuario[]> {
        const usuario = await Usuario.find({});
        return usuario
    }

    async getById(id: string): Promise<IUsuario | null> {
        return await Usuario.findById(id);
    }

    async login(email: string): Promise<IUsuario> {
        const usuario = await Usuario.findOne({email});
        
        if(usuario === null) throw new Error("Usuario não encontrado.");
        return usuario
    }

}