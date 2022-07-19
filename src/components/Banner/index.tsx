import React from 'react';
import bem from 'utils/bem';
import bannerImage from 'img/envelope-amico-2211 1.png';
import './style.scss';

const b = bem('banner');

function Banner() {
  return (
    <div className={b('')}>
      <div className={b('content')}>
        <span className={b('text')}>
          {'Сервис для получения\nкэшбэка от покупок\nна Wildberries, Озон\nи Яндекс.Маркет'}
        </span>
        <button className={b('btn')} type="button">Как работает сервис</button>
      </div>
      <img className={b('img')} src={bannerImage} alt="banner" />
    </div>
  );
}

export default Banner;
