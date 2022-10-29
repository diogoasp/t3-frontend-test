import { ObjectId } from "mongodb";

export interface IProduto {
    _id: ObjectId | undefined;
    nome: string;
    descricao: string;
    valor: number;
}