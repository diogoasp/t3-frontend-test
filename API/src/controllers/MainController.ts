import ProdutoRepository from "../repositories/ProdutoRepository";
import ProdutoController from "./ProdutoController";


const prodRepo = new ProdutoRepository();

export const produtoController = new ProdutoController(prodRepo);