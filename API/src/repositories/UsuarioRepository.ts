import { ObjectId } from "mongodb";
import Usuario from "../database/schemas/UsuarioTabela";
import { IRepository } from "../interfaces/IRepository";
import { IUsuario } from "../interfaces/IUsuario";

export default class UsuarioRepository implements IRepository<IUsuario> {
    
    async getByName(email: string): Promise<IUsuario | null> {
        return await Usuario.findOne({email});
    }
    
    async save(usuario: IUsuario): Promise<ObjectId> {
        const data = await Usuario.create(usuario);
        return data._id;
    }

    async delete(id: string): Promise<void> {
        await Usuario.findByIdAndDelete(id);
    }

    async update(id: string, usuario: IUsuario): Promise<void> {
        await Usuario.findByIdAndUpdate(id, usuario);
    }
    
    async getAll(): Promise<IUsuario[]> {
        return await Usuario.find({});
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