import React, { useEffect } from 'react';
import { IItemCarrinho } from '../interfaces/itemCarrinho';
import { atualizarCarrinho, deleteItemCarrinho } from '../services/Api';

interface ItemCarrinhoProps {
  itens: IItemCarrinho[] | undefined;
}

const ItemCarrinho = ({ itens }: ItemCarrinhoProps) => {

  const deletar = async (id: string) => {
    let lista: IItemCarrinho[] = [];
    itens?.map(item => {
      if(item._id != id) lista.push(item);
    })

    const response = await deleteItemCarrinho(id);

    if (response.status == 200) {
      let cart = JSON.parse(localStorage.getItem("carrinho") ?? "");
      atualizarCarrinho(cart._id, lista);
      cart.itens = lista;
      localStorage.setItem("carrinho", JSON.stringify(cart));

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
          itens?.map((i) => (
          <tr key={i._id} data-testid={i._id}>
            <td>{i.produto?.nome}</td>
            <td>{i.quantidade}</td>
            <td>{i.valor}</td>
              < div >
                {/* <td><Link to={{ pathname: `editar/${item._id}` }}>Editar </Link></td> */}
                <td><button data-testid={i._id + "-excluir"} onClick={deleteHandler(i._id !== undefined ? i._id : "")} >Remover do carrinho</button></td>
              </div>
              {/* <td><button data-testid={prod._id + "-add"} onClick={deleteHandler(prod._id !== undefined ? prod._id : "")} >Adicionar ao Carrinho</button></td> */}
          </tr>
          ))
        }
      </table>
    </>
  )
}

export default ItemCarrinho;