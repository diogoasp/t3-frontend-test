import { IUsuario } from "../interfaces/usuario";

export default class MockUsuario implements IUsuario {

  _id: number;
  email: string;
  senha: string;
  role: number;

  constructor(id: number, email: string, senha: string, role: number) {
    this._id = id;
    this.email = email;
    this.senha = senha;
    this.role = role;
  }
}