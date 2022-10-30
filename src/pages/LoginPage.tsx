import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import MockUsuarioController from "../controller/MockUsuarioController";
import MockUsuarioRepository from "../repository/MockUsuarioRepository";
import Form from 'react-bootstrap/Form';
import { IUsuario } from "../interfaces/usuario";

interface loginProps {
    stateMsg: string | undefined;
}


const LoginPage = ({ stateMsg }: loginProps) => {
    const navigate = useNavigate();
    const location = useLocation();

    const [senha, setSenha] = useState("");
    const [email, setEmail] = useState("");
    const [erroMsg, setErroMsg] = React.useState(false)
    const [notificationMsg, setnotificationMsg] = React.useState(false)
    // let msg = location.state.stateMsg;

    // msg !== undefined ? setnotificationMsg(true) : setnotificationMsg(false);
    let msg = "";
    const login = (evento: React.FormEvent) => {
        const controller = new MockUsuarioController(new MockUsuarioRepository());

        evento.preventDefault();
        if (controller.loginUsuario(email, senha)) {
            const u: IUsuario = controller.getUsuario(email);
            navigate("/produtos", { state: { user: u } });
        } else {
            msg = 'Usuário ou senha incorretos!';
            setErroMsg(true);
        }

    };

    return (

        <div>
            {erroMsg ?
                <div data-testid="erro">
                    <p>{msg}</p>
                </div>
                : null}
            {notificationMsg ?
                <div data-testid="notification">
                    <p>{msg}</p>
                </div>
                : null}
            <form onSubmit={login}>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" value={email} data-testid="email" onChange={(evento) => setEmail(evento.target.value)} />
                <label htmlFor="senha">Senha</label>
                <input type="password" name="senha" id="senha" data-testid="password" value={senha} onChange={(evento) => setSenha(evento.target.value)} />
                <Button variant="primary" type="submit" data-testid="login">Entrar</Button>
            </form>
            <span>Não possui uma conta? </span>  <Link to={{ pathname: `novo` }}>Cadastrar-se!</Link>
        </div>
    )
}

export default LoginPage;