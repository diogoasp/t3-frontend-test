import { IUsuario } from "../interfaces/IUsuario";

export default class Usuario implements IUsuario {
    nome: string;
    email: string;
    senha: string;
    permissao: number;

    constructor(nome: string, email: string, senha: string, permissao?: number){
        this.nome = nome;
        this.email = email;
        this.senha = senha;
        this.permissao = permissao ?? 1;
    }
}