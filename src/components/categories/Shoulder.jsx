import React from "react";
import './Workout.css';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Shoulder() {

    const [index, setIndex] = useState(0);
    const navigate = useNavigate();
    
      const slides = [  // slides te3 exercices with the pic and the title
        {
          src: "/img/shoulder/developpe-arnold-exercice-musculation.gif",
          title: "Développé arnold",
          path: "/arnold"
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
    
      const itemWidth = 400; // the width of the carousel to show three slides at the same time
    
      const nextSlide = () => {
        if (index < slides.length - 3) {
          setIndex(index + 1);
        } else {
          setIndex(0);
        }
      };   // function : go to the right
    
      const prevSlide = () => {
        if (index > 0) {
          setIndex(index - 1);
        } else {
          setIndex(slides.length - 3);
        }
      };  // function : go to the left

      const slideclick = (path) => {
        navigate(path);
    };  // function : going to the slide that the user clicked on
    
      return (
        <div className="carousel-container-s">


          <button className="prev-w" onClick={prevSlide}>
            &#10094;
          </button>
    
          <div
            className="carousel-track-w"
            style={{ transform: `translateX(-${index * itemWidth}px)` }}  // translation with one and showing 3 slides at the same time
          >
            {slides.map((slide, i) => (
              <div className="carousel-item-w" key={i} onClick={() => slideclick(slide.path)} style={{ cursor: 'pointer' }}>
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

export default Shoulder;