import { IProduto } from "../interfaces/produto";
import { IProdutoRepository } from "../interfaces/produtoRepository";

export default class MockProdutoRepository implements IProdutoRepository {
  private static instance: MockProdutoRepository;
  private _id: number = 3;
  private productList: IProduto[] = [
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

  private constructor() { }

  public static getInstance(): MockProdutoRepository {
    if (!MockProdutoRepository.instance) {
      MockProdutoRepository.instance = new MockProdutoRepository();
    }

    return MockProdutoRepository.instance;
  }


  public getId(): number {
    return this._id++;
  }

  public getAll(): IProduto[] {
    return this.productList;
  }

  public getProduto(_id: number): IProduto {
    return this.productList.filter((d) => d._id === _id)[0];
  }

  public setProduto(produto: IProduto): boolean {
    try {
      if (produto._id === undefined) {
        produto._id = this.getId();
        this.productList.push(produto);
      } else {
        this.productList.filter((d) => d._id === produto._id)[0]["nome"] = produto.nome;
        this.productList.filter((d) => d._id === produto._id)[0]["descricao"] = produto.descricao;
        this.productList.filter((d) => d._id === produto._id)[0]["valor"] = produto.valor;
      }
      console.log(this.productList);

    } catch (error) {
      return false;
    }
    return true;
  }

  public deleteProduto(_id: number): void {
    if (this.productList.filter((d) => d._id === _id).length === 0) {
      throw new Error("Produto não encontrado.");
    }
    this.productList = this.productList.filter((d) => d._id !== _id);
  }

}