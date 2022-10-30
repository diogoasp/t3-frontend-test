import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Header from "../components/Header";
import ProductTable from "../components/ProductTables";
// import MockProdutoController from "../controller/MockProdutoController";
import { IProduto } from "../interfaces/produto";
import { IUsuario } from "../interfaces/usuario";
import { produtosDisponiveis } from "../services/Api";
// interface ProdutoProps {
//     user?: IUsuario | undefined;
// }
const ProdutosPage = () => {
    const [prods, setProds] = useState<IProduto[]>();

    useEffect(() => {
        produtosDisponiveis().then(response => setProds(response.data.produtos));
    }, []);
    
    const location = useLocation();
    // const controller = new MockProdutoController();
    // const defUser = () => {
    //     return user === undefined ? location.state.user : user;
    // }
    return (
        <div>
            <Header />
            {/* header / menu */}
            <h2>Lista de Produtos Cadastrados</h2>
            <Link to={{ pathname: `editar/` }}>Adicionar Produto</Link>
            <ProductTable produtos={prods} />
        </div>

    )
}

export default ProdutosPage;

