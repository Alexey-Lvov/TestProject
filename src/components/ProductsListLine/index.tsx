import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from 'redux/store';
import bem from 'utils/bem';
import { getProductsStart, getTopProductsStart } from 'redux/products/reducer';
import ProductItem from 'components/ProductItem';
import { Product, PropsInterface } from './interface';
import './style.scss';

const b = bem('product-list-line');

const defaultProps = {
  title: '',
  withPagination: false,
};

function ProductListLine(props: PropsInterface) {
  const { title, withPagination } = props;

  const productsState = useSelector((state: RootState) => state.products);
  const dispatch = useDispatch();

  const { products: productsItem, topProducts } = productsState;
  const products = withPagination ? productsItem : topProducts;

  useEffect(() => {
    dispatch(getProductsStart());
    dispatch(getTopProductsStart());
  }, []);

  return (
    <div className={b('')}>
      <div className={b('title-block')}>
        {title}
        <span className={b('title-text')}> с кешбеком</span>
      </div>
      <div className={b('list')}>
        {products.map((
          item: Product,
        ) => <ProductItem item={item} />)}
      </div>
    </div>
  );
}

ProductListLine.defaultProps = defaultProps;

export default ProductListLine;
