import React from 'react';
import { Link } from "react-router-dom";
import { IItemCarrinho } from '../interfaces/itemCarrinho';
import { IProduto } from '../interfaces/produto';
import { IProdutoController } from '../interfaces/produtoController';
import { IUsuario } from '../interfaces/usuario';
import { adicionarItemCarrinho, atualizarCarrinho, buscarProduto, deletarProduto, getItemCarrinho } from '../services/Api';
import { Table } from 'react-bootstrap';
import { BiCart, BiEditAlt, BiTrash } from 'react-icons/bi';
import { Link } from "react-router-dom";
import { IProdutoController } from '../interfaces/produtoController';
import { IUsuario } from '../interfaces/usuario';

interface ProdutoProps {
  produtos: IProduto[] | undefined;
  // controller: IProdutoController;
  // user?: IUsuario | undefined;
}

const ProductTable = ({ produtos }: ProdutoProps) => {

  const inserirNoCarrinho = async (id: string) => {
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

    itens.push(respBuscaItem.data.item);
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
    <div className='d-flex justify-content-center m-5'>
      <Table striped bordered hover id="productTable">
        <thead>
          <tr>
            <th> Nome </th>
            <th> Descrição </th>
            <th> Preço </th>
            <th colSpan={2} > Ações </th>
          </tr>
        </thead>
        <tbody>
          {
            produtos.map((prod) => (

              <tr key={prod._id} id={prod._id + 'tr'}>
                <td id={prod._id + '-nome'}>{prod.nome}</td>
                <td id={prod._id + '-descricao'}>{prod.descricao}</td>
                <td id={prod._id + '-valor'}>{prod.valor}</td>
                {eAdmin() ?
                  < div className='d-flex justify-content-center'>
                    <td><Link className='btn-table' id={prod._id + "-editar"} to={{ pathname: `editar/${prod._id}` }}><BiEditAlt /></Link></td>
                    <td><button className='btn-table' id={prod._id + "-excluir"} onClick={deleteHandler(prod._id !== undefined ? prod._id : 0)} ><BiTrash /></button></td>
                  </div>
                  : <td><button className='btn-table' id={prod._id + "-add"} onClick={deleteHandler(prod._id !== undefined ? prod._id : 0)} ><BiCart /></button></td>
                }
              </tr>
            ))
          }
        </tbody>
      </Table>
    </div>
  )
}

export default ProductTable;