import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import bem from 'utils/bem';
import Footer from 'components/Footer';
import Header from 'components/Header';
import ozonImage from 'img/ozon-image.png';
import yandexImage from 'img/yandex-image.png';
import wildberriesImage from 'img/wildberries-image.png';
import './style.scss';

const b = bem('customer-page');

function CusomerPage() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);

  const handleClick = () => {
    navigate('/signup/customer');
  };

  return (
    <div className={b('')}>
      <Header />
      <div className={b('main-content')}>
        <div className={b('block-content')}>
          <span className={b('sub-title')}>Я продавец</span>
          <span className={b('title')}>Информация о сайте</span>
          <span className={b('description')}>Здесь представлена продукция, за которую продавцы на маркетплейсах вернут Вам вознаграждение (кэшбэк)</span>
          <div className={b('image-list')}>
            <img className={b('image')} src={wildberriesImage} alt="wildberries" />
            <img className={b('image')} src={ozonImage} alt="ozon" />
            <img className={b('image')} src={yandexImage} alt="yandex" />
          </div>
        </div>
        <div className={b('block-content')}>
          <span className={b('sub-title')}>Я продавец</span>
          <span className={b('title')}>Цель сайта</span>
          <span className={b('description')}>Помочь Вам сэкономить при покупке товаров на маркетплейсах.</span>
        </div>
        <div className={b('block-content')}>
          <span className={b('sub-title')}>Я продавец</span>
          <span className={b('title')}>Для кого сайт?</span>
          <span className={b('description')}>Для всех людей, которые пользуются маркетплейсами.</span>
        </div>
        <div className={b('block-content')}>
          <span className={b('sub-title')}>Я продавец</span>
          <span className={b('title')}>Что нужно делать?</span>
          <span className={b('description')}>Совершать покупки, писать отзывы и получать за это кэшбэк.</span>
        </div>
        <div className={b('block-content')}>
          <button onClick={handleClick} className={b('register-btn')} type="button">Зарегистрироваться</button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default CusomerPage;
