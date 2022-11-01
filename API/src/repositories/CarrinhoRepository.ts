import { ObjectId } from "mongodb";
import Carrinho from "../database/schemas/CarrinhoTabela";
import { ICarrinho } from "../interfaces/ICarrinho";
import { IRepository } from "../interfaces/IRepository";

export default class CarrinhoRepository implements IRepository<ICarrinho> {
    
    async getByName(idUsuario: string): Promise<ICarrinho | null> {
        return await Carrinho.findOne({usuario: idUsuario});
    }
    
    async save(carrinho: ICarrinho): Promise<ObjectId> {
        const data = await Carrinho.create(carrinho);
        return data._id;
    }

    async delete(id: string): Promise<void> {
        await Carrinho.findByIdAndDelete(id);
    }

    async update(id: string, carrinho: ICarrinho): Promise<void> {
        await Carrinho.findByIdAndUpdate(id, carrinho);
    }
    
    async getAll(): Promise<ICarrinho[]> {
        return await Carrinho.find({});
    }

    async getById(id: string): Promise<ICarrinho | null> {
        return await Carrinho.findById(id);
    }
}