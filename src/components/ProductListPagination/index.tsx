import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from 'redux/store';
import bem from 'utils/bem';
import { getProductsStart, getTopProductsStart } from 'redux/products/reducer';
import ProductItem from 'components/ProductItem';
import nextIcon from 'img/next-icon.png';
import { Product, PropsInterface } from './interface';
import './style.scss';

const b = bem('product-list-pagination');

const defaultProps = {
  title: '',
};

function ProductListPagination(props: PropsInterface) {
  const { title } = props;

  const productsState = useSelector((state: RootState) => state.products);
  const dispatch = useDispatch();

  const [filterProducts, setFilterProducts] = useState<Product[]>([]);
  const [countPagination, setCountPagination] = useState(1);
  const [selectedSort, selectSort] = useState('cashback');

  const { products = [] } = productsState;

  useEffect(() => {
    setFilterProducts(products.filter((item: Product, index: number) => index < 12));
  }, [productsState]);

  useEffect(() => {
    dispatch(getProductsStart());
    dispatch(getTopProductsStart());
  }, []);

  useEffect(() => {
    const productsPagination = products.reduce((acc: any, product: Product, index: number) => {
      const key = Math.floor(index / 12);
      return {
        ...acc,
        [key]: acc[key] !== undefined ? [...acc[key], product] : [product],
      };
    }, {});

    setFilterProducts(productsPagination[countPagination - 1] || []);
  }, [countPagination]);

  useEffect(() => {
    switch (selectedSort) {
      case 'cashback': {
        const newProducts = [...filterProducts].sort((
          aProduct,
          bProduct,
        ) => aProduct.cashback - bProduct.cashback);
        setFilterProducts(newProducts);
        break;
      }
      case 'price': {
        const newProducts = [...filterProducts].sort((
          aProduct,
          bProduct,
        ) => aProduct.summ - bProduct.summ);
        setFilterProducts(newProducts);
        break;
      }
      default: break;
    }
  }, [selectedSort]);

  const getArrayPagination = () => {
    const countPaginationMath = Math.ceil(products.length / 12);
    const arrayPagination: number[] = [];

    for (let i = 0; i < countPaginationMath; i += 1) {
      arrayPagination.push(i + 1);
    }
    return arrayPagination;
  };

  const nextPagination = () => {
    const countPaginationMath = Math.ceil(products.length / 12);

    if (countPaginationMath + 1 > countPagination + 1) {
      setCountPagination(countPagination + 1);
    }
  };

  const handleClickCashback = () => {
    selectSort('cashback');
  };

  const handleClickPrice = () => {
    selectSort('price');
  };

  const arrayPagination = getArrayPagination();

  return (
    <div className={b('')}>
      <div className={b('title-block')}>
        {title}
        <span className={b('title-text')}> с кешбеком</span>
      </div>
      <div className={b('sort-block')}>
        <span className={b('sort-text')}>Сортировать по:</span>
        <button
          className={b('sort-btn', { select: selectedSort === 'cashback' })}
          type="button"
          onClick={handleClickCashback}
        >
          Размеру кэшбэка
        </button>
        <button
          className={b('sort-btn', { select: selectedSort === 'price' })}
          type="button"
          onClick={handleClickPrice}
        >
          Цене
        </button>
      </div>
      <div className={b('list')}>
        {filterProducts.map((
          item,
        ) => <ProductItem item={item} isBig />)}
      </div>
      <div className={b('pagination')}>
        {arrayPagination.map((
          paginate,
        ) => (
          <button
            className={b('pagination-btn', { select: countPagination === paginate })}
            onClick={() => setCountPagination(paginate)}
            type="button"
          >
            {paginate}
          </button>
        ))}
        <button className={b('next-pagination')} type="button" onClick={nextPagination}>
          Следующая страница
          <img className={b('next-icon')} src={nextIcon} alt="next" />
        </button>
      </div>
    </div>
  );
}

ProductListPagination.defaultProps = defaultProps;

export default ProductListPagination;
