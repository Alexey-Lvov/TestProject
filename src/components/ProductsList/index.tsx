import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from 'redux/store';
import bem from 'utils/bem';
import { getProductsStart, getTopProductsStart } from 'redux/products/reducer';
import ProductItem from 'components/ProductItem';
import { Product, PropsInterface } from './interface';
import './style.scss';

const b = bem('product-list');

const defaultProps = {
  title: '',
  withPagination: false,
};

function ProductList(props: PropsInterface) {
  const { title, withPagination } = props;

  const productsState = useSelector((state: RootState) => state.products);
  const dispatch = useDispatch();

  const [filterProducts, setFilterProducts] = useState<Product[]>([]);

  const { products: productsItem, topProducts } = productsState;
  const products = withPagination ? productsItem : topProducts;
  useEffect(() => {
    setFilterProducts(products.filter((item: Product, index: number) => index < 10));
  }, [productsState]);

  useEffect(() => {
    dispatch(getProductsStart());
    dispatch(getTopProductsStart());
  }, []);

  const showMoreProducts = () => {
    setFilterProducts(products.filter((
      item: Product,
      index: number,
    ) => index < products.length + 10));
  };

  return (
    <div className={b('')}>
      <div className={b('title-block')}>
        {title}
        <span className={b('title-text')}> с кешбеком</span>
      </div>
      <div className={b('list')}>
        {filterProducts.map((
          item,
        ) => <ProductItem item={item} />)}
      </div>
      {products.length > filterProducts.length
      && (
      <button
        className={b('pagination-btn')}
        type="button"
        onClick={showMoreProducts}
      >
        Показать еще
      </button>
      )}
    </div>
  );
}

ProductList.defaultProps = defaultProps;

export default ProductList;
