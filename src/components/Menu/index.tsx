import React from 'react';
import bem from 'utils/bem';
import closeIcon from 'img/close-icon.png';
import searchIcon from 'img/search.png';
import { Link, useNavigate } from 'react-router-dom';
import menuIcon from 'img/menu-icon.png';
import { PropsInterface } from './interface';
import './style.scss';

const b = bem('menu');

const defaultProps = {
  close: () => {},
  isOpenMenu: false,
};

function Menu(props: PropsInterface) {
  const { close, isOpenMenu } = props;

  const navigate = useNavigate();

  const clickCatalog = () => {
    navigate('/catalog');
    window.scrollTo({
      top: 0,
    });
  };

  return (
    <div className={b('', { open: isOpenMenu })}>
      <div className={b('content', { open: isOpenMenu })}>
        <div className={b('top-block')}>
          <button className={b('menu-btn')} type="button" onClick={clickCatalog}>
            <img className={b('menu-icon')} src={menuIcon} alt="menu" />
            <span className={b('menu-text')}>Каталог</span>
          </button>
          <button className={b('close-btn')} type="button" onClick={close}>
            <img src={closeIcon} alt="close" />
          </button>
        </div>
        <div className={b('search-block')}>
          <img className={b('search-icon')} src={searchIcon} alt="icon" />
          <input className={b('search-input')} placeholder="Хочу найти" />
        </div>
        <Link className={b('sale-btn')} to="/sale">
          Я продавец
        </Link>
        <Link className={b('customer-btn')} to="/customer">
          Я покупатель
        </Link>
      </div>
    </div>
  );
}

Menu.defaultProps = defaultProps;

export default Menu;
