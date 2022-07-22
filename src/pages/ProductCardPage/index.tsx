import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import bem from 'utils/bem';
import { useDispatch } from 'react-redux';
import Header from 'components/Header';
import ProductCard from 'components/ProductCard';
import Footer from 'components/Footer';
import ReviewsProduct from 'components/ReviewsProduct';
import ProductListLine from 'components/ProductsListLine';
import './style.scss';
import { getProductStart } from 'redux/products/reducer';

const b = bem('product-card-page');

function ProductCardPage() {
  const dispatch = useDispatch();
  const { id } = useParams<{ id: string }>();
  useEffect(() => {
    dispatch(getProductStart(Number(id)));
  }, []);

  return (
    <div className={b('')}>
      <Header />
      <ProductCard />
      <ReviewsProduct />
      <ProductListLine title="Рекомендуем товары" />
      <Footer />
    </div>
  );
}

export default ProductCardPage;
