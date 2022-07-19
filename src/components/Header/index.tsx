import React from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from 'redux/store';
import bem from 'utils/bem';
import './style.scss';
import searchIcon from 'img/search.png';

const b = bem('header');

function Header() {
  const count = useSelector((state: RootState) => state.counter);

  console.log(count);

  return (
    <div className={b('')}>
      <div className={b('content')}>
        <div className={b('left-block')}>
          <div className={b('logo')}>Логотип</div>
          <button className={b('menu-btn')} type="button">
            <span className={b('menu-text')}>Каталог</span>
          </button>
          <div className={b('search-block')}>
            <img className={b('search-icon')} src={searchIcon} alt="icon" />
            <input className={b('search-input')} placeholder="Хочу найти" />
          </div>
        </div>
        <div className={b('right-block')}>
          <button className={b('sale-btn')} type="button">
            Я продавец
          </button>
          <button className={b('customer-btn')} type="button">
            Я покупатель
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
