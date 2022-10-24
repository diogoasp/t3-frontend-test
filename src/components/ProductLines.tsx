import React from 'react';
import { IProduto } from "../interfaces/produto";

interface ProdutoProps {
  produto: IProduto;
}

const ProductTable = ({ produto }: ProdutoProps) => {
  return (
    <tr>
      <td>{produto.nome}</td>
      <td>{produto.descricao}</td>
      <td>{produto.valor}</td>
    </tr>
  )
}

export default ProductTable;