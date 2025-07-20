import React from "react";
import './Workout.css';
import { useState } from "react";

function Leg() {

    const [index, setIndex] = useState(0);
    
      const slides = [
        {
          src: "/img/Leg/rowing-assis-machine-hammer-strenght.gif",
          title: "Presse à cuisse inclinée"
        },
        {
          src: "/img/Leg/homme-faisant-un-squat-avec-barre.gif",
          title: "Squat"
        },
        {
          src: "/img/Leg/leg-extension-exercice-musculation.gif",
          title: "Leg extension"
        },
        {
          src: "/img/Leg/squat-barre-devant-front.gif",
          title: "Squat barre devant"
        },
        {
          src: "/img/Leg/hack-squat.gif",
          title: "Hack squat"
        },
        {
          src: "/img/Leg/pin-squat.gif",
          title: "Pin squat"
        },
        {
          src: "/img/Leg/fentes-avant-kettlebell.gif",
          title: "Fentes avant avec kettlebell"
        },
        {
          src: "/img/Leg/leg-curl-allonge.gif",
          title: "Leg curl allongé"
        },
        {
          src: "/img/Leg/souleve-de-terre.gif",
          title: "Soulevé de terre"
        },
        {
          src: "/img/Leg/extensions-mollets-hack-squat.gif",
          title: "Extension de mollets au hack squats"
        },
        {
          src: "/img/Leg/extension-mollets-smith-machine.gif",
          title: "Extension de mollets debout à la smith machine"
        },
        {
          src: "/img/Leg/extension-mollets-assis-machine.gif",
          title: "Extension de mollets assis à la machine"
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
        <div className="carousel-container-l">
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

export default Leg;