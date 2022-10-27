import React from 'react';
import { Link } from "react-router-dom";
import { IProdutoController } from '../interfaces/produtoController';
import { IUsuario } from '../interfaces/usuario';

interface ProdutoProps {
  controller: IProdutoController;
  user?: IUsuario | undefined;
}

const ProductTable = ({ controller, user }: ProdutoProps) => {
  // const navigate = useNavigate();
  let produtos = controller.getAll();
  const forceUpdate = React.useReducer(() => ({}), {})[1] as () => void

  const deletar = (id: number) => {
    if (controller.deleteProduto(id)) {
      forceUpdate();
    } else {
      console.log("Falha na exclusão!");
    }
  };
  const deleteHandler = (id: number) => {
    return (event: React.MouseEvent) => {
      deletar(id);
      event.preventDefault();
    }
  }
  const eAdmin = () => {
    return user?.role === 0;
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
          produtos.map((prod) => (

            <tr key={prod._id} data-testid={prod._id}>
              <td>{prod.nome}</td>
              <td>{prod.descricao}</td>
              <td>{prod.valor}</td>
              {eAdmin() ?
                < div >
                  <td><Link to={{ pathname: `editar/${prod._id}` }}>Editar </Link></td>
                  <td><button data-testid={prod._id + "-excluir"} onClick={deleteHandler(prod._id !== undefined ? prod._id : 0)} >excluir</button></td>
                </div>
                : <td><button data-testid={prod._id + "-add"} onClick={deleteHandler(prod._id !== undefined ? prod._id : 0)} >Adicionar ao Carrinho</button></td>
              }
            </tr>
          ))
        }
      </table>
    </>
  )
}

export default ProductTable;