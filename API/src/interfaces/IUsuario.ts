import { ObjectId } from "mongodb";

export interface IUsuario {
    _id: ObjectId | undefined;
    email: string;
    senha: string;
    permissao: number;
}