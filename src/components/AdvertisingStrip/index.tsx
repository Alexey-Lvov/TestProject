import React from 'react';
import bem from 'utils/bem';
import ozonImage from 'img/ozon.png';
import './style.scss';

const b = bem('advertising-strip');

function AdvertisingStrip() {
  return (
    <div className={b('')}>
      <div className={b('content')}>
        <span className={b('one-text')}>Wildberries</span>
        <img className={b('two-text')} src={ozonImage} alt="ozon" />
        <span className={b('one-text')}>Яндекс маркет</span>
        <span className={b('one-text')}>Wildberries</span>
        <img className={b('two-text')} src={ozonImage} alt="ozon" />
        <span className={b('one-text')}>Яндекс маркет</span>
      </div>

    </div>
  );
}

export default AdvertisingStrip;
