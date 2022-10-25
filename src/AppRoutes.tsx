import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom"
import LoginPage from "./pages/LoginPage";
import { useState } from "react";
import { IUsuario } from "./interfaces/usuario";

const AppRoutes = () => {

    const [usuario, setUsuario] = useState<IUsuario>();

    const login = (email: string, senha: string): void => {
        console.log("login", {email, senha});
        setUsuario({_id: 1, email, senha})
    }

    const logout = (): void => {
        console.log("logout");
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<LoginPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;