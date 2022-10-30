import { ObjectId } from "mongodb";

export interface IUsuario {
    _id: ObjectId | undefined;
    nome: string;
    email: string;
    senha: string;
    permissao: number;
}