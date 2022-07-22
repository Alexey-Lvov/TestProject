import React from 'react';
import bem from 'utils/bem';
import starIcon from 'img/star-icon.png';
import starFillIcon from 'img/star-fill-icon.png';
import './style.scss';

const b = bem('stars-rating');

const defaultProps = {
  withText: false,
};

type Props = {
  rating: number;
  countReviews: number;
  withText?: boolean;
};

const arr = [1, 2, 3, 4, 5];
function StarsRating(props: Props) {
  const { rating, withText, countReviews } = props;

  return (
    <div className={b('')}>
      <div className={b('stars')}>
        {arr.map((item, index) => (<img className={b('star')} src={index < rating ? starFillIcon : starIcon} alt="star" />))}
        {withText && <span className={b('description')}>{`${countReviews} отзывов`}</span>}
      </div>
    </div>
  );
}

StarsRating.defaultProps = defaultProps;

export default StarsRating;
