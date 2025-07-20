import React from "react";
import './Workout.css';
import Shoulder from "./Shoulder";
import Chest from "./Chest";
import Back from "./Back";
import Leg from "./Leg";
import Biceps from "./Biceps";
import Cardio from "./Cardio";
import { AiOutlineBars } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
import { SlSocialInstagram } from "react-icons/sl";
import { TiSocialFacebookCircular } from "react-icons/ti";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import SlideProfile from '../SlideProfile';
import { RxCrossCircled } from "react-icons/rx";


function Workout() {

    const typeWorkout = ['Shoulders', 'Chest', 'Back', 'Leg', 'Biceps & Triceps', 'Cardio'];

      const home = useNavigate();
      const contactSection = useRef(null);

      const goto = () =>{
            home('/Male');
      }
    
      const scrollto = (ref) => {
        ref.current.scrollIntoView({ behavior: 'smooth' });
      };

      const [isOpen, setIsOpen] = useState(false);

      const [value, setValue] = useState('');

      const submitInput = () => {
        event.preventDefault();
        if(!value) {
            alert('please write something');
        }else{
                console.log(value)
        }
        
      }

  return (

   <>
        <div>
            <img className="Workout-Img" src="./img/background/ChatGPT Image Jul 10, 2025, 04_20_01 PM.png"/>
        </div>
        <div className="Workout-nav">
        <nav>
              <div className="Workout-bar">
                    <AiOutlineBars className='cursor' id='logomoree' onClick={() => setIsOpen(true)} />
                   <div className="Workout-bar">
                    <p className='cursor' onClick={goto}>Home</p>
                    <p className='cursor' onClick={()=> scrollto(contactSection)}>Contact</p>
                    </div>
                    <div className="workout-input">
                    <FaSearch />
                    <form onSubmit={submitInput}>
                    <input className="workout-input" value={value} onChange={(e) => setValue(e.target.value)} placeholder="Search" type="search" />
                    </form>
                    </div>
              </div>
              <div className={`panel ${isOpen ? 'open' : ''}`}>
            <RxCrossCircled className='butn-cross' onClick={() => setIsOpen(false)}/>
            <SlideProfile/>
        </div>
        </nav>
        </div>

        <div className='band-workout'>
            <img id="logoGymw" src="./img/background/barbell (1).png"/>
            <p>Gym Web</p>
        </div>


        {typeWorkout
            .filter((workout) => workout.toLowerCase().includes(value.toLowerCase()))
            .map((workout, index) => (
        <div key={index} className={`${workout}`}>
      <h3>{workout}</h3>
      {workout === 'Shoulders' && <Shoulder />}
      {workout === 'Chest' && <Chest />}
      {workout === 'Back' && <Back />}
      {workout === 'Leg' && <Leg />}
      {workout === 'Biceps & Triceps' && <Biceps />}
      {workout === 'Cardio' && <Cardio />}
        </div>
    ))}




        {/* <div className="Shoulders">
            <p>Shoulders</p>
        </div>

        <Shoulder/>

        <div className="Chest">
            <p>Chest</p>
        </div>

        <Chest/>

        <div className="Back">
            <p>Back</p>
        </div>

        <Back/>

        <div className="Leg">
            <p>Leg</p>
        </div>

        <Leg/>

        <div className="Biceps">
            <p>Biceps & Triceps</p>
        </div>

        <Arm/>

        <div className="Cardio">
            <p>Cardio</p>
        </div>

        <Cardio/> */}

        <div ref={contactSection} className="Contact-w">
                <div className="ContactUs-w">
                    <p>Contact Us</p>
                </div>
                <div className="insta-w">
                    <SlSocialInstagram />
                    <p>gym_web</p>
                </div>
                <div className="fb-w">
                    <TiSocialFacebookCircular />
                    <p>gym web</p>
                </div>
                </div>
        
   </>
  );
}

export default Workout;