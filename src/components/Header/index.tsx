import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import bem from 'utils/bem';
import './style.scss';
import Menu from 'components/Menu';
import searchIcon from 'img/search.png';
import menuIcon from 'img/menu-icon.png';

const b = bem('header');

function Header() {
  const [isOpenMenu, openMenu] = useState(false);

  return (
    <div className={b('')}>
      <div className={b('content')}>
        <div className={b('left-block')}>
          <div className={b('logo')}>Логотип</div>
          <button className={b('menu-btn')} type="button">
            <img className={b('menu-icon')} src={menuIcon} alt="menu" />
            <span className={b('menu-text')}>Каталог</span>
          </button>
          <div className={b('search-block')}>
            <img className={b('search-icon')} src={searchIcon} alt="icon" />
            <input className={b('search-input')} placeholder="Хочу найти" />
          </div>
          <img className={b('search-icon', { tablet: true })} src={searchIcon} alt="icon" />
          <button onClick={() => openMenu(true)} style={{ background: 'none', border: 'none' }} type="button">
            <img className={b('menu-icon', { mobile: true })} src={menuIcon} alt="menu" />
          </button>
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
      {ReactDOM.createPortal(<Menu isOpenMenu={isOpenMenu} close={() => openMenu(false)} />, document.getElementById('root') as HTMLElement)}
    </div>
  );
}

export default Header;
