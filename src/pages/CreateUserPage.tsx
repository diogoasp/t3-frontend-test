import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import MockUsuarioController from "../controller/MockUsuarioController";
import MockUsuarioRepository from "../repository/MockUsuarioRepository";
import Form from 'react-bootstrap/Form';
import { Alert } from "react-bootstrap";


const CreateUserPage = () => {
    const [senha, setSenha] = useState("");
    const [senhaValidacao, setsenhaValidacao] = useState("");
    const [email, setEmail] = useState("");
    const [state, setStateMsg] = React.useState({ msg: "", erro: false });

    const controller = new MockUsuarioController(new MockUsuarioRepository());
    const create = (evento: React.FormEvent) => {
        evento.preventDefault();
        if (email === "" || senha === "" || senhaValidacao === "") {
            return;
        }

        if (senha !== senhaValidacao) {
            setStateMsg({ msg: 'Senhas não coincidem.', erro: true });
            return;
        }
        if (controller.setUsuario(email, senha)) {
            setStateMsg({ msg: 'Cadastro realizado com sucesso!', erro: false });
            return;
        } else {
            setStateMsg({ msg: 'Email em uso!', erro: true });
            return;
        }

    };

    return (
        <div className="flex">
            <div id="boxLogin">

                <h1 className="mb-2" id='titulo' >Cadastre-se</h1>
                {state.erro && state.msg !== "" ?
                    <div id="erro">
                        <Alert key="danger" variant="danger" id="msg">
                            {state.msg}
                        </Alert>
                    </div>
                    : null}
                {!state.erro && state.msg !== "" ?
                    <div id="success">
                        <Alert key="success" variant="success">
                            {state.msg}
                            <Link className="btn btn-success mt-3" to={{ pathname: `/` }}>Voltar para tela de Login.</Link>
                        </Alert>
                    </div>
                    : null
                }
                <Form onSubmit={create} data-testid="createform">
                    <Form.Group className="mb-2" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" name="email" id="email" value={email} data-testid="email" onChange={(evento) => setEmail(evento.target.value)} required />
                    </Form.Group>
                    <Form.Group className="mb-2" controlId="formBasicPassword">
                        <Form.Label>Senha</Form.Label>
                        <Form.Control type="password" name="senha" id="senha" data-testid="password" value={senha} onChange={(evento) => setSenha(evento.target.value)} required />
                    </Form.Group>
                    <Form.Group className="mb-2" controlId="formBasicRepeatPassword">
                        <Form.Label>Digite a senha novamente</Form.Label>
                        <Form.Control type="password" name="senhaValidacao" id="senhaValidacao" data-testid="password-validate" value={senhaValidacao} onChange={(evento) => setsenhaValidacao(evento.target.value)} required />
                    </Form.Group>
                    <Button className="mb-2" variant="dark" type="submit" id="cadastrar">Enviar</Button>
                </Form>
            </div>
        </div>
    )
}

export default CreateUserPage;