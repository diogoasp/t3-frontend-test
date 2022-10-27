import { IProduto } from "./IProduto";

export interface IRepository {
    getAll(): Promise<IProduto[]>
    getById(id: string): Promise<IProduto>
    save(produto: IProduto): Promise<void>
    delete(id: string): Promise<void>
    update(id: string, produto: IProduto): Promise<void>
}