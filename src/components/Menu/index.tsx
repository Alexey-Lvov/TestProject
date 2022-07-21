import React from 'react';
import bem from 'utils/bem';
import closeIcon from 'img/close-icon.png';
import searchIcon from 'img/search.png';
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

  return (
    <div className={b('', { open: isOpenMenu })}>
      <div className={b('content', { open: isOpenMenu })}>
        <div className={b('top-block')}>
          <button className={b('menu-btn')} type="button">
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
        <button className={b('sale-btn')} type="button">
          Я продавец
        </button>
        <button className={b('customer-btn')} type="button">
          Я покупатель
        </button>
      </div>
    </div>
  );
}

Menu.defaultProps = defaultProps;

export default Menu;
