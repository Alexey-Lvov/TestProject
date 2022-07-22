import React, { useState } from 'react';
import bem from 'utils/bem';
import { PropsInterface } from './interface';
import './style.scss';

const defaultProps = {
  item: {},
};

const b = bem('product-item');

function ProductItem(props: PropsInterface) {
  const { item } = props;

  const [isFocus, setIsFocus] = useState(false);

  const handleMouseEnter = () => {
    setIsFocus(true);
  };

  const handleMouseLeave = () => {
    setIsFocus(false);
  };

  const handileClick = () => {
    window.location.href = `/product/${item.id}`;
  };

  return (
    <div className={b('')}>
      <div
        className={b('main-block')}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img className={b('img')} src={item.imageUri} alt="imageUri" />
        <div className={b('before-after-price')}>
          <span className={b('summ')}>{`${item.summ}₽`}</span>
          <span className={b('full-summ')}>{`${item.fullSumm}₽`}</span>
        </div>
        <div className={b('discount')}>{`${item.discount}%`}</div>
        {isFocus && (
          <div className={b('vual')}>
            <button
              className={b('vual-btn')}
              type="button"
              onClick={handileClick}
            >
              Узнать условия
            </button>
          </div>
        )}
      </div>
      <div className={b('block-price')}>
        <div className={b('cashback')}>
          Кэшбэк:
          <span className={b('cashback-text')}>{` ${item.cashback}₽`}</span>
        </div>
        <div className={b('summ-block')}>
          Цена для вас:
          <span className={b('summ-block-text')}>{` ${item.summ}₽`}</span>
        </div>
        <div className={b('full-summ-block')}>
          Цена в маркетплейсе:
          <span className={b('full-summ-block-text')}>{` ${item.fullSumm}₽`}</span>
        </div>
        <span className={b('name')}>
          {item.name}
        </span>
      </div>
    </div>
  );
}

ProductItem.defailtProps = defaultProps;

export default ProductItem;
