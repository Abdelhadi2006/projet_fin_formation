import './Male.css'
import React from "react";
import { BsDot } from "react-icons/bs";
import { AiOutlineBars } from "react-icons/ai";
import { SlSocialInstagram } from "react-icons/sl";
import { TiSocialFacebookCircular } from "react-icons/ti";
import Carousel from "./Carousel";
import Planning from "./Planning";
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import SlideProfile from './components/SlideProfile';
import { RxCrossCircled } from "react-icons/rx";



function Male() {

      const trainingSection = useRef(null);
      const homeSection = useRef(null);
      const rulesSection = useRef(null);
      const planningSection = useRef(null);
    
      const scrollto = (ref) => {
        ref.current.scrollIntoView({ behavior: 'smooth' });
      };

      const go = useNavigate();
          const checkAndGo = () => {
            go('/Workout');
          
        };

        const [isOpen, setIsOpen] = useState(false);

  return (
   <>
   <div ref={homeSection} className="male-page">
   <div className='arrière'>
    <div className='color'>
     <nav className="nav">
      <div className="bar">
            <AiOutlineBars className='cursor' id='logomore' onClick={() => setIsOpen(true)} />
        <div className={`panel ${isOpen ? 'open' : ''}`}>
            <RxCrossCircled className='butn-cross' onClick={() => setIsOpen(false)}/>
            <SlideProfile/>
        </div>
           <div className="bar">
            <p className='cursor' onClick={() => scrollto(homeSection)}>Home</p>
            <p className='cursor' onClick={() => scrollto(trainingSection)}>Training</p>
            <p className='cursor' onClick={() => scrollto(planningSection)}>Planning</p>
            <p className='cursor' onClick={() => scrollto(rulesSection)}>Rules</p>
            </div>
            <img className='cursor' onClick={() => scrollto(homeSection)} id="logoGym" src='./img/background/barbell.png'/>
      </div>
      </nav>

        <div className='Welcome'>
            <h2 id='titlewelcome'>Welcome</h2>
            <p className='messageWelcome'>"Welcome to our gym community! We’re excited to have you here and can’t wait 
                to see you push your limits, discover your strength, and become the best version
                 of yourself. Whether you’re a beginner or a seasoned athlete, this is your space 
                 to train hard, stay motivated, and grow stronger every day. Our team is here to 
                 support you, challenge you, and cheer you on every step of the way. Together, let’s 
                 build healthy habits, smash your goals, and make every workout count. Let’s get started!"</p>
        </div>
        </div>
        </div>
        <div className='Planning'>
                
            </div>
        <div className='band'>
            <img id="logoGym" src="./img/background/barbell.png"/>
            <p>Gym Web</p>
        </div>

        <div ref={trainingSection} onClick={checkAndGo} className='work'>
            <p>Training Categories</p>
        </div>
        <div>
            <img className="THREE" src="./img/background/Untitled_design__4_-removebg-preview.png" />
        </div>
        <div>
            <img className="THREE2" src="./img/background/Untitled_design__4_-removebg-preview.png" />
        </div>
        <Carousel />
        <div>
            <img className="subbackg" src="./img/background/+-1.png" />
        </div>

        <div>
            <img className="subbackg" src="./img/background/+.png" />
        </div>
        <div className="SubsTitle">
            <p>Subscription Plans</p>
        </div>

        <div className="cadre">
            <div className="frame1">
            <div className="TitleFrame1">
            <p>Bodybuilding</p>
            </div>
            <div className="TextFrame">
                <p>02 sessions per week</p>
                <p className="price">29.99$/month</p>
                <p>03 sessions per week</p>
                <p className="price">34.99$/month</p>
                <p>04 sessions per week</p>
                <p className="price">39.99$/month</p>
            </div>
        </div>
        <div className="frame2">
            <div className="TitleFrame2">
            <p>Bodybuilding + Cardio</p>
            </div>
            <div className="TextFrame">
                <p>02 sessions per week</p>
                <p className="price">39.99$/month</p>
                <p>03 sessions per week</p>
                <p className="price">44.99$/month</p>
                <p>04 sessions per week</p>
                <p className="price">49.99$/month</p>
            </div>
        </div>
        <div className="frame3">
            <div className="TitleFrame3">
            <p>Cardio</p>
            </div>
            <div className="TextFrame">
                <p>02 sessions per week</p>
                <p className="price">24.99$/month</p>
                <p>03 sessions per week</p>
                <p className="price">29.99$/month</p>
                <p>04 sessions per week</p>
                <p className="price">34.99$/month</p>
            </div>
        </div>
        </div>

        <div>
            <div ref={planningSection} className='PlanningTitle'>
                <p>Planning</p>
            </div>
            <img className='backgroundP' src='./img/background/SL_060521_43530_09.jpg'/>

            <Planning />            

        </div>

        <div>
            <img className="rulesbackg" src="./img/background/Untitled_design__6_-removebg-preview.png" />
            <img className="rulebackg" src="./img/background/Capture d’écran 2025-07-09 234957.png" />
        </div>

        <div>
            <div ref={rulesSection} className='RulesTitle'>
                <p>Rules</p>
            </div>
            <div className="contentRules">
                    <p><BsDot />  Always wipe down equipment and put weights back where they belong.</p>
                    <p><BsDot />  Give people enough room — don’t crowd or interrupt them mid-set.</p>
                    <p><BsDot />  Don’t hog machines — let others “work in” if needed, especially when it’s busy.</p>
                    <p><BsDot />  Bring a towel, wear clean clothes, and use deodorant.</p>
                    <p><BsDot />  Lift within your limits, use collars/clips, and ask for a spotter when needed.</p>
                    <p><BsDot />  No loud phone calls, no blasting music, and no excessive grunting or slamming weights.</p>
                </div>

            <div className="Contact">
                    <div className="Contactus">
                        <p>Contact Us</p>
                    </div>
                    <div className="insta">
                        <SlSocialInstagram />
                        <p>gym_web</p>
                    </div>
                    <div className="fb">
                        <TiSocialFacebookCircular />
                        <p>gym web</p>
                    </div>
                    </div>

        </div>
        </div>
   </>
  );
}

export default Male;
