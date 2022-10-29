import { ObjectId } from "mongodb";
import { IProduto } from "../interfaces/IProduto";

export default class Produto implements IProduto {
    _id: ObjectId | undefined;
    nome: string;
    descricao: string;
    valor: number;

    constructor(nome: string, descricao: string, valor: number, id?: ObjectId){
        this.nome = nome;
        this.descricao = descricao;
        this.valor = valor
        this._id = id ?? undefined;
    }

}