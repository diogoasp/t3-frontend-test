import React from 'react';
import logo from './logo.svg';
import './App.css';
import ProductTable from './components/ProductTables';
import MockProduto from './models/Produto';
import ProductLines from './components/ProductLines';

const produtos = [new MockProduto("1", "Monitor", "Monitor, 16:9, 24 polegadas", 900.50), new MockProduto("2", "Mouse", "1600dpi, led", 60.1)];

function App() {
  return (
    <div className="App">
      <ProductTable produtos={produtos} />
    </div>
  );
}

export default App;
