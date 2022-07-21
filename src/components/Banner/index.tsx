import React from 'react';
import bem from 'utils/bem';
import bannerImage from 'img/envelope-amico-2211 1.png';
import ellipseIcon from 'img/ellipse.png';
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
      <img className={b('ellipse-icon', { one: true })} src={ellipseIcon} alt="ellipse" />
      <img className={b('ellipse-icon', { two: true })} src={ellipseIcon} alt="ellipse" />
      <img className={b('ellipse-icon', { free: true })} src={ellipseIcon} alt="ellipse" />
      <img className={b('ellipse-icon', { four: true })} src={ellipseIcon} alt="ellipse" />
      <img className={b('ellipse-icon', { five: true })} src={ellipseIcon} alt="ellipse" />
    </div>
  );
}

export default Banner;
