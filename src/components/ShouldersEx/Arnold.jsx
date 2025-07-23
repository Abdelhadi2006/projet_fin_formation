import React from "react";
import './Shoulder.css';
import { IoArrowBackOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

function Arnold() {   // i couldnt ndir gae the pages, so dert one besh nchouf how it works
    const [userData, setUserData] = useState(null);
    const navigate = useNavigate();

     useEffect(() => {
            const user = JSON.parse(localStorage.getItem('user'));
            if (user) {
                setUserData(user);
            }
        }, []);

    const Back = () => {
        navigate(-1);
    };   // function :  going back to the workout section

  const checkAndGo = () => {
        navigate(userData?.gender === 'female' ? '/Female' : '/Male');
    };  // function : going to home according to the gender    // function : click on home => going to the home according to gender
    
    const Go = () => {
      navigate('/Workout');
    };   // function : going to the workout page
    
      return (
        <>
        <nav>
              <div className="Shoulder-bar">
                    < IoArrowBackOutline onClick={Back} className='cursor'/> {/* going back */}
                   <div className="Shoulder-bar">
                    <p className='cursor' onClick={checkAndGo}>Home</p>
                    <p className='cursor' onClick={Go}>Training</p>
                    </div>
              </div>
        </nav>

        <div className="img-workout" >
            <p>Développé arnold</p>
        </div>

        <img className="imgworkout" src="/img/shoulder/developpe-arnold-exercice-musculation.gif"/>

        <div className="description-exo">
            <p>"Le développé Arnold (dumbbell Arnold press) est un exercice très efficace 
                pour développer les muscles deltoïdes. Il s’agit d’une variante unique du 
                développé épaules avec haltères, qui doit son nom au bodybuilder, acteur 
                et gouverneur emblématique Arnold Schwarzenegger.
                Ce mouvement permet de maximiser l’activation des deltoïdes antérieur et 
                moyen, ce qui en fait un excellent exercice deux en un. Du fait de sa grande 
                amplitude de mouvement et de la rotation qu’il nécessite, il augmente le temps 
                sous tension, ce qui favorise une plus grande hypertrophie.
                Le développé Arnold est adapté à la plupart des pratiquants et présente peu de 
                risques de blessures, sauf si la mobilité de l’épaule est limitée. 
                Ne nécessitant qu’une paire d’haltères, il constitue un excellent exercice 
                à intégrer à tout programme d’entraînement des épaules."</p>
        </div>

        </>
      );

}

export default Arnold;