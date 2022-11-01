import axios from "axios";
import { IItemCarrinho } from "../interfaces/itemCarrinho";
import { IProduto } from "../interfaces/produto";

export const api = axios.create({baseURL: "http://localhost:8081"});

export const criarSessao = async (email: string, senha: string) => {
    return api.post("/login", {email, senha});
}

export const registrarSessao = async (email: string, senha: string) => {
    return api.post("/cadastrar", {email, senha});
}

export const produtosDisponiveis = async () => {
    return api.get("/produtos");
}

export const deletarProduto = async (id: string) => {
    return api.delete("/produto/"+id);
}

export const deletarItemCarrinho = async (id: string) => {
    return api.delete("/itemCarrinho/"+id);
}

export const atualizarProduto = async (id: string, data: IProduto) => {
    if(id == ""){
        return api.post("/produto", data);
    }else{
        return api.patch("/produto/"+id, data);
    }
}

export const adicionarItemCarrinho = async (id: string, data: IItemCarrinho) => {
    if(id == ""){
        return api.post("/itemCarrinho", data);
    }else{
        return api.patch("/itemCarrinho/"+id, data);
    }
}

export const atualizarCarrinho = async (id: string, data: IItemCarrinho[]) => {
    if(id == ""){
        // return api.post("/carrinho", data);
    }else{
        return api.patch("/carrinho/"+id, data);
    }
}

export const buscarProduto = async (id: string) => {
    return api.get("/produto/"+id);
}

export const getCarrinho = async (id: string) => {
    return api.get("/carrinho/"+id);
}

export const getItemCarrinho = async (id: string) => {
    return api.get("/itemCarrinho/"+id);
}

