import React from "react";
import './Workout.css';
import { useState } from "react";

function Cardio() {

    const [index, setIndex] = useState(0);
    
      const slides = [  // slides te3 exercices with the pic and the title
        {
          src: "/img/Cardio/jumping-jack.gif",
          title: "Jumping jack"
        },
        {
          src: "/img/Cardio/corde-a-sauter.gif",
          title: "Corde à sauter"
        },
        {
          src: "/img/Cardio/mountain-climber-exercice-musculation.gif",
          title: "Mountain climber"
        },
        {
          src: "/img/Cardio/tapis-de-course.gif",
          title: "Tapis de course"
        },
        {
          src: "/img/Cardio/rameur.gif",
          title: "Rameur"
        },
        {
          src: "/img/Cardio/velo-stationnaire.gif",
          title: "Vélo spinning"
        },
        {
          src: "/img/Cardio/battle-rope-vague-alternee-haute.gif",
          title: "La vague alternée haute"
        },
        {
          src: "/img/chest/pompe-musculation.gif",
          title: "Pompes"
        },
        {
          src: "/img/Cardio/crunch-au-sol-exercice-musculation.gif",
          title: "Crunch"
        },
        {
          src: "/img/Cardio/releve-jambes-chaise-romaine-abdominaux.gif",
          title: "Relevé de jambes à la chaise romaine"
        },
        {
          src: "/img/Cardio/crunch-poulie-haute-exercice-musculation.gif",
          title: "crunch à la poulie"
        },
        {
          src: "/img/Cardio/touche-talon-alternes.gif",
          title: "Touche talon alterné"
        },
        {
          src: "/img/Cardio/exercice-abdos-bicyclette.gif",
          title: "Crunch bicyclette"
        },
        {
          src: "/img/Cardio/russian-twist-avec-developpe-epaule.gif",
          title: "Russian twist avec développé épaule"
        },
        {
          src: "/img/Cardio/planche-abdos.gif",
          title: "Planche"
        },

      ];
    
      const itemWidth = 400;  // the width of the carousel to show three slides at the same time
    
      const nextSlide = () => {
        if (index < slides.length - 3) {
          setIndex(index + 1);
        } else {
          setIndex(0);
        }
      };  // function : go to the right
    
      const prevSlide = () => {
        if (index > 0) {
          setIndex(index - 1);
        } else {
          setIndex(slides.length - 3);
        }
      };  // function : go to the left
    
      return (
        <div className="carousel-container-ca">
          <button className="prev-w" onClick={prevSlide}>
            &#10094;
          </button>
    
          <div
            className="carousel-track-w"
            style={{ transform: `translateX(-${index * itemWidth}px)` }}  // translation with one and showing 3 slides at the same time
          >
            {slides.map((slide, i) => (
              <div className="carousel-item-w" key={i}>
                <img src={slide.src} alt={`slide-${i}`} />
                <h3 className="slide-title-w">{slide.title}</h3>
              </div>  // styling the slide
            ))}
          </div>
    
          <button className="next-w" onClick={nextSlide}>
            &#10095;
          </button>
        </div>
      );

}

export default Cardio;