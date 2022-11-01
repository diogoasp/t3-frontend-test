import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import { ICarrinho } from "../interfaces/carrinho";
import { getCarrinho } from "../services/Api";
import ItemCarrinho from "../components/ItemCarrinho";

const CarrinhoPage = () => {
    const [carrinho, setCarrinho] = useState<ICarrinho>();

    useEffect(() => {
        const cart = JSON.parse(localStorage.getItem("carrinho") ?? "");
        getCarrinho(String(cart._id)).then(response => setCarrinho(response.data.carrinho))
    }, []);


    const location = useLocation();
    return (
        <div>
            <Header />
            <h2>Carrinho de compras</h2>
            <ItemCarrinho itens={carrinho?.itens} />
            <p><b>Total <span id="value">{carrinho?.total?.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span></b></p>
        </div>

    )
}

export default CarrinhoPage;