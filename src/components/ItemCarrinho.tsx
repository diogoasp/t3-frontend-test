import { IItemCarrinho } from '../interfaces/itemCarrinho';
import { atualizarCarrinho, deleteItemCarrinho } from '../services/Api';
import { Table } from 'react-bootstrap';
import { BiTrash } from 'react-icons/bi';

interface ItemCarrinhoProps {
  itens: IItemCarrinho[] | undefined;
}

const ItemCarrinho = ({ itens }: ItemCarrinhoProps) => {

  const deletar = async (id: string) => {
    let lista: IItemCarrinho[] = [];
    itens?.map(item => {
      if (item._id !== id)
        lista.push(item);
      return true;
    })

    const response = await deleteItemCarrinho(id);

    if (response.status === 200) {
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
      <div className='d-flex justify-content-center m-5'>
        <Table striped bordered hover id="carrinhoTable">
          <thead>
            <tr>
              <th> Nome do Produto </th>
              <th> Quantidade </th>
              <th> Valor </th>
              <th colSpan={2} > Ações </th>
            </tr>
          </thead>
          <tbody>
            {
              itens?.map((i) => (
                <tr key={i._id} id={i._id}>
                  <td>{i.produto?.nome}</td>
                  <td>{i.quantidade}</td>
                  <td>{i.valor}</td>
                  < td >
                    <button id={i._id + "-excluir"} onClick={deleteHandler(i._id !== undefined ? i._id : "")} className='btn-table' ><BiTrash /></button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </Table>
      </div>
    </>
  )
}

export default ItemCarrinho;