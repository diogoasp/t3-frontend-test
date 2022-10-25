import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MockUsuarioController from "../controller/MockUsuarioController";
import MockUsuarioRepository from "../repository/MockUsuarioRepository";

const LoginPage = () => {
    const navigate = useNavigate();

    const [senha, setSenha] = useState("");
    const [email, setEmail] = useState("");
    const [erroMsg, setErroMsg] = React.useState(false)

    const login = (evento: React.FormEvent) => {

        const controller = new MockUsuarioController(new MockUsuarioRepository());

        evento.preventDefault();
        if (controller.loginUsuario(email, senha)) {
            console.log("Login Sucesso!");
            navigate("/produtos")
        } else {
            setErroMsg(true);
            console.log("Login falhou!");
        }

    };

    return (

        <div>
            {erroMsg ?
                <div data-testid="erro">
                    <p>Usuário ou senha incorretos!</p>
                </div>
                : null}
            <form onSubmit={login}>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" value={email} data-testid="email" onChange={(evento) => setEmail(evento.target.value)} />
                <label htmlFor="senha">Senha</label>
                <input type="password" name="senha" id="senha" data-testid="password" value={senha} onChange={(evento) => setSenha(evento.target.value)} />
                <button type="submit" data-testid="login">Entrar</button>
                <button type="submit" data-testid="create">Registrar</button>
            </form>
        </div>
    )
}

export default LoginPage;