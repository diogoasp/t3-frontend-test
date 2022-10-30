import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { IItemCarrinho } from '../interfaces/itemCarrinho';
import { IProduto } from '../interfaces/produto';
import { IUsuario } from '../interfaces/usuario';
import { buscarProduto, deletarProduto, getItemCarrinho, itensNoCarrinho } from '../services/Api';

interface ItemCarrinhoProps {
  itens: IItemCarrinho[] | undefined;
  // user?: IUsuario | undefined;
}

const ItemCarrinho = ({ itens }: ItemCarrinhoProps) => {
  let listaItens: ItemCarrinhoProps[] = [];
  
  itens?.forEach((item) => {
    getItemCarrinho(String(item) ?? "").then(response => {
      listaItens.push(response.data.data);
    })
  })
  
  console.log(listaItens[1])

  const deletar = async (id: string) => {
    const response = await deletarProduto(id);
    if (response.status == 200) {
      window.location.reload();
    } else {
      console.log("Falha na exclusão!");
    }
  };

  const deleteHandler = (id: string) => {
    return (event: React.MouseEvent) => {
      deletar(id);
      event.preventDefault();
    }
  }

  return (
    <>
      <table data-testid="productTable">
        <tr>
          <th> Nome do Produto </th>
          <th> Quantidade </th>
          <th> Valor </th>
          <th colSpan={2} > Ações </th>
        </tr>
        {
          
          listaItens.map((item) => (
            item.itens?.map((i) => (
            <tr key={i._id} data-testid={i._id}>
              <td>{i.produto?.nome}</td>
              <td>{i.quantidade}</td>
              <td>{i.valor}</td>
                < div >
                  {/* <td><Link to={{ pathname: `editar/${item._id}` }}>Editar </Link></td> */}
                  <td><button data-testid={i._id + "-excluir"} onClick={deleteHandler(i._id !== undefined ? i._id : "")} >excluir</button></td>
                </div>
                {/* <td><button data-testid={prod._id + "-add"} onClick={deleteHandler(prod._id !== undefined ? prod._id : "")} >Adicionar ao Carrinho</button></td> */}
            </tr>
            ))
          ))
        }
      </table>
    </>
  )
}

export default ItemCarrinho;