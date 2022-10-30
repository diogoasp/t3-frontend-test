import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import ProductTable from "../components/ProductTables";
import Header from "../components/Header";
import { IItemCarrinho } from "../interfaces/itemCarrinho";
import { itensNoCarrinho } from "../services/Api";
import ItemCarrinho from "../components/ItemCarrinho";

const CarrinhoPage = () => {
    const [itens, setItens] = useState<IItemCarrinho[]>();
    const { id } = useParams<string>();

    useEffect(() => {
        itensNoCarrinho(id ?? "").then(response => setItens(response.data.carrinho.itens));
    }, []);

    
    const location = useLocation();
    // const controller = new MockProdutoController();
    // const defUser = () => {
    //     return user === undefined ? location.state.user : user;
    // }
    return (
        <div>
            <Header />
            header / menu
            <h2>Carrinho de compras</h2>
            {/* <Link to={{ pathname: `editar/` }}>Adicionar Produto</Link> */}
            <ItemCarrinho itens={itens} />
        </div>

    )
}

export default CarrinhoPage;