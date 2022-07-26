import React from 'react';
import bem from 'utils/bem';
import Banner from 'components/Banner';
import AdvertisingStrip from 'components/AdvertisingStrip';
import Footer from 'components/Footer';
import ProductList from 'components/ProductsList';
import Header from 'components/Header';
import './style.scss';

const b = bem('main-page');

function MainPage() {
  return (
    <div className={b('')}>
      <Header />
      <Banner />
      <AdvertisingStrip />
      <ProductList title="Топ товаров" />
      <ProductList title="Товары" withPagination />
      <Footer />
    </div>
  );
}

export default MainPage;
