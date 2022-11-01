import { useContext } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { ProvedorAutenticacao, ContextoAutenticacao, ContextoValores } from "./context/contextoAutenticacao";
import { IUsuario } from "./interfaces/usuario";
import CarrinhoPage from "./pages/CarrinhoPage";
import CreateUserPage from "./pages/CreateUserPage";
import EditProdutoPage from "./pages/EditProdutoPage";
// import CreateUserPage from "./pages/CreateUserPage";
// import EditProdutoPage from "./pages/EditProdutoPage";
import LoginPage from "./pages/LoginPage";
import ProdutosPage from "./pages/ProdutosPage";
// import ProdutosPage from "./pages/ProdutosPage";

const AppRoutes = () => {

    const Private = ({ children }: any) => {
        const { autenticado, loading } = useContext<ContextoValores>(ContextoAutenticacao);

        if (!loading) {
            return <div>Carrengado...</div>
        }

        if (!autenticado) return <Navigate to="/" />

        return children;
    }
    return (
        <BrowserRouter>
            <ProvedorAutenticacao>
                <Routes>
                    <Route path="/" element={<LoginPage />} />
                    <Route path="/novo" element={<CreateUserPage />} />
                    <Route path="/produtos" element={<ProdutosPage />} />
                    <Route path="/produtos/editar/:id" element={<EditProdutoPage />} />
                    <Route path="/produtos/editar/" element={<EditProdutoPage />} />
                    <Route path="/carrinho/" element={<CarrinhoPage />} />
                </Routes>
            </ProvedorAutenticacao>
        </BrowserRouter>
    )
}

export default AppRoutes;