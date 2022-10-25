import React, { useState } from "react";
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
        <div>
            <h2>Editar Produto</h2>
            <form onSubmit={setOrUpdate}>
                <div>
                    <label htmlFor="nome">Nome</label>
                    <input type="text" name="nome" placeholder={produto.nome} value={nome} onChange={(evento) => setNome(evento.target.value)} />
                </div>
                <div>
                    <label htmlFor="descricao">Descrição</label>
                    <input type="text" name="descricao" placeholder={produto.descricao} value={descricao} onChange={(evento) => setDescricao(evento.target.value)} />
                </div>
                <div>
                    <label htmlFor="valor">Valor</label>
                    <input type="text" name="valor" placeholder={produto.valor !== undefined ? produto.valor.toString() : "0"} value={valor} onChange={(evento) => setValor(evento.target.value)} />
                </div>
                <input type="submit" value="Enviar" />
            </form>
        </div>
    )
}

export default EditProdutoPage;