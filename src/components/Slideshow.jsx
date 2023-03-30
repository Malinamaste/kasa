import React, { useState } from "react";
// import des icônes natives de react-icons
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

function Slideshow({ slides }) {
  const length = slides.length;
  // on définit l'index de la première slide
  const [current, setCurrent] = useState(0);

  // SI on est à la dernière slide : current === length - 1
  // => on passe à la première : 0
  // SINON => on passe à la prochaine : current + 1
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  // SI on est à la 1ère slide : current === 0
  // => on retourne à la dernière : length - 1
  // SINON => on va à la précèdente : current - 1
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <div className="slider">
      <img src={slides[current]} alt="Logement à la location" className="slider__picture" />
      {/* SI il y a plus d'une image, ALORS on affiche les flèches et le nombre d'images */}
      {length > 1 ? (
        <>
          <FaChevronLeft onClick={prevSlide} className="slider__previous" />
          <FaChevronRight onClick={nextSlide} className="slider__next" />
          <span className="slider__counter">
            {current + 1} / {length}
          </span>
        </>
      ) : null}
    </div>
  );
};

export default Slideshow;
