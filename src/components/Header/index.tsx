import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import bem from 'utils/bem';
import './style.scss';
import type { RootState } from 'redux/store';
import { useNavigate, Link } from 'react-router-dom';
import { getUserSuccess } from 'redux/auth/reducer';
import Menu from 'components/Menu';
import searchIcon from 'img/search.png';
import menuIcon from 'img/menu-icon.png';
import avatarIcon from 'img/avatar-icon.png';
import arrowIconOrange from 'img/arrow-icon-orange.png';

const b = bem('header');

const defaultProps = {
  noControls: false,
};

type Props = {
  noControls?: boolean;
};

function Header(props: Props) {
  const { noControls } = props;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const authState = useSelector((state: RootState) => state.auth);

  const { user } = authState;

  useEffect(() => {
    const userLocal = JSON.parse(localStorage.getItem('user') || '') || {};
    dispatch(getUserSuccess(userLocal));
  }, []);

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

  const clickUser = () => {
    navigate('/profile');
    window.scrollTo({
      top: 0,
    });
  };

  return (
    <div className={b('')}>
      <div className={b('content')}>
        <div className={b('left-block')}>
          <Link className={b('logo')} to="/">Логотип</Link>
          { !noControls && (
            <>
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
            </>
          )}
        </div>
        {!noControls && (
          <div className={b('right-block')}>
            {user && user.id
              ? (
                <div className={b('user-block')} onClick={clickUser} role="button" tabIndex={0}>
                  <img className={b('avatar')} src={avatarIcon} alt="icon" />
                  <span className={b('user-name')}>{`${user.name} ${user.balance}₽`}</span>
                  <img src={arrowIconOrange} alt="icon" />
                </div>
              )
              : (
                <>
                  <Link className={b('sale-btn')} to="/sale">
                    Я продавец
                  </Link>
                  <Link className={b('customer-btn')} to="/customer">
                    Я покупатель
                  </Link>
                </>
              )}
          </div>
        )}
      </div>
      {ReactDOM.createPortal(<Menu isOpenMenu={isOpenMenu} close={() => openMenu(false)} />, document.getElementById('root') as HTMLElement)}
    </div>
  );
}

Header.defaultProps = defaultProps;

export default Header;
