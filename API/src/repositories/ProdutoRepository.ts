import { ObjectId } from "mongodb";
import { IProduto } from "../interfaces/IProduto";
import { IRepository } from "../interfaces/IRepository";
import Produto from "../database/schemas/ProdutoTabela";

export default class ProdutoRepository implements IRepository {
    
    save(produto: IProduto): Promise<void> {
        throw new Error("Method not implemented.");
    }
    delete(id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
    update(id: string, produto: IProduto): Promise<void> {
        throw new Error("Method not implemented.");
    }
    
    async getAll(): Promise<IProduto[]> {
        const produto = await Produto.find({});
        console.log(produto)
        return produto
    }

    async getById(id: string): Promise<IProduto> {
        const produto = await Produto.findById(id);

        if(produto === null) throw new Error("Method not implemented.");
        return produto
    }
}