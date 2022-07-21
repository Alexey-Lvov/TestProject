import React from 'react';
import bem from 'utils/bem';
import './style.scss';

const b = bem('product-card');

function ProductCard() {
  return (
    <div className={b('')}>
      <div className={b('top-block')}>
        dsds
      </div>
      <div className={b('bottom-block')}>
        dsds
      </div>
    </div>
  );
}

export default ProductCard;
