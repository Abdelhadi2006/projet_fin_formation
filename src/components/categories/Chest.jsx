import React from "react";
import './Workout.css';
import { useState } from "react";

function Chest() {

    const [index, setIndex] = useState(0);
    
      const slides = [
        {
          src: "/img/chest/developpe-couche.gif",
          title: "Développé couché barre"
        },
        {
          src: "/img/chest/developpe-incline-barre.gif",
          title: "Développé incliné barre"
        },
        {
          src: "/img/chest/ecarte-couche-haltere.gif",
          title: "Ecarté couché haltères"
        },
        {
          src: "/img/chest/ecarte-poulie-vis-a-vis-exercice-musculation-pectoraux.gif",
          title: "Ecarté à la poulie vis-à-vis"
        },
        {
          src: "/img/chest/developpe-couche-halteres-exercice-musculation.gif",
          title: "Développé couché haltères"
        },
        {
          src: "/img/chest/pec-deck-butterfly-exercice-musculation.gif",
          title: "Pec deck ou butterfly"
        },
        {
          src: "/img/chest/ecartes-decline-avec-halteres.gif",
          title: "Ecarté décliné avec haltères"
        },
        {
          src: "/img/chest/hyght-dumbell-fly.gif",
          title: "Ecarté Hyght"
        },
        {
          src: "/img/chest/pompe-musculation.gif",
          title: "Pompes"
        },
        {
          src: "/img/chest/pullover-haltere.gif",
          title: "Pullover avec haltères"
        },
        {
          src: "/img/chest/ecarte-unilateral-a-la-poulie.gif",
          title: "Ecarté unilateral à la poulie"
        },
        {
          src: "/img/chest/ecartes-incline-avec-halteres.gif",
          title: "Ecarté incliné avec haltères"
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
        <div className="carousel-container-c">
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

export default Chest;