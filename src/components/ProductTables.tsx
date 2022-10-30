import React from 'react';
import { Table } from 'react-bootstrap';
import { BiCart, BiEditAlt, BiTrash } from 'react-icons/bi';
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
    <div className='d-flex justify-content-center m-5'>
      <Table striped bordered hover data-testid="productTable">
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

            <tr key={prod._id} data-testid={prod._id}>
              <td>{prod.nome}</td>
              <td>{prod.descricao}</td>
              <td>{prod.valor}</td>
              {eAdmin() ?
                < div className='d-flex justify-content-center'>
                  <td><Link className='btn-table' to={{ pathname: `editar/${prod._id}` }}><BiEditAlt/></Link></td>
                  <td><button className='btn-table' data-testid={prod._id + "-excluir"} onClick={deleteHandler(prod._id !== undefined ? prod._id : 0)} ><BiTrash/></button></td>
                </div>
                : <td><button className='btn-table' data-testid={prod._id + "-add"} onClick={deleteHandler(prod._id !== undefined ? prod._id : 0)} ><BiCart/></button></td>
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