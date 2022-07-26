import React from 'react';
import './style.scss';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import MainPage from 'pages/MainPage';
import ProductCardPage from 'pages/ProductCardPage';
import CatalogPage from 'pages/CatalogPage';
import CusomerPage from 'pages/CustomerPage';
import SalePage from 'pages/SalePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/product/:id" element={<ProductCardPage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/customer" element={<CusomerPage />} />
        <Route path="/sale" element={<SalePage />} />
      </Routes>
    </Router>
  );
}

export default App;
