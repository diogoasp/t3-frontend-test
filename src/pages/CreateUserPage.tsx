import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import MockUsuarioController from "../controller/MockUsuarioController";
import MockUsuarioRepository from "../repository/MockUsuarioRepository";
import Form from 'react-bootstrap/Form';
import { IUsuario } from "../interfaces/usuario";
import { Alert } from "react-bootstrap";

const CreateUserPage = () => {
    const navigate = useNavigate();

    const [senha, setSenha] = useState("");
    const [senhaValidacao, setsenhaValidacao] = useState("");
    const [email, setEmail] = useState("");
    const [erroMsg, setErroMsg] = React.useState(false)
    let msg;

    const create = (evento: React.FormEvent) => {

        if (senha !== senhaValidacao) {
            msg = 'Senhas não coincidem';
            setErroMsg(true);
        }

        const controller = new MockUsuarioController(new MockUsuarioRepository());

        evento.preventDefault();
        if (controller.setUsuario(email, senha)) {
            navigate("/", { state: { stateMsg: 'Cadastro realizado com sucesso!' } });
        } else {
            msg = 'Email em uso!';
            setErroMsg(true);
        }

    };

    return (

        <div className="flex">
        <div id="boxLogin">
            <h1 className="mb-2">Cadastre-se</h1>
            {erroMsg ?
                <div data-testid="erro">
                    <Alert key="danger" variant="danger">
                        Senhas não coincidem
                    </Alert>
                </div>
                : null}
                <Form onSubmit={create}>
                <Form.Group className="mb-2" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name="email" id="email" value={email} data-testid="email" onChange={(evento) => setEmail(evento.target.value)} />
                </Form.Group>
                <Form.Group className="mb-2" controlId="formBasicPassword">
                    <Form.Label>Senha</Form.Label>
                    <Form.Control type="password" name="senha" id="senha" data-testid="password" value={senha} onChange={(evento) => setSenha(evento.target.value)} />
                </Form.Group>
                <Form.Group className="mb-2" controlId="formBasicRepeatPassword">
                    <Form.Label>Digite a senha novamente</Form.Label>
                    <Form.Control type="password" name="senhaValidacao" id="senhaValidacao" data-testid="password-validade" value={senhaValidacao} onChange={(evento) => setsenhaValidacao(evento.target.value)} />
                </Form.Group>
                <Button className="mb-2" variant="dark" type="submit" data-testid="cadastrar">Enviar</Button>
            </Form>
        </div>
        </div>
    )
}

export default CreateUserPage;