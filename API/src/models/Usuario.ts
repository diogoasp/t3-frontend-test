import { ObjectId } from "mongodb";
import { IUsuario } from "../interfaces/IUsuario";

export default class Usuario implements IUsuario {
    _id: ObjectId | undefined;
    email: string;
    senha: string;
    permissao: number;

    constructor(email: string, senha: string, permissao?: number, id?: ObjectId){
        this.email = email;
        this.senha = senha;
        this.permissao = permissao ?? 1;
        this._id = id ?? undefined;
    }
}