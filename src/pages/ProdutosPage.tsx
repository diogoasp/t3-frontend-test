import { Link } from "react-router-dom";
import ProductTable from "../components/ProductTables";
import MockProdutoController from "../controller/MockProdutoController";

const ProdutosPage = () => {
    const controller = new MockProdutoController();
    return (
        <div>
            {/* header / menu */}
            <h2>Lista de Produtos Cadastrados</h2>
            <Link to={{ pathname: `editar/0` }}>Adicionar Produto</Link>
            <ProductTable controller={controller} />
        </div>
    )
}

export default ProdutosPage;

