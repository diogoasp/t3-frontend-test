import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ProdutosPage from '../pages/ProdutosPage';
import { MemoryRouter } from 'react-router-dom';

test('There is a table ', () => {
  render(<ProdutosPage />, { wrapper: MemoryRouter });
  const tableElement = screen.getByTestId("productTable");
  expect(tableElement).toBeInTheDocument();
});

test('can delete a product', async () => {
  render(<ProdutosPage />, { wrapper: MemoryRouter });
  const firstLineElement = screen.getByTestId("1");
  const delButtonElement = screen.getByTestId("1-excluir");
  delButtonElement.click();
  await waitFor(() => {
    expect(firstLineElement).not.toBeInTheDocument();
  });

});
