import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import ProductTable from "../components/ProductTables";
import Header from "../components/Header";
import { IItemCarrinho } from "../interfaces/itemCarrinho";
import { getCarrinho } from "../services/Api";
import ItemCarrinho from "../components/ItemCarrinho";

const CarrinhoPage = () => {
    let carrinho = JSON.parse(localStorage.getItem("carrinho") ?? "");

    useEffect(() => {
        carrinho = JSON.parse(localStorage.getItem("carrinho") ?? "");
    }, []);



    const location = useLocation();
    return (
        <div>
            <Header />
            <h2>Carrinho de compras</h2>
            <ItemCarrinho itens={carrinho.itens} />
        </div>

    )
}

export default CarrinhoPage;