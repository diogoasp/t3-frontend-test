import { BrowserRouter, Route, Routes } from "react-router-dom"
import { IUsuario } from "./interfaces/usuario";
import CreateUserPage from "./pages/CreateUserPage";
import EditProdutoPage from "./pages/EditProdutoPage";
import LoginPage from "./pages/LoginPage";
import ProdutosPage from "./pages/ProdutosPage";

const AppRoutes = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/novo" element={<CreateUserPage />} />
                <Route path="/produtos" element={<ProdutosPage />} />
                <Route path="/produtos/editar/:id" element={<EditProdutoPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;