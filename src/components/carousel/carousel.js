import React, { useState } from 'react';
import './carousel.scss';

const Carousel = ({ slides = [] }) => {
  const [slidePosition, setSlidePosition] = useState(0);
  const slideWidth = 300;
  const slideMargin = 5;

  const updateSlidePosition = () => {
    if (slidePosition === slides.length - 2) {
      setSlidePosition(0);
      return;
    }
    setSlidePosition(slidePosition + 1);
  };

  return (
    <div className="carousel-container">
      <div className="carousel-frame">
        <div
          className="carousel-slider"
          style={{
            transform: `translateX(${ (-slidePosition * slideWidth) - (slidePosition > 0 ? (slideMargin * 2 * slidePosition) : 0) }px)`
          }}
        >
        {
          slides.map(slide => <div key={slide.key} className="carousel-slide">{slide}</div>)
        }
        </div>
      </div>
      { slides.length > 2 &&
        <div className="carousel-control"><span className="chevron" onClick={updateSlidePosition} /></div>
      }
    </div>
  )
};

export default Carousel;