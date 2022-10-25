import { IProduto } from "../interfaces/produto";
import { IProdutoController } from "../interfaces/produtoController";
import { IProdutoRepository } from "../interfaces/produtoRepository";
import MockProduto from "../models/Produto";

export default class MockProdutoController implements IProdutoController {

  private repo: IProdutoRepository;

  constructor(repo: IProdutoRepository) {
    this.repo = repo;
  }

  getAll(): IProduto[] {
    let resposta = this.repo.getAll();
    let produtos: IProduto[] = [];
    resposta.forEach(resp => {
      produtos.push(new MockProduto(resp))
    });
    return produtos;

  }

  getProduto(_id: string): IProduto {
    throw new Error("Method not implemented.");
  }
  setProduto(produto: IProduto): boolean {
    throw new Error("Method not implemented.");
  }
  deleteProduto(_id: string): void {
    throw new Error("Method not implemented.");
  }

}