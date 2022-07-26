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
import SignUpPage from 'pages/SignUpPage';
import ProfilePage from 'pages/ProfilePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/product/:id" element={<ProductCardPage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/customer" element={<CusomerPage />} />
        <Route path="/sale" element={<SalePage />} />
        <Route path="/signup/:type" element={<SignUpPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </Router>
  );
}

export default App;
