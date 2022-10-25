import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import MockUsuarioController from "../controller/MockUsuarioController";
import MockUsuarioRepository from "../repository/MockUsuarioRepository";

const LoginPage = () =>{
    const navigate = useNavigate();

    const [senha, setSenha] = useState("");
    const [email, setEmail] = useState("");
    
    const login = (evento: React.FormEvent) => {

        const controller = new MockUsuarioController(new MockUsuarioRepository);

        evento.preventDefault();
        if (controller.loginUsuario(email, senha)) {
            navigate("/products")
        } else {
            console.log("Login falhou!");
        }
        
    };

    return (

        <div>
            <form onSubmit={login}>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" value={email} onChange={(evento) => setEmail(evento.target.value)}/>
                <label htmlFor="senha">Senha</label>
                <input type="password" name="senha" id="senha" value={senha} onChange={(evento) => setSenha(evento.target.value)}/>
                <button type="submit">Entrar</button>
                <button type="submit">Registrar</button>
            </form>
        </div>
    )
}

export default LoginPage;