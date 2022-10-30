import { ObjectId } from "mongodb";
import { IUsuario } from "../interfaces/IUsuario";

export default class Usuario implements IUsuario {
    _id: ObjectId | undefined;
    nome: string;
    email: string;
    senha: string;
    permissao: number;

    constructor(nome: string, email: string, senha: string, permissao?: number, id?: ObjectId){
        this.nome = nome;
        this.email = email;
        this.senha = senha;
        this.permissao = permissao ?? 1;
        this._id = id ?? undefined;
    }
}