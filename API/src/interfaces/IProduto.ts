import { ObjectId } from "mongodb";

export interface IProduto {
    // _id: ObjectId;
    nome: string;
    descricao: string;
    valor: number;
}