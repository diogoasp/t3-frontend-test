import React from 'react';
import logo from './logo.svg';
import './App.css';
import ProductTable from './components/ProductTables';
import MockProduto from './models/Produto';
produtos = []
function App() {
  return (
    <div className="App">
      <ProductTable produtos={produtos} />
    </div>
  );
}

export default App;
