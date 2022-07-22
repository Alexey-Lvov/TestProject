import React, { useState } from 'react';
import bem from 'utils/bem';
import ReactDOM from 'react-dom';
import { useSelector } from 'react-redux';
import type { RootState } from 'redux/store';
import './style.scss';
import ImageSlider from 'components/ImageSlider';
import CashBackPopup from 'components/CashbackPopup';
import StarsRating from 'components/StarsRating';
import ellipseIcon from 'img/ellipse.png';
import { IReview } from './inteface';

const b = bem('product-card');

function ProductCard() {
  const productsState = useSelector((state: RootState) => state.products);

  const { selectProduct } = productsState;
  const { reviews = [] } = selectProduct;

  const [isOpenPopup, setIsOpenPopup] = useState(false);

  const openPopup = (isOpen: boolean) => {
    setIsOpenPopup(isOpen);
  };

  const countReviews = reviews.length;
  const summRating = reviews.reduce((acc: number, review: IReview) => acc + review.rating, 0);
  const rating = summRating / countReviews;

  return (
    <div className={b('')}>
      <div className={b('top-block')}>
        <ImageSlider images={['https://pngimg.com/uploads/macbook/macbook_PNG101747.png', 'https://pngimg.com/uploads/macbook/macbook_PNG101747.png', 'https://pngimg.com/uploads/macbook/macbook_PNG101747.png', 'https://pngimg.com/uploads/macbook/macbook_PNG101747.png']} />
        <div className={b('top-content')}>
          <span className={b('name')}>{selectProduct.name}</span>
          <StarsRating rating={rating} countReviews={countReviews} withText />
          <div className={b('before-after-price')}>
            <span className={b('summ')}>{`${selectProduct.summ} ₽`}</span>
            <span className={b('full-summ')}>{`${selectProduct.fullSumm} ₽`}</span>
          </div>
          <span className={b('cashback')}>{`Кэшбэк ${selectProduct.cashback}₽`}</span>
          <button onClick={() => openPopup(true)} className={b('cashback-btn')} type="button">Узнать условия для получения кэшбэка</button>
        </div>
      </div>
      <div className={b('bottom-block')}>
        <span className={b('title')}>Описание</span>
        <span className={b('description')}>{selectProduct.description}</span>
        <button className={b('btn')} type="button">Узнать больше о товаре</button>
      </div>
      {isOpenPopup && ReactDOM.createPortal(<CashBackPopup close={() => openPopup(false)} />, document.getElementById('root') as HTMLElement)}
      <img className={b('ellipse-icon', { one: true })} src={ellipseIcon} alt="ellipse" />
      <img className={b('ellipse-icon', { two: true })} src={ellipseIcon} alt="ellipse" />
    </div>
  );
}

export default ProductCard;
