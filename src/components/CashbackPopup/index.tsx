import React, { useEffect } from 'react';
import bem from 'utils/bem';
import checkIcon from 'img/check-icon.png';
import closeIcon from 'img/close-icon-white.png';
import './style.scss';

const b = bem('cashback-popup');

type Props = {
  close: () => void,
};

function CashBackPopup(props: Props) {
  const { close } = props;

  const handleKeyDown = (event: any) => {
    if (event.keyCode === 27) {
      close();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown, false);
    };
  }, []);

  return (
    <div className={b('')}>
      <div className={b('content')}>
        <div className={b('title')}>
          Для получения кэшбэка
          <span className={b('title-text')}> нужно:</span>
        </div>
        <div className={b('list')}>
          <div className={b('list-item')}>
            <div className={b('check-icon-block')}>
              <img src={checkIcon} alt="check" />
            </div>
            <span className={b('list-item-text-one')}>Заказать товар</span>
            <span className={b('list-item-text-two')}>как найт товар</span>
          </div>
          <div className={b('list-item')}>
            <div className={b('check-icon-block')}>
              <img src={checkIcon} alt="check" />
            </div>
            <span className={b('list-item-text-one')}>Выкупить товар</span>
          </div>
          <div className={b('list-item')}>
            <div className={b('check-icon-block')}>
              <img src={checkIcon} alt="check" />
            </div>
            <span className={b('list-item-text-one')}>{'Оставить положительный отзыв\nс фото'}</span>
          </div>
        </div>
        <button className={b('btn')} type="button">Приступить к выполнению</button>
        <button onClick={close} className={b('close-icon')} type="button">
          <img src={closeIcon} alt="close" />
        </button>
      </div>
    </div>
  );
}

export default CashBackPopup;
