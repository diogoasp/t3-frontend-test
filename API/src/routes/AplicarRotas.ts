import { Express } from "express";
import ProdutoRotas from "./ProdutoRotas";
import UsuarioRotas from "./UsuarioRotas";

export default function AplicarRotas (app: Express){
    ProdutoRotas(app);
    UsuarioRotas(app);
}