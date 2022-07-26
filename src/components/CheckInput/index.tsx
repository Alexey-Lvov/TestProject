import React, { useState } from 'react';
import bem from 'utils/bem';
import checkIcon from 'img/check-icon.png';
import noCheckIcon from 'img/no-check.png';
import './style.scss';

const b = bem('check-input');

function CheckInput() {
  const [checked, setCheked] = useState(true);

  const handleClick = () => {
    setCheked(!checked);
  };

  return (
    <div className={b('', { checked })} onClick={handleClick} role="button" tabIndex={0}>
      <img src={checked ? checkIcon : noCheckIcon} alt="icon" />
    </div>
  );
}

export default CheckInput;
