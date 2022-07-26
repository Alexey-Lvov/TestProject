import React, { useEffect } from 'react';
import bem from 'utils/bem';
import closeIcon from 'img/close-icon-white.png';
import './style.scss';

const b = bem('referal-popup');

type Props = {
  close: () => void,
};

function ReferalPopup(props: Props) {
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
        <span className={b('title')}>Реферальная ссылка</span>
        <input className={b('input')} placeholder="Описание ссылки" />
        <button className={b('btn')} type="button">Создать</button>
        <button onClick={close} className={b('close-icon')} type="button">
          <img src={closeIcon} alt="close" />
        </button>
      </div>
    </div>
  );
}

export default ReferalPopup;
