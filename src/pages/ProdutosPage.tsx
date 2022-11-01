import { BiPlusCircle } from "react-icons/bi";
import { Link, useLocation } from "react-router-dom";
import Header from "../components/Header";
import ProductTable from "../components/ProductTables";
import MockProdutoController from "../controller/MockProdutoController";
import { IUsuario } from "../interfaces/usuario";
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
            <Header user={defUser()} />
            <h2 id='titulo'>Lista de Produtos Cadastrados</h2>
            <Link className="btn btn-success" to={{ pathname: `editar/0` }}> <BiPlusCircle className="fs-5 m-2" />Adicionar Produto</Link>
            <ProductTable controller={controller} user={defUser()} />
        </div>

    )
}

export default ProdutosPage;

