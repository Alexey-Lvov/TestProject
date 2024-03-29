import React from 'react';
import bem from 'utils/bem';
import telegramIcon from 'img/telegram.png';
import whatsupIcon from 'img/whatsup.png';
import footerIcon from 'img/footer-icon.png';
import arrowIcon from 'img/arrow-icon.png';
import './style.scss';

const b = bem('footer');

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className={b('')}>
      <div className={b('top-block')}>
        <div className={b('logo-block')}>
          <span className={b('logo-text')}>Логотип</span>
          <div className={b('image-block')}>
            <img src={telegramIcon} alt="telegram" />
          </div>
          <div className={b('image-block')}>
            <img src={whatsupIcon} alt="whatsup" />
          </div>
        </div>
        <div className={b('top-content')}>
          <span className={b('top-content-text')}>©2022. Все права защищены.</span>
          <span className={b('top-content-text')}>Политика конфиденциальности</span>
          <span className={b('top-content-text')}>Публичная оферта</span>
          <span className={b('top-content-text', { help: true })}>Поддержка</span>
        </div>
      </div>
      <div className={b('bottom-block')}>
        <img src={footerIcon} alt="icon" />
      </div>
      <button className={b('arrow-block')} type="button" onClick={scrollToTop}>
        <img src={arrowIcon} alt="arrow" />
      </button>
    </div>
  );
}

export default Footer;
