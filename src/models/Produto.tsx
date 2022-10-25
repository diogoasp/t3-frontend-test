import { IProduto } from "../interfaces/produto";

export default class MockProduto implements IProduto {
  _id: number | undefined;
  nome: string | undefined;
  descricao: string | undefined;
  valor: number | undefined;

  constructor(b: Partial<MockProduto> = {}) {
    Object.assign(this, b);
  }


}