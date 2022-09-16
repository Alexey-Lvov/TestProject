import React, { useState, useRef } from 'react';
import bem from 'utils/bem';
import arrowIcon from 'img/arrow-icon.png';
import './style.scss';

const b = bem('image-slider');

type Props = {
  images: string[];
};

function ImageSlider(props: Props) {
  const { images } = props;

  const [selectedImage, setImage] = useState<string>(images[0]);

  const listRef = useRef<any>(null);

  const selectImage = (image: string) => {
    setImage(image);
  };

  const scrollList = (value: boolean) => {
    listRef.current?.scroll({
      top: value ? listRef.current.scrollTop + 175 : listRef.current.scrollTop - 175,
      behavior: 'smooth',
    });
  };

  const handleScrollLeft = () => scrollList(false);
  const handleScrollRight = () => scrollList(true);

  return (
    <div className={b('')}>
      <div className={b('list')}>
        <button onClick={handleScrollLeft} className={b('arrow-btn')} type="button">
          <img src={arrowIcon} alt="arrow" />
        </button>
        <div className={b('list-images')} ref={listRef}>
          {images.map((image) => (
            <button
              className={b('list-image-btn')}
              onClick={() => selectImage(image)}
              type="button"
            >
              <img className={b('list-image')} src={image} alt="img" />
            </button>
          ))}
        </div>
        <button onClick={handleScrollRight} className={b('arrow-btn', { bottom: true })} type="button">
          <img src={arrowIcon} alt="arrow" />
        </button>
      </div>
      <img className={b('main-image')} src={selectedImage} alt="select" />
    </div>
  );
}

export default ImageSlider;
