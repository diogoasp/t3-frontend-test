import ProdutoRepository from "../repositories/ProdutoRepository";
import UsuarioRepository from "../repositories/UsuarioRepository";
import ProdutoController from "./ProdutoController";
import UsuarioController from "./UsuarioController";


const usuarioRepo = new UsuarioRepository();
const produtoRepo = new ProdutoRepository();

export const produtoController = new ProdutoController(produtoRepo);
export const usuarioController = new UsuarioController(usuarioRepo);