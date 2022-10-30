import React from 'react';
import logo from './logo.svg';
import './App.css';
import AppRoutes from './AppRoutes';
import ProductTable from './components/ProductTables';
// produtos = []
function App() {
  return (
    <div className="App">
      <AppRoutes />
    </div>
  );
}

export default App;
