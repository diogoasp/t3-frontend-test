import { IProduto } from "../interfaces/IProduto";
import { IRepository } from "../interfaces/IRepository";
import Produto from "../database/schemas/ProdutoTabela";

export default class ProdutoRepository implements IRepository {
    
    async save(produto: IProduto): Promise<void> {
        const data = await Produto.create(produto);
        console.log(data);
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
        console.log(data)
    }
    
    async getAll(): Promise<IProduto[]> {
        const produto = await Produto.find({});
        return produto
    }

    async getById(id: string): Promise<IProduto> {
        const produto = await Produto.findById(id);

        if(produto === null) throw new Error("Method not implemented.");
        return produto
    }
}