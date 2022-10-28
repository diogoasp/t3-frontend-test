import { IProduto } from "../interfaces/IProduto";
import { IRepository } from "../interfaces/IRepository";
import Produto from "../database/schemas/ProdutoTabela";

export default class ProdutoRepository implements IRepository<IProduto> {
    
    async getByName(name: string): Promise<IProduto | null> {
        return await Produto.findOne({name});
    }
    
    async save(produto: IProduto): Promise<void> {
        const data = await Produto.create(produto);
    }

    async delete(id: string): Promise<void> {
        const prod = await this.getById(id);
        const data = await Produto.remove(prod);
        console.log(data);
    }

    async update(id: string, produto: IProduto): Promise<void> {
        let prod = await this.getById(id);
        prod = produto;
        const data = await Produto.updateOne(prod);
    }
    
    async getAll(): Promise<IProduto[]> {
        return await Produto.find({});
    }

    async getById(id: string): Promise<IProduto | null> {
        return await Produto.findById(id);
    }
}