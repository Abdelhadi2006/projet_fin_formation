import React, { useState } from "react";
import "./Carousel.css";

const Carousel = () => {
  const [index, setIndex] = useState(0);

  const slides = [  
    {
      src: "/img/background/corde-a-sauter.gif",
      title: "Cardio"
    },
    {
      src: "/img/background/developpe-arnold-exercice-musculation.gif",
      title: "Shoulder"
    },
    {
      src: "/img/background/developpe-couche-halteres-exercice-musculation.gif",
      title: "Chest"
    },
    {
      src: "/img/background/rowing-barre.gif",
      title: "Back"
    },
    {
      src: "/img/Leg/homme-faisant-un-squat-avec-barre.gif",
      title: "Leg"
    },
    {
      src: "/img/background/curl-biceps-avec-halteres-alterne.gif",
      title: "Arm"
    },
  ];

  const itemWidth = 400;  // the width of the slides

  const nextSlide = () => {
    if (index < slides.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  };  // function : go to the right

  const prevSlide = () => {
    if (index > 0) {
      setIndex(index - 1);
    } else {
      setIndex(slides.length - 1);
    }
  };  // function : go to the left

  return (
    <div className="carousel-container">
      <button className="prev" onClick={prevSlide}>
        &#10094;
      </button>

      <div
        className="carousel-track"
        style={{ transform: `translateX(-${index * itemWidth}px)` }}  // translation of the slide
      >
        {slides.map((slide, i) => (
          <div className="carousel-item" key={i}>
            <img src={slide.src} alt={`slide-${i}`} />
            <h3 className="slide-title">{slide.title}</h3>
          </div>  // styling the slide
        ))}
      </div>

      <button className="next" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
};

export default Carousel;