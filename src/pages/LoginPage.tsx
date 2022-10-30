import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import MockUsuarioController from "../controller/MockUsuarioController";
import MockUsuarioRepository from "../repository/MockUsuarioRepository";
import Form from 'react-bootstrap/Form';
import { IUsuario } from "../interfaces/usuario";
import { Alert } from "react-bootstrap";

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

        <div className="flex">
        <div id="boxLogin">
            <h1 className="mb-2">Login</h1>
            {erroMsg ?
                <div data-testid="erro">
                    {/* <p>{msg}</p> */}
                    <Alert key="danger" variant="danger">
                        Email ou senha incorretos!
                    </Alert>
                </div>
                : null}
            {notificationMsg ?
                <div data-testid="notification">
                    {/* <p>{msg}</p> */}
                    <Alert key="success" variant="success">
                        Cadastro realizado com sucesso! <br></br>Entre na sua conta.
                    </Alert>
                </div>
                : null}
            <Form onSubmit={login}>
                <Form.Group className="mb-2" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name="email" id="email" value={email} data-testid="email" onChange={(evento) => setEmail(evento.target.value)} />
                </Form.Group>
                <Form.Group className="mb-2" controlId="formBasicPassword">
                    <Form.Label>Senha</Form.Label>
                    <Form.Control type="password" name="senha" id="senha" data-testid="password" value={senha} onChange={(evento) => setSenha(evento.target.value)} />
                </Form.Group>
                <Button className="mb-2" variant="dark" type="submit" data-testid="login">Entrar</Button>
            </Form>
            <span>Não possui uma conta? </span> <br></br> <Link className="btn btn-dark mt-3" to={{ pathname: `novo` }}>Cadastre-se!</Link>
        </div>
        </div>
    )
}

export default LoginPage;