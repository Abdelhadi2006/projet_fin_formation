import React from "react";
import './Workout.css';
import { useState } from "react";

function Biceps() {

    const [index, setIndex] = useState(0);
    
      const slides = [  // slides te3 exercices with the pic and the title
        {
          src: "/img/Arm/curl-barre.gif",
          title: "Curl à la barre"
        },
        {
          src: "/img/Arm/curl-au-pupitre-barre-ez-larry-scott.gif",
          title: "Curl pupitre barre EZ"
        },
        {
          src: "/img/Arm/curl-biceps-poulie-basse.gif",
          title: "Curl biceps à la poulie basse"
        },
        {
          src: "/img/Arm/curl-zottman.gif",
          title: "Curl Zottman"
        },
        {
          src: "/img/Arm/curl-haltere-prise-neutre.gif",
          title: "Curl haltère prise neutre"
        },
        {
          src: "/img/Arm/curl-biceps-avec-halteres-alterne.gif",
          title: "Curl biceps altèrné avec haltères"
        },
        {
          src: "/img/Arm/waiter-curl.gif",
          title: "Waiter curl"
        },
        {
          src: "/img/Arm/drag-curl.gif",
          title: "Drag curl"
        },
        {
          src: "/img/Arm/extensions-triceps-couche-halteres.gif",
          title: "Extension triceps couché avec haltères"
        },
        {
          src: "/img/Arm/barre-front.gif",
          title: "Barre front"
        },
        {
          src: "/img/Arm/extension-triceps-poulie-haute-corde.gif",
          title: "Extension triceps à la poulie haute à la corde"
        },
        {
          src: "/img/Arm/extension-verticale-triceps-poulie-basse.gif",
          title: "Extension verticale à la poulie basse"
        },
        {
          src: "/img/Arm/extension-horizontale-poulie.gif",
          title: "Extension horizontale à la poulie"
        },
        {
          src: "/img/Arm/kickback-alterne-assis.gif",
          title: "Kickback alterné assis"
        },
        {
          src: "/img/Arm/extension-triceps-poulie-haute.gif",
          title: "extension verticale à la poulie haute"
        },

      ];
    
      const itemWidth = 400;   // the width of the carousel to show three slides at the same time
    
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
        <div className="carousel-container-a">
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

export default Biceps;