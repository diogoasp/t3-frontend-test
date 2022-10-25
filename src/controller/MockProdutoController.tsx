import { IProduto } from "../interfaces/produto";
import { IProdutoController } from "../interfaces/produtoController";
import { IProdutoRepository } from "../interfaces/produtoRepository";
import MockProduto from "../models/Produto";
import MockProdutoRepository from "../repository/MockProdutoRepository";

export default class MockProdutoController implements IProdutoController {

  private repo: IProdutoRepository;

  constructor() {
    this.repo = MockProdutoRepository.getInstance();
  }

  getAll(): IProduto[] {
    return this.repo.getAll();
  }

  getProduto(_id: number): IProduto {
    let produto = this.repo.getProduto(_id);
    if (produto === undefined) {
      return new MockProduto();
    }
    return this.repo.getProduto(_id);
  }
  setProduto(produto: IProduto): boolean {
    try {
      this.repo.setProduto(produto);
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
  deleteProduto(_id: number): boolean {
    try {
      this.repo.deleteProduto(_id);
      return true;
    } catch (error) {
      return false;
    }
  }

}