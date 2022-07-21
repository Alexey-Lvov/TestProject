import React from 'react';
import bem from 'utils/bem';
import Header from 'components/Header';
import ProductCard from 'components/ProductCard';
import './style.scss';

const b = bem('product-card-page');

function ProductCardPage() {
  return (
    <div className={b('')}>
      <Header />
      <ProductCard />
    </div>
  );
}

export default ProductCardPage;
