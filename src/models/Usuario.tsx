import { IUsuario } from "../interfaces/usuario";

export default class MockUsuario implements IUsuario {

  _id: number | undefined;
  email: string | undefined;
  senha: string | undefined;
  role: number | undefined;

  constructor(b: Partial<MockUsuario> = {}) {
    Object.assign(this, b);
  }
}