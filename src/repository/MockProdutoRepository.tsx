import { IProduto } from "../interfaces/produto";
import { IProdutoRepository } from "../interfaces/produtoRepository";

export default class MockProdutoRepository implements IProdutoRepository {
  private _id: number = 3;
  private productList = [
    {
      "nome": "Monitor",
      "descricao": "Monitor, 16:9, 24 polegadas",
      "valor": 900.50,
      "_id": 1
    },
    {
      "nome": "Mouse",
      "descricao": "1600dpi, led",
      "valor": 60.1,
      "_id": 2
    }
  ];

  public getId(): number {
    return this._id++;
  }

  public getAll(): { "nome": string, "descricao": string, "valor": number, "_id": number }[] {
    return this.productList;
  }

  public getProduto(_id: number): object {
    return this.productList.filter((d) => d._id === _id)[0];
  }

  public setProduto(produto: { "nome": string, "descricao": string, "valor": number, "_id": number }): boolean {
    try {
      if (produto._id === undefined) {
        produto._id = this.getId();
        this.productList.push(produto);
      } else {
        this.productList.filter((d) => d._id === produto._id)[0]["nome"] = produto.nome;
        this.productList.filter((d) => d._id === produto._id)[0]["descricao"] = produto.descricao;
        this.productList.filter((d) => d._id === produto._id)[0]["valor"] = produto.valor;
      }
    } catch (error) {
      return false;
    }
    return true;
  }

  public deleteProduto(_id: number): void {
    this.productList = this.productList.filter((d) => d._id != _id);
  }

}