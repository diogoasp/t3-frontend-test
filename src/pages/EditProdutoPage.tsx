import { Button, Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { IProduto } from "../interfaces/produto";
import { atualizarProduto, buscarProduto } from "../services/Api";

const EditProdutoPage = () => {
    const [produto, setProduto] = useState<IProduto>({ _id: "", nome: "", descricao: "", valor: 0 });
    const { id } = useParams<string>();

    const navigate = useNavigate();

    const [nome, setNome] = useState("");
    const [descricao, setDescricao] = useState("");
    const [valor, setValor] = useState("");

    useEffect(() => {
        if (id != undefined) buscarProduto(id ?? undefined).then(response => setProduto(response.data.produto));
    }, [id]);


    const setOrUpdate = (evento: React.FormEvent) => {
        evento.preventDefault();

        produto.nome = nome !== '' ? nome : produto.nome;
        produto.descricao = descricao !== '' ? descricao : produto.descricao;
        produto.valor = valor !== '' ? parseFloat(valor) : produto.valor;

        atualizarProduto(id ?? "", produto).then(response => response.data.produto);

        navigate("/produtos");
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
                    <Form.Control type="text" name="descricao" placeholder={produto.descricao} value={descricao || ""} onChange={(evento) => setDescricao(evento.target.value)} />
                </Form.Group>
                <Form.Group className="mb-2" controlId="formBasicCost">
                    <Form.Label>Valor</Form.Label>
                    <Form.Control type="text" name="valor" placeholder={produto.valor !== undefined ? produto.valor.toString() : "0"} value={valor || ""} onChange={(evento) => setValor(evento.target.value)} />
                </Form.Group>
                <Button className="mb-2" variant="dark" type="submit" id='enviar'>Enviar</Button>
            </Form>
        </div>
    )
}

export default EditProdutoPage;