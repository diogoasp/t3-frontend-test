import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
// import MockProdutoController from "../controller/MockProdutoController";
import { IProduto } from "../interfaces/produto";
import { atualizarProduto, buscarProduto } from "../services/Api";

const EditProdutoPage = () => {
    const [produto, setProduto] = useState<IProduto>({_id: "", nome: "", descricao: "", valor: 0});
    const { id } = useParams<string>();
    
    const navigate = useNavigate();
    
    const [nome, setNome] = useState("");
    const [descricao, setDescricao] = useState("");
    const [valor, setValor] = useState("");

    useEffect(() => {
        if(id != undefined) buscarProduto(id ?? undefined).then(response => setProduto(response.data.produto));
    }, [id]);

    
    const setOrUpdate = (evento: React.FormEvent) => {
        evento.preventDefault();
        
        const prod = {
            _id: id,
            nome: nome,
            descricao: descricao,
            valor: Number(valor)
        }
        atualizarProduto(id ?? "", prod).then(response => response.data.produto);

        navigate("/produtos");
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