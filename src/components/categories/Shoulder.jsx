import React from "react";
import './Workout.css';
import { useState } from "react";

function Shoulder() {

    const [index, setIndex] = useState(0);
    

      const slides = [
        {
          src: "/img/shoulder/developpe-arnold-exercice-musculation.gif",
          title: "Développé arnold"
        },
        {
          src: "/img/shoulder/face-pull.gif",
          title: "Développé épaule avec haltères"
        },
        {
          src: "/img/shoulder/developpe-epaule-halteres.gif",
          title: "Face pull"
        },
        {
          src: "/img/shoulder/pec-deck-inverse.gif",
          title: "Pec deck inversé"
        },
        {
          src: "/img/shoulder/elevations-frontales-exercice-musculation.gif",
          title: "Elevations frontales"
        },
        {
          src: "/img/shoulder/elevations-laterales-exercice-musculation.gif",
          title: "Elevations latérales"
        },
        {
          src: "/img/shoulder/oiseau-assis-sur-banc.gif",
          title: "Oiseau assis sur un banc"
        },
        {
          src: "/img/shoulder/developpe-epaules-a-la-machine-shoulder-press.gif",
          title: "Développé épaule à la machine et la smith machine"
        },
        {
          src: "/img/shoulder/thruster.gif",
          title: "Thruster"
        },
        {
          src: "/img/shoulder/developpe-nuque-barre-guidee.gif",
          title: "Développé nuque barre guidée"
        },
        {
          src: "/img/shoulder/croix-de-fer-halteres.gif",
          title: "Croix de fer avec haltères"
        },
        {
          src: "/img/shoulder/tirage-menton-machine-guidee.gif",
          title: "Tirage menton"
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
        <div className="carousel-container-s">


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

export default Shoulder;