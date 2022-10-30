import { Express } from "express";
import CarrinhoRotas from "./Carrinho";
import ItemCarrinhoRotas from "./ItemCarrinho";
import ProdutoRotas from "./ProdutoRotas";
import UsuarioRotas from "./UsuarioRotas";

export default function AplicarRotas (app: Express){
    ProdutoRotas(app);
    UsuarioRotas(app);
    ItemCarrinhoRotas(app);
    CarrinhoRotas(app);
}