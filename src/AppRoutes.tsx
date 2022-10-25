import { BrowserRouter, Route, Routes } from "react-router-dom"
import EditProdutoPage from "./pages/EditProdutoPage";
import LoginPage from "./pages/LoginPage";
import ProdutosPage from "./pages/ProdutosPage";

const AppRoutes = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/produtos" element={<ProdutosPage />} />
                <Route path="/produtos/editar/:id" element={<EditProdutoPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;