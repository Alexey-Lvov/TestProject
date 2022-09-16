import React from 'react';
import bem from 'utils/bem';
import ProductListPagination from 'components/ProductListPagination';
import Footer from 'components/Footer';
import Header from 'components/Header';
import './style.scss';

const b = bem('catalog-page');

function CatalogPage() {
  return (
    <div className={b('')}>
      <Header />
      <ProductListPagination title="Топ товаров" />
      <Footer />
    </div>
  );
}

export default CatalogPage;
