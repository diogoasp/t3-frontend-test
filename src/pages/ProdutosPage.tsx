import { Link, useLocation } from "react-router-dom";
import Header from "../components/Header";
import ProductTable from "../components/ProductTables";
import MockProdutoController from "../controller/MockProdutoController";
import { IUsuario } from "../interfaces/usuario";
interface ProdutoProps {
    user?: IUsuario | undefined;
}
const ProdutosPage = ({ user }: ProdutoProps) => {
    const location = useLocation();
    const controller = new MockProdutoController();
    const defUser = () => {
        return user === undefined ? location.state.user : user;
    }
    return (
        <div>
            <Header user={defUser()} />
            {/* header / menu */}
            <h2>Lista de Produtos Cadastrados</h2>
            <Link to={{ pathname: `editar/0` }}>Adicionar Produto</Link>
            <ProductTable controller={controller} user={defUser()} />
        </div>

    )
}

export default ProdutosPage;

