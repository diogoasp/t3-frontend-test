import ItemCarrinho from "../database/schemas/ItemCarrinhoTabela";
import { IItemCarrinho } from "../interfaces/IItemCarrinho";
import { IRepository } from "../interfaces/IRepository";

export default class ItemCarrinhoRepository implements IRepository<IItemCarrinho> {
    
    async getByName(name: string): Promise<IItemCarrinho | null> {
        return null;
    }
    
    async save(item: IItemCarrinho): Promise<void> {
        await ItemCarrinho.create(item);
    }

    async delete(id: string): Promise<void> {
        await ItemCarrinho.findByIdAndDelete(id);
    }

    async update(id: string, item: IItemCarrinho): Promise<void> {
        await ItemCarrinho.findByIdAndUpdate(id, item);
    }
    
    async getAll(): Promise<IItemCarrinho[]> {
        return [];
    }

    async getById(id: string): Promise<IItemCarrinho | null> {
        return await ItemCarrinho.findById(id);
    }
}