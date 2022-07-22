import React from 'react';
import './style.scss';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import MainPage from 'pages/Main';
import ProductCardPage from 'pages/ProductCardPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/product/:id" element={<ProductCardPage />} />
      </Routes>
    </Router>
  );
}

export default App;
