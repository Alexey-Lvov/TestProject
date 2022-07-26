import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import bem from 'utils/bem';
import Footer from 'components/Footer';
import Header from 'components/Header';
import partnersImage from 'img/partners-img.png';
import ReferalPopup from 'components/ReferalPopup';
import './style.scss';

const b = bem('profile-page');

function ProfilePage() {
  const [isShowPopup, showPopup] = useState(false);

  const handleClickReferal = () => {
    showPopup(true);
  };

  return (
    <div className={b('')}>
      <Header />
      <div className={b('main-content')}>
        <div className={b('container')}>
          <div className={b('container-content')} />
        </div>
        <div className={b('container')}>
          <div className={b('container-content')} />
        </div>
        <div className={b('container-referal')}>
          <span className={b('title-referal')}>Создайте реферальную ссылку</span>
          <span className={b('description-referal')}>И разместите ее на своей площадке, получая прибыль с каждой регистрации</span>
          <img className={b('img-referal')} src={partnersImage} alt="partners" />
          <button onClick={handleClickReferal} className={b('btn-referal')} type="button">Создать ссылку </button>
        </div>
        {isShowPopup && ReactDOM.createPortal(<ReferalPopup close={() => showPopup(false)} />, document.getElementById('root') as HTMLElement)}
      </div>
      <Footer />
    </div>
  );
}

export default ProfilePage;
