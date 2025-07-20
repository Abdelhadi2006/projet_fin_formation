import './SlideProfile.css';
import React from 'react';
import { BsDot } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';

function SlideProfile() {

    const go = useNavigate();
          const checkAndGo = () => {
            go('/Profile');
          
        };
    

  return (

    <>
    <div className="info-container-slide">
                <div>
                <img className="pfp-slide" src="/img/smiling-athletic-man-black-background_613910-9870.avif"/>
                </div>
            <div className="Name-p-slide">
                <p>familyName</p>
                <p>surname</p>
            </div>
            <div className="infoprofile-slide">
                <p><BsDot />Subscription Type : Bodybuilding for a month</p>
                <p><BsDot />Sessions left : 7</p>
                <p className='cursor' onClick={checkAndGo}><BsDot />access profile</p>
            </div>
    </div>
    </>

  );
}

export default SlideProfile;
