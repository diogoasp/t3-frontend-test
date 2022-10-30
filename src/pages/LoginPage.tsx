import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { IUsuario } from "../interfaces/usuario";
import { ContextoAutenticacao } from "../context/contextoAutenticacao";

interface loginProps {
    stateMsg: string | undefined;
}


const LoginPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const {login, usuario} = useContext(ContextoAutenticacao);

    const [senha, setSenha] = useState("");
    const [email, setEmail] = useState("");
    const [erroMsg, setErroMsg] = useState(false)
    const [notificationMsg, setnotificationMsg] = useState(false)
    let msg;
    let status: boolean;
    
    const submit = (evento: React.FormEvent) => {
        evento.preventDefault();

        login(email, senha).then(() => status = true).catch(() => status = false);

        if(status != true) {
            msg = 'Usuário ou senha incorretos!';
            setErroMsg(true);
        } else {
            console.log(usuario)
            navigate("/produtos");
        }

    }

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
            <form onSubmit={submit}>
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