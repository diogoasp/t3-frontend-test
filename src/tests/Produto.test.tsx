import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ProdutosPage from '../pages/ProdutosPage';
import { MemoryRouter } from 'react-router-dom';
import MockUsuario from '../models/Usuario';
import { IUsuario } from '../interfaces/usuario';

test('There is a table ', () => {
  const u: MockUsuario = new MockUsuario({ _id: 1, email: "admin@gmail.com", senha: "123", role: 0 });
  render(<ProdutosPage user={u as IUsuario} />, { wrapper: MemoryRouter });
  const tableElement = screen.getByTestId("productTable");
  expect(tableElement).toBeInTheDocument();
});

test('can delete a product', async () => {
  const u: MockUsuario = new MockUsuario({ _id: 1, email: "admin@gmail.com", senha: "123", role: 0 });
  render(<ProdutosPage user={u as IUsuario} />, { wrapper: MemoryRouter });
  const firstLineElement = screen.getByTestId("1");
  const delButtonElement = screen.getByTestId("1-excluir");
  delButtonElement.click();
  await waitFor(() => {
    expect(firstLineElement).not.toBeInTheDocument();
  });

});
