import React from 'react';
import bem from 'utils/bem';
import StarsRating from 'components/StarsRating';
import { IReview } from './interface';
import './style.scss';

const b = bem('rating');

type Props = {
  reviews: IReview[];
};

const arr = [5, 4, 3, 2, 1] as const;

function Rating(props: Props) {
  const { reviews = [] } = props;

  const countReviews = reviews.length;
  const summRating = reviews.reduce((acc, review) => acc + review.rating, 0);
  const rating = summRating / countReviews;

  const percent = reviews.reduce((acc: any, review) => ({
    ...acc,
    [review.rating]: ((acc[review.rating] || 0) + 1 / reviews.length),
  }), {
    5: 0, 4: 0, 3: 0, 2: 0, 1: 0,
  });

  const newPercent = {
    5: Math.round(percent['5'] * 100),
    4: Math.round(percent['4'] * 100),
    3: Math.round(percent['3'] * 100),
    2: Math.round(percent['2'] * 100),
    1: Math.round(percent['1'] * 100),
  };

  return (
    <div className={b('')}>
      <div className={b('one-block')}>
        <span className={b('title')}>{rating}</span>
        <span className={b('description')}>{`На основании\n${countReviews} отзывов`}</span>
        <StarsRating rating={rating} countReviews={countReviews} />
      </div>
      <div className={b('two-block')}>
        {arr.map((item) => (
          <div className={b('review-item')}>
            <span className={b('review-value')}>
              {item}
            </span>
            <div className={b('review-band-block')}>
              <div className={b('review-band')} />
            </div>
            <span className={b('review-value')}>
              {`${newPercent[item]}%`}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Rating;
