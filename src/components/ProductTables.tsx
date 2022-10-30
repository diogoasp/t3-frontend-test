import React from 'react';
import { Link } from "react-router-dom";
import { IItemCarrinho } from '../interfaces/itemCarrinho';
import { IProduto } from '../interfaces/produto';
import { IProdutoController } from '../interfaces/produtoController';
import { IUsuario } from '../interfaces/usuario';
import { adicionarItemCarrinho, atualizarCarrinho, buscarProduto, deletarProduto, getItemCarrinho } from '../services/Api';

interface ProdutoProps {
  produtos: IProduto[] | undefined;
  // controller: IProdutoController;
  // user?: IUsuario | undefined;
}

const ProductTable = ({ produtos }: ProdutoProps) => {
  const inserirNoCarrinho = async (id: string) => {
    console.log(id)
    const resProduto = await buscarProduto(id);
    const item = {
      _id: "",
      produto: resProduto.data.produto,
      quantidade: 1,
      valor: 0
    }

    let carrinho = JSON.parse(localStorage.getItem("carrinho") ?? "");

    const resItem = await adicionarItemCarrinho("", item);
    const respBuscaItem = await getItemCarrinho(resItem.data.id);

    
    let itens: IItemCarrinho[] = carrinho.itens;
    
    itens.push(respBuscaItem.data.data);
    await atualizarCarrinho(carrinho._id, itens);
    carrinho.itens = itens;
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
  };

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

  const carrinhoHandler = (id: string) => {    
    return (event: React.MouseEvent) => {
      inserirNoCarrinho(id);
      event.preventDefault();
    }
  }
  
  const eAdmin = () => {
    const usuario = JSON.parse(localStorage.getItem("usuario") ?? "");
    return usuario?.permissao === 0;
  }


  return (
    <>
      <table data-testid="productTable">
        <tr>
          <th> Nome </th>
          <th> Descrição </th>
          <th> Preço </th>
          <th colSpan={2} > Ações </th>
        </tr>
        {
          produtos?.map((prod) => (

            <tr key={prod._id} data-testid={prod._id}>
              <td>{prod.nome}</td>
              <td>{prod.descricao}</td>
              <td>{prod.valor}</td>
              {eAdmin() ?
                < div >
                  <td><Link to={{ pathname: `editar/${prod._id}` }}>Editar </Link></td>
                  <td><button data-testid={prod._id + "-excluir"} onClick={deleteHandler(prod._id !== undefined ? prod._id : "")} >excluir</button></td>
                </div>
                : <td><button data-testid={prod._id + "-add"} onClick={carrinhoHandler(prod._id !== undefined ? prod._id : "")} >Adicionar ao Carrinho</button></td>
              }
            </tr>
          ))
        }
      </table>
    </>
  )
}

export default ProductTable;