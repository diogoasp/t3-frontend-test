import { IProduto } from "../interfaces/IProduto";
import { IRepository } from "../interfaces/IRepository";
import Produto from "../database/schemas/ProdutoTabela";
import { ObjectId } from "mongodb";

export default class ProdutoRepository implements IRepository<IProduto> {
    
    async getByName(name: string): Promise<IProduto | null> {
        return await Produto.findOne({name});
    }
    
    async save(produto: IProduto): Promise<ObjectId> {
        const data = await Produto.create(produto);
        return data._id;
    }

    async delete(id: string): Promise<void> {
        await Produto.findByIdAndDelete(id);
    }

    async update(id: string, produto: IProduto): Promise<void> {
        await Produto.findByIdAndUpdate(id, produto);
    }
    
    async getAll(): Promise<IProduto[]> {
        return await Produto.find({});
    }

    async getById(id: string): Promise<IProduto | null> {
        return await Produto.findById(id);
    }
}