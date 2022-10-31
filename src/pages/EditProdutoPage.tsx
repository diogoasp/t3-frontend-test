import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import MockProdutoController from "../controller/MockProdutoController";

const EditProdutoPage = () => {
    const { id } = useParams();
    let idInt = parseInt(id !== undefined ? id : "0")

    const controller = new MockProdutoController();
    let produto = controller.getProduto(idInt);

    const navigate = useNavigate();

    const [nome, setNome] = useState("");
    const [descricao, setDescricao] = useState("");
    const [valor, setValor] = useState("");

    const setOrUpdate = (evento: React.FormEvent) => {
        evento.preventDefault();
        produto.nome = nome !== '' ? nome : produto.nome;
        produto.descricao = descricao !== '' ? descricao : produto.descricao;
        produto.valor = valor !== '' ? parseFloat(valor) : produto.valor;
        if (controller.setProduto(produto)) {
            navigate("/produtos", { state: '1' })
        } else {
            console.log("Login falhou!");
        }

    };

    return (
        <div className='d-flex flex-column justify-content-center m-5 w-50 mx-auto'>
            <h2>Editar Produto</h2>

            <Form onSubmit={setOrUpdate}>
                <Form.Group className="mb-2" controlId="formBasicNome">
                    <Form.Label>Nome</Form.Label>
                    <Form.Control type="text" name="nome" placeholder={produto.nome} value={nome} onChange={(evento) => setNome(evento.target.value)} />
                </Form.Group>
                <Form.Group className="mb-2" controlId="formBasicDescription">
                    <Form.Label>Descrição</Form.Label>
                    <Form.Control type="text" name="descricao" placeholder={produto.descricao} value={descricao} onChange={(evento) => setDescricao(evento.target.value)} />
                </Form.Group>
                <Form.Group className="mb-2" controlId="formBasicCost">
                    <Form.Label>Valor</Form.Label>
                    <Form.Control type="text" name="valor" placeholder={produto.valor !== undefined ? produto.valor.toString() : "0"} value={valor} onChange={(evento) => setValor(evento.target.value)} />
                </Form.Group>
                <Button className="mb-2" variant="dark" type="submit" id='enviar'>Enviar</Button>
            </Form>
        </div>
    )
}

export default EditProdutoPage;