import { BiPlusCircle } from "react-icons/bi";
import ProductTable from "../components/ProductTables";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Header from "../components/Header";
import { IProduto } from "../interfaces/produto";
import { produtosDisponiveis } from "../services/Api";

const ProdutosPage = () => {
    const [prods, setProds] = useState<IProduto[]>();

    useEffect(() => {
        produtosDisponiveis().then(response => setProds(response.data.produtos));
    }, []);

    const location = useLocation();
    return (
        <div>
            <Header />
            <h2 id='titulo'>Lista de Produtos Cadastrados</h2>
            <Link className="btn btn-success" to={{ pathname: `editar/` }} id='adicionar'> <BiPlusCircle className="fs-5 m-2" />Adicionar Produto</Link>
            <ProductTable produtos={prods} />
        </div>

    )
}

export default ProdutosPage;

