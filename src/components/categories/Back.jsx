import React from "react";
import './Workout.css';
import { useState } from "react";

function Back() {

    const [index, setIndex] = useState(0);
    
      const slides = [
        {
          src: "/img/Back/tirage-horizontal-poulie.gif",
          title: "Tirage horizontal à la poulie"
        },
        {
          src: "/img/Back/rowing-barre.gif",
          title: "Rowing barre"
        },
        {
          src: "/img/Back/shrug-barre.gif",
          title: "Shrug barre"
        },
        {
          src: "/img/Back/rowing-haltere-un-bras.gif",
          title: "Rowing haltère à un bras"
        },
        {
          src: "/img/Back/rowing-barre-t-landmine.gif",
          title: "Rowing T-bar"
        },
        {
          src: "/img/Back/tirage-vertical-prise-serree.gif",
          title: "Tirage vertical prise serrée"
        },
        {
          src: "/img/Back/rowing-assis-machine-prise-pronation.gif",
          title: "Rowing en pronation assis à la machine"
        },
        {
          src: "/img/Back/rowing-assis-machine-hammer-strenght.gif",
          title: "Rowing en prise neutre assis à la machine"
        },
        {
          src: "/img/Back/souleve-de-terre.gif",
          title: "Soulevé de terre"
        },
        {
          src: "/img/Back/traction-prise-neutre.gif",
          title: "Traction prise neutre"
        },
        {
          src: "/img/Back/tirage-vertical-poitrine.gif",
          title: "Tirage vertical poitrine"
        },
        {
          src: "/img/Back/pull-over-poulie.gif",
          title: "Pull-over à la poulie"
        },
        {
          src: "/img/Back/tirage-horizontal-prise-large.gif",
          title: "Tirage horizontal prise large"
        },
        {
          src: "/img/Back/tirage-vertical-prise-inversee.gif",
          title: "Tirage vertical prise inversée"
        },
        {
          src: "/img/Back/traction-musculation-dos.gif",
          title: "Traction"
        },

      ];
    
      const itemWidth = 400;
    
      const nextSlide = () => {
        if (index < slides.length - 3) {
          setIndex(index + 1);
        } else {
          setIndex(0);
        }
      };
    
      const prevSlide = () => {
        if (index > 0) {
          setIndex(index - 1);
        } else {
          setIndex(slides.length - 3);
        }
      };
    
      return (
        <div className="carousel-container-b">
          <button className="prev-w" onClick={prevSlide}>
            &#10094;
          </button>
    
          <div
            className="carousel-track-w"
            style={{ transform: `translateX(-${index * itemWidth}px)` }}
          >
            {slides.map((slide, i) => (
              <div className="carousel-item-w" key={i}>
                <img src={slide.src} alt={`slide-${i}`} />
                <h3 className="slide-title-w">{slide.title}</h3>
              </div>
            ))}
          </div>
    
          <button className="next-w" onClick={nextSlide}>
            &#10095;
          </button>
        </div>
      );

}

export default Back;