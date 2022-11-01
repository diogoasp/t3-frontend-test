import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import { ContextoAutenticacao } from "../context/contextoAutenticacao";
import Form from 'react-bootstrap/Form';
import { Alert } from "react-bootstrap";

const LoginPage = () => {
    const { login } = useContext(ContextoAutenticacao);

    const [senha, setSenha] = useState("");
    const [email, setEmail] = useState("");
    const [erroMsg, setErroMsg] = useState(false)

    const submit = (evento: React.FormEvent) => {
        evento.preventDefault();

        login(email, senha).then().catch(() => setErroMsg(true));
    }

    return (

        <div className="flex">
            <div id="boxLogin">
                <h1 className="mb-2">Login</h1>
                {erroMsg ?
                    <div data-testid="erro">
                        <Alert key="danger" variant="danger" id="erro">
                            Email ou senha incorretos!
                        </Alert>
                    </div>
                    : null}
                <Form onSubmit={submit}>
                    <Form.Group className="mb-2" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" name="email" id="email" value={email} data-testid="email" onChange={(evento) => setEmail(evento.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-2" controlId="formBasicPassword">
                        <Form.Label>Senha</Form.Label>
                        <Form.Control type="password" name="senha" id="senha" data-testid="password" value={senha} onChange={(evento) => setSenha(evento.target.value)} />
                    </Form.Group>
                    <Button className="mb-2" variant="dark" type="submit" data-testid="login" id="login">Entrar</Button>
                </Form>
                <span>Não possui uma conta? </span> <br></br> <Link className="btn btn-dark mt-3" to={{ pathname: `novo` }}>Cadastre-se!</Link>
            </div>
        </div>
    )
}

export default LoginPage;