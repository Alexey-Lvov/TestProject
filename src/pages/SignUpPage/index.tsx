import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import bem from 'utils/bem';
import InputMask from 'react-input-mask';
import { useParams } from 'react-router-dom';
import Footer from 'components/Footer';
import Header from 'components/Header';
import Select from 'react-select';
import CheckInput from 'components/CheckInput';
import { createUserStart } from 'redux/auth/reducer';
import './style.scss';

const b = bem('sign-up-page');

const options = [{ value: 7, label: '+7' }, { value: 8, label: '+8' }, { value: 9, label: '+9' }];

const customStyles = {
  control: (provided: any) => ({
    ...provided,
    width: '106px',
    height: '50px',
    border: '1px solid #D9D9D9',
    borderRadius: '10px',
    outline: 'none',
  }),
  option: (provided: any) => ({
    ...provided,
    width: '106px',
  }),
  container: (provided: any) => ({
    ...provided,
    width: '106px',
  }),
};

function SignUpPage() {
  const { type } = useParams<{ type: string }>();
  const dispatch = useDispatch();

  const [number, setNumber] = useState('');
  const [code, setCode] = useState('');
  const [isShowCode, showCode] = useState(false);

  const getText = () => {
    switch (type) {
      case 'customer': {
        return 'покупатель';
      }
      case 'saler': {
        return 'продавец';
      }
      default: return '';
    }
  };

  const handleChangeNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNumber(e.target.value);
  };

  const handleChangeCode = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(4);
    dispatch(createUserStart({ type: type || '', number }));
    setCode(e.target.value);
  };

  const clickCode = () => {
    showCode(true);
  };

  return (
    <div className={b('')}>
      <Header noControls />
      <div className={b('main-content')}>
        <div className={b('title')}>
          {'Войдите или создайте\nпрофиль'}
          <span className={b('title-text')}>
            {' как '}
            {getText()}
          </span>
        </div>
        <div className={b('container')}>
          <span className={b('contact')}>Контактный телефон</span>
          <div className={b('input-block')}>
            <Select
              className={b('select')}
              options={options}
              styles={customStyles}
              value={options[0]}
            />
            <InputMask
              className={b('input-number')}
              mask="(999) 999 - 99 - 99"
              value={number}
              onChange={handleChangeNumber}
              alwaysShowMask
              maskPlaceholder="-"
            />
          </div>
          {isShowCode && (
            <InputMask
              className={b('input-code')}
              mask="9 9 9 9"
              value={code}
              onChange={handleChangeCode}
              alwaysShowMask
              maskPlaceholder="-"
            />
          )}
          <button onClick={clickCode} className={b('btn')} type="button">Получить код</button>
          <div className={b('checked-block')}>
            <CheckInput />
            <span className={b('checked-text')}>{'Согласен с условиями Правил пользования\nторговой площадкой и правилами возврата'}</span>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SignUpPage;
