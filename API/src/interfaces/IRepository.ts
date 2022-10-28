export interface IRepository<T> {
    getAll(): Promise<T[]>
    getById(id: string): Promise<T | null>
    save(object: T): Promise<void>
    delete(id: string): Promise<void>
    update(id: string, object: T): Promise<void>
    getByName(name: string): Promise<T | null>
}