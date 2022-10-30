import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
// import MockUsuarioController from "../controller/MockUsuarioController";
// import MockUsuarioRepository from "../repository/MockUsuarioRepository";
import Form from 'react-bootstrap/Form';
import { IUsuario } from "../interfaces/usuario";
import { ContextoAutenticacao } from "../context/contextoAutenticacao";

const CreateUserPage = () => {
    const navigate = useNavigate();

    const {cadastro, usuario} = useContext(ContextoAutenticacao);
    const [senha, setSenha] = useState("");
    const [senhaValidacao, setsenhaValidacao] = useState("");
    const [email, setEmail] = useState("");
    const [erroMsg, setErroMsg] = React.useState(false)
    let msg;
    let status: boolean;

    const create = (evento: React.FormEvent) => {

        if (senha !== senhaValidacao) {
            msg = 'Senhas não coincidem';
            setErroMsg(true);
        }

        evento.preventDefault();

        cadastro(email, senha).then(() => status = true).catch(() => status = false);

        if (status == true) {
            navigate("/");
        } else {
            msg = 'Email em uso!';
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
            <form onSubmit={create}>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" value={email} data-testid="email" onChange={(evento) => setEmail(evento.target.value)} />
                <label htmlFor="senha">Senha</label>
                <input type="password" name="senha" id="senha" data-testid="password" value={senha} onChange={(evento) => setSenha(evento.target.value)} />
                <label htmlFor="senhaValidacao">Digite a senha novamente</label>
                <input type="password" name="senhaValidacao" id="senhaValidacao" data-testid="password-validade" value={senhaValidacao} onChange={(evento) => setsenhaValidacao(evento.target.value)} />
                <Button variant="primary" type="submit" data-testid="cadastrar">Enviar</Button>
            </form>
        </div>
    )
}

export default CreateUserPage;