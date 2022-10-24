import React from 'react';
import { IProduto } from "../interfaces/produto";
import ProductLines from './ProductLines';

interface ProdutoProps {
  produtos: IProduto[];
}

const ProductTable = ({ produtos }: ProdutoProps) => {
  return (
    <>
      <table>
        <tr>
          <th> Nome </th>
          <th> Descrição </th>
          <th> Preço </th>
        </tr>
        {
          produtos.map((prod) => (
            <ProductLines produto={prod} />
          ))
        }
      </table>
    </>
  )
}

export default ProductTable;