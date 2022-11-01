import { ObjectId } from "mongodb"

export interface IRepository<T> {
    getAll(): Promise<T[]>
    getById(id: string): Promise<T | null>
    save(object: T): Promise<ObjectId>
    delete(id: string): Promise<void>
    update(id: string, object: T): Promise<void>
    getByName(email: string): Promise<T | null>
}