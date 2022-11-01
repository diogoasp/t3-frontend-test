import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ICarrinho } from "../interfaces/carrinho";
import { IUsuario } from "../interfaces/usuario";
import { criarSessao, registrarSessao } from "../services/Api";

export type ContextoValores = {
    autenticado: boolean,
    usuario: IUsuario,
    loading: boolean,
    carrinho: ICarrinho,
    login: (email: string, senha: string) => Promise<boolean>,
    cadastro: (email: string, senha: string) => Promise<boolean>,
    logout: () => void
}

const valoresIniciais = {
    autenticado: false,
    loading: false, 
    usuario: {_id:"", email:"", senha:"", role: 1},
    carrinho: {_id:"", usuario: {_id:"", email:"", senha:"", role: 1}, itens:[], total: 0},
    login: async (): Promise<boolean> => {return false}, 
    cadastro: async (): Promise<boolean> => {return false},
    logout: () => {},
}

export interface props {
    children: JSX.Element | JSX.Element[]
}

export const ContextoAutenticacao = createContext<ContextoValores>(valoresIniciais);

export const ProvedorAutenticacao = ({children}: props) => {
    const navigate = useNavigate();
    const [usuario, setUsuario] = useState({_id:"", email:"", senha:"", role: 1});
    const [carrinho, setCarrinho] = useState({_id:"", usuario: {_id:"", email:"", senha:"", role: 1}, itens:[], total: 0});
    const [loading, setLoading] = useState(true);
    const [autenticado, setAutenticado] = useState(false);

    useEffect(() =>{
        const usuarioRecuperado = localStorage.getItem("usuario");

        if(usuarioRecuperado){
            setUsuario(JSON.parse(usuarioRecuperado))
        }
        setLoading(false);
    }, []);

    const login = async (email: string, senha: string): Promise<boolean> => {
        const response = await criarSessao(email, senha);

        const usuarioLogado = response.data.usuario;
        const carrinho = response.data.carrinho;
        
        localStorage.setItem("usuario", JSON.stringify(usuarioLogado));
        localStorage.setItem("carrinho", JSON.stringify(carrinho));
        
        setUsuario(usuarioLogado);
        setCarrinho(carrinho);
        setAutenticado(true);
        navigate("/produtos");
        
        return true;
    };

    const logout = () => {
        localStorage.removeItem("usuario");
        localStorage.removeItem("carrinho");
        const limparUsuario = {_id:"", email:"", senha:"", role: 1}
        setUsuario(limparUsuario);
        navigate("/")
    }

    const cadastro = async (email: string, senha: string): Promise<boolean> => {
        const response = await registrarSessao(email, senha);

        const novoUsuario = response.data.usuario;
        
        setUsuario(novoUsuario);
        navigate("/");
        
        return true;
    };

    return (
        <ContextoAutenticacao.Provider value={{autenticado, usuario, carrinho, loading, login, cadastro, logout}}>
            {children}
        </ContextoAutenticacao.Provider>
    );
}