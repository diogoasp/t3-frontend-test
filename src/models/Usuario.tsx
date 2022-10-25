import { IUsuario } from "../interfaces/usuario";

export default class MockUsuario implements IUsuario{

  _id: number;
  email: string;
  senha: string;

  constructor(id: number, email: string, senha: string){
    this._id = id;
    this.email = email;
    this.senha = senha;
  }
}