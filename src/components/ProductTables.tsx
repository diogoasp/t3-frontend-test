import React from 'react';
import { Link } from "react-router-dom";
import { IProdutoController } from '../interfaces/produtoController';

interface ProdutoProps {
  controller: IProdutoController;
}

const ProductTable = ({ controller }: ProdutoProps) => {
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
              <td><Link to={{ pathname: `editar/${prod._id}` }}>Editar </Link></td>
              <td><button data-testid={prod._id + "-excluir"} onClick={deleteHandler(prod._id !== undefined ? prod._id : 0)} >excluir</button></td>
            </tr>
          ))
        }
      </table>
    </>
  )
}

export default ProductTable;