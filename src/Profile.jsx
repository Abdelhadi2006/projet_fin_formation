import React from "react";
import './Profile.css';
import { BsDot } from "react-icons/bs";
import { IoExitOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";


function Profile() {

    const go = useNavigate();
    const checkAndGo = () => {
        go('/Male');
          
    };

    const goto = () => {
    go('/LogIn');
          
    };
  return (
    <>
    <div className="pfp-container">
    <div className="Workout-nav">
            <nav>
                  <div className="Workout-bar-P">
                    <img id="logoGym" src="./img/background/barbell.png"/>
                        <p className='cursor' onClick={checkAndGo}>Home</p>
                  </div>
            </nav>
    </div>
    <div className="info-container">
        <div>
        <img className="pfp" src="/img/smiling-athletic-man-black-background_613910-9870.avif"/>
        </div>
    <div className="Name-p">
        <p>Family Name</p>
        <p>Surname</p>
    </div>
    <div className="infoprofile">
        <p><BsDot />Subscription Type : Bodybuilding for a month</p>
        <p><BsDot />Sessions left : 7</p>
        <p><BsDot />Starting day : 01-01-2025</p>
        <p><BsDot />Finishing day : 01-02-2025</p>
    </div>
    </div>

    <div className="disconnectpfp">
        <p className="cursor" onClick={goto}>Disconnect ? </p> 
        <IoExitOutline className="cursor" onClick={goto}/>
    </div>
    </div>
    </>

  )
}


export default Profile;