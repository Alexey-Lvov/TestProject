import React, { useState, useEffect } from 'react';
import bem from 'utils/bem';
import Rating from 'components/Rating';
import { useSelector } from 'react-redux';
import type { RootState } from 'redux/store';
import StarsRating from 'components/StarsRating';
import ellipseIcon from 'img/ellipse.png';
import { IReview } from './interface';
import './style.scss';

const b = bem('reviews-product');

function ReviewsProduct() {
  const productsState = useSelector((state: RootState) => state.products);

  const { selectProduct } = productsState;
  const { reviews = [] } = selectProduct;

  const [filterReviews, setFilterReviews] = useState([]);

  useEffect(() => {
    setFilterReviews(reviews.filter((item: IReview, index: number) => index < 2));
  }, [productsState]);

  const showMoreReviews = () => {
    setFilterReviews(reviews.filter((
      item: IReview,
      index: number,
    ) => index < reviews.length + 10));
  };

  return (
    <div className={b('')}>
      <div className={b('top-block')}>
        <div className={b('top-content')}>
          <div className={b('title')}>
            Отзывы
            <span className={b('title-text')}> о товаре</span>
          </div>
          <button className={b('top-btn')} type="button">Добавить отзыв</button>
        </div>
        <Rating reviews={reviews} />
        <button className={b('top-btn', { tablet: true })} type="button">Добавить отзыв</button>
      </div>
      <div className={b('reviews-list')}>
        {filterReviews.map((review: IReview) => (
          <div className={b('review-item')}>
            <img className={b('avatar')} src={review.imageUri} alt="avatar" />
            <div className={b('review-content')}>
              <div className={b('review-title')}>
                <span className={b('review-name')}>{review.name}</span>
                <span className={b('review-date')}>{review.data}</span>
              </div>
              <StarsRating rating={review.rating} countReviews={reviews.length} />
              <span className={b('review-description')}>{review.description}</span>
              <div className={b('review-images')}>
                {review.images && review.images.map((image) => <img className={b('review-image')} src={image} alt="img" />)}
              </div>
            </div>
          </div>
        ))}
        {reviews.length > filterReviews.length
        && <button className={b('reviews-btn')} type="button" onClick={showMoreReviews}>Показать еще</button>}
      </div>
      <img className={b('ellipse-icon', { one: true })} src={ellipseIcon} alt="ellipse" />
      <img className={b('ellipse-icon', { two: true })} src={ellipseIcon} alt="ellipse" />
    </div>
  );
}

export default ReviewsProduct;
