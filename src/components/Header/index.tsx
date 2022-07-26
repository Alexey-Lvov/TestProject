import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import bem from 'utils/bem';
import './style.scss';
import { useNavigate, Link } from 'react-router-dom';
import Menu from 'components/Menu';
import searchIcon from 'img/search.png';
import menuIcon from 'img/menu-icon.png';

const b = bem('header');

function Header() {
  const navigate = useNavigate();

  const [isOpenMenu, openMenu] = useState(false);

  const handleClick = () => {
    openMenu(true);
  };

  const clickCatalog = () => {
    navigate('/catalog');
    window.scrollTo({
      top: 0,
    });
  };

  return (
    <div className={b('')}>
      <div className={b('content')}>
        <div className={b('left-block')}>
          <Link className={b('logo')} to="/">Логотип</Link>
          <button className={b('menu-btn')} type="button" onClick={clickCatalog}>
            <img className={b('menu-icon')} src={menuIcon} alt="menu" />
            <span className={b('menu-text')}>Каталог</span>
          </button>
          <div className={b('search-block')}>
            <img className={b('search-icon')} src={searchIcon} alt="icon" />
            <input className={b('search-input')} placeholder="Хочу найти" />
          </div>
          <img className={b('search-icon', { tablet: true })} src={searchIcon} alt="icon" />
          <button onClick={handleClick} style={{ background: 'none', border: 'none' }} type="button">
            <img className={b('menu-icon', { mobile: true })} src={menuIcon} alt="menu" />
          </button>
        </div>
        <div className={b('right-block')}>
          <Link className={b('sale-btn')} to="/sale">
            Я продавец
          </Link>
          <Link className={b('customer-btn')} to="/customer">
            Я покупатель
          </Link>
        </div>
      </div>
      {ReactDOM.createPortal(<Menu isOpenMenu={isOpenMenu} close={() => openMenu(false)} />, document.getElementById('root') as HTMLElement)}
    </div>
  );
}

export default Header;
