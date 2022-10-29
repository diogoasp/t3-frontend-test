import ItemCarrinhoRepository from "../repositories/ItemCarrinhoRepository";
import CarrinhoRepository from "../repositories/CarrinhoRepository";
import ProdutoRepository from "../repositories/ProdutoRepository";
import UsuarioRepository from "../repositories/UsuarioRepository";
import ProdutoController from "./ProdutoController";
import UsuarioController from "./UsuarioController";
import CarrinhoController from "./CarrinhoController";
import ItemCarrinhoController from "./ItemCarrinhoController";
import AutenticacaoController from "./AutenticacaoController";


const usuarioRepo = new UsuarioRepository();
const produtoRepo = new ProdutoRepository();
const carrinhoRepo = new CarrinhoRepository();
const itemCarrinhoRepo = new ItemCarrinhoRepository();

export const produtoController = new ProdutoController(produtoRepo);
export const usuarioController = new UsuarioController(usuarioRepo);
export const carrinhoController = new CarrinhoController(carrinhoRepo);
export const itemCarrinhoController = new ItemCarrinhoController(itemCarrinhoRepo);
export const autenticacaoController = new AutenticacaoController(usuarioRepo, carrinhoRepo);