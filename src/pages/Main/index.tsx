import React from 'react';
import bem from 'utils/bem';
import Banner from 'components/Banner';
import AdvertisingStrip from 'components/AdvertisingStrip';
import Footer from 'components/Footer';
import './style.scss';

const b = bem('main-page');

function MainPage() {
  return (
    <div className={b('')}>
      <Banner />
      <AdvertisingStrip />
      <Footer />
    </div>
  );
}

export default MainPage;
