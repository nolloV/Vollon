import React, { useState } from "react";
import "./slider.scss";

function Slider({ imagesSrc }) {
  //Etat de l'index pour le slider
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Mise à jour de currentImageIndex pour suivant et précédent
  const prevImage = () => {
    setCurrentImageIndex((oldIndex) => {
      return oldIndex === 0 ? imagesSrc.length - 1 : oldIndex - 1;
    });
  };
  const nextImage = () => {
    setCurrentImageIndex((oldIndex) => {
      return oldIndex === imagesSrc.length - 1 ? 0 : oldIndex + 1;
    });
  };

  return (
    <div className="slider">
      <div className="slider__container">
        {/* Bouton Précédent */}
        <button
          className="slider__container--arrow slider__container--arrow--left"
          onClick={prevImage}
        >
          &lt;
        </button>

        <div className="slider__container--track">
          <img
            src={process.env.PUBLIC_URL + imagesSrc[currentImageIndex]}
            alt={`Slide ${currentImageIndex + 1}`} // Indique le numéro de slide en ajoutant "Slide+1" par rapport l'index en cours
            className="slider__container--image"
          />
        </div>

        {/* Bouton Suivant */}
        <button
          className="slider__container--arrow slider__container--arrow--right"
          onClick={nextImage}
        >
          &gt;
        </button>
      </div>
    </div>
  );
}

export default Slider;
