import './Female.css'
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



function Female() {

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
   <div ref={homeSection} className="female-page">
   <div className='arrière-f'>
    <div className='color-f'>
     <nav className="nav-f">
      <div className="bar-f">
            <AiOutlineBars className='cursor' id='logomore' onClick={() => setIsOpen(true)} />
        <div className={`panel ${isOpen ? 'open' : ''}`}>
            <RxCrossCircled className='butn-cross' onClick={() => setIsOpen(false)}/>
            <SlideProfile/>
        </div>
           <div className="bar-f">
            <p className='cursor' onClick={() => scrollto(homeSection)}>Home</p>
            <p className='cursor' onClick={() => scrollto(trainingSection)}>Training</p>
            <p className='cursor' onClick={() => scrollto(planningSection)}>Planning</p>
            <p className='cursor' onClick={() => scrollto(rulesSection)}>Rules</p>
            </div>
            <img className='cursor' onClick={() => scrollto(homeSection)} id="logoGym" src='./img/background/barbell.png'/>
      </div>
      </nav>

        <div className='Welcome-f'>
            <h2 id='titlewelcome-f'>Welcome</h2>
            <p className='messageWelcome'>"Welcome to our gym community! We’re excited to have you here and can’t wait 
                to see you push your limits, discover your strength, and become the best version
                 of yourself. Whether you’re a beginner or a seasoned athlete, this is your space 
                 to train hard, stay motivated, and grow stronger every day. Our team is here to 
                 support you, challenge you, and cheer you on every step of the way. Together, let’s 
                 build healthy habits, smash your goals, and make every workout count. Let’s get started!"</p>
        </div>
        </div>
        </div>
        <div className='Planning-f'>
                
            </div>
        <div className='bande'>
            <img id="logoGym" src="./img/background/barbell.png"/>
            <p>Gym Web</p>
        </div>

        <div ref={trainingSection} onClick={checkAndGo} className='work-f'>
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
            <img className="subbackg-f" src="./img/+-1().png" />
        </div>

        <div>
            <img className="subbackg-f" src="./img/+().png" />
        </div>
        <div className="SubsTitle-f">
            <p>Subscription Plans</p>
        </div>

        <div className="cadre-f">
            <div className="frame1-f">
            <div className="TitleFrame1-f">
            <p>Bodybuilding</p>
            </div>
            <div className="TextFrame-f">
                <p>02 sessions per week</p>
                <p className="price-f">29.99$/month</p>
                <p>03 sessions per week</p>
                <p className="price-f">34.99$/month</p>
                <p>04 sessions per week</p>
                <p className="price-f">39.99$/month</p>
            </div>
        </div>
        <div className="frame2-f">
            <div className="TitleFrame2-f">
            <p>Bodybuilding + Cardio</p>
            </div>
            <div className="TextFrame-f">
                <p>02 sessions per week</p>
                <p className="price-f">39.99$/month</p>
                <p>03 sessions per week</p>
                <p className="price-f">44.99$/month</p>
                <p>04 sessions per week</p>
                <p className="price-f">49.99$/month</p>
            </div>
        </div>
        <div className="frame3-f">
            <div className="TitleFrame3-f">
            <p>Cardio</p>
            </div>
            <div className="TextFrame-f">
                <p>02 sessions per week</p>
                <p className="price-f">24.99$/month</p>
                <p>03 sessions per week</p>
                <p className="price-f">29.99$/month</p>
                <p>04 sessions per week</p>
                <p className="price-f">34.99$/month</p>
            </div>
        </div>
        </div>

        <div>
            <div ref={planningSection} className='PlanningTitle-f'>
                <p>Planning</p>
            </div>
            <img className='backgroundP-f' src='./img/Capture d’écran 2025-07-11 225346.png'/>

            <Planning />            

        </div>

        <div>
            <img className="rulesbackg-f" src="./img/background/Untitled_design__6_-removebg-preview.png" />
            <img className="rulebackg-f" src="./img/background/Capture d’écran 2025-07-09 234957.png" />
        </div>

        <div>
            <div ref={rulesSection} className='RulesTitle-f'>
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
                    <div className="Contactus-f">
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

export default Female;
