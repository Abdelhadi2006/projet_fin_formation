import React from "react";
import './index.css';
import { BsDot } from "react-icons/bs";
import { SlSocialInstagram } from "react-icons/sl";
import { TiSocialFacebookCircular } from "react-icons/ti";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

function MainPage() {

    const go = useNavigate();
    const checkAndGo = () => {
      go('/SignUp');
    
  };

  const aboutSection = useRef(null);
  const homeSection = useRef(null);
  const contactSection = useRef(null);

  const scrollto = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
    <div ref={homeSection} className="bodymain">
      <div className="imgNav">
      <nav className="navbar">
      <div className="writing">
            <img id="logoGym" className='cursor' onClick={() => scrollto(homeSection)} src="./img/background/barbell.png"/>
            <div className="writing">
            <p className='cursor' onClick={() => scrollto(homeSection)}>Home</p>
            <p className='cursor' onClick={() => scrollto(aboutSection)}>About</p>
            <p className='cursor' onClick={() => scrollto(contactSection)}>Contact</p>
            </div>
            <div className="join" ><input id="joinbut" type="submit" value="Join Us" onClick={checkAndGo} />
        </div>
      </div>
      </nav>
      <div className="you">
      <p>YOU</p>
      <p>VS YOU</p>
      </div>
      <div className="bybs">
        <p>Become your best version</p>
      </div>
      </div>
        <img className="logoimg" src="./img/background/2-removebg-preview.png"/>
        <div className="gymweb">
        <img className="logoGym2" src="./img/background/barbell (1).png"/> 
        <p>Gym Web</p>
        </div>
        
      <div className="imgInfo">
        <div className="aboutus">
            <p ref={aboutSection}>About Us</p>
        </div>
        <div className="description">
            <p>Gym Web is one of the most iconic fitness brands in the world. 
                Founded in 1965 in Venice Beach, California, attracting legendary athletes 
                like Arnold Schwarzenegger and countless fitness enthusiasts.</p>

            <p>Today, Gym Web offers state-of-the-art equipment, diverse group classes, 
                personal training, and a community-driven atmosphere for people of all 
                fitness levels. Whether you’re training for strength, endurance, weight loss, 
                or general wellness, Gym Web provides a motivating environment to help you achieve your goals.</p>

            <p>With spacious workout areas, dedicated zones for free weights, cardio, functional training, 
                and even recovery, each location is designed to make members feel empowered and supported. 
                Many clubs also offer amenities like saunas, smoothie bars, and kids’ clubs.</p>
                
            <p>Gym Web’s mission is simple: to help you realize your potential — every day, every rep, 
                every set.</p>
        </div>

        <div>
            <img className="three" src="./img/background/Untitled_design__4_-removebg-preview.png" />
        </div>
        <div>
            <img className="three2" src="./img/background/Untitled_design__4_-removebg-preview.png" />
        </div>

        <div className="imgInfo">

        <div className="ourcoachs">
            <p>Our Coaches</p>
        </div>
        <div className="coachs">
        <img id="coach1" src="./img/background/portrait-of-a-trainer-in-gym-royalty-free-image-1584723855.jpg"/>
        <img id="coach2" src="./img/background/istockphoto-1475273176-612x612.jpg"/>
        <img id="coach3" src="./img/background/images.jpeg"/>
        </div>
        </div>
        <div className="textcoach">
            <div className="textcoach1">
            <p>Coach 01</p>
            </div>
            <div className="textcoach2">
            <p>Coach 02</p>
            </div>
            <div className="textcoach3">
            <p>Coach 03</p>
            </div>
        </div>

        <div>
            <img className="subback" src="./img/background/+--1.png" />
        </div>

        <div>
            <img className="subback" src="./img/background/++.png" />
        </div>

        <div className="SubscriptionTitle">
            <p>Subscription Plans</p>
        </div>

        <div className="frame">
        <div className="frame1">
            <div className="TitleFrame1">
            <p>Bodybuilding</p>
            </div>
            <div className="TextFrame">
                <p>02 sessions per week</p>
                <p className="prix">29.99$/month</p>
                <p>03 sessions per week</p>
                <p className="prix">34.99$/month</p>
                <p>04 sessions per week</p>
                <p className="prix">39.99$/month</p>
            </div>
        </div>
        <div className="frame2">
            <div className="TitleFrame2">
            <p>Bodybuilding + Cardio</p>
            </div>
            <div className="TextFrame">
                <p>02 sessions per week</p>
                <p className="prix">39.99$/month</p>
                <p>03 sessions per week</p>
                <p className="prix">44.99$/month</p>
                <p>04 sessions per week</p>
                <p className="prix">49.99$/month</p>
            </div>
        </div>
        <div className="frame3">
            <div className="TitleFrame3">
            <p>Cardio</p>
            </div>
            <div className="TextFrame">
                <p>02 sessions per week</p>
                <p className="prix">24.99$/month</p>
                <p>03 sessions per week</p>
                <p className="prix">29.99$/month</p>
                <p>04 sessions per week</p>
                <p className="prix">34.99$/month</p>
            </div>
        </div>
        </div>
        <div className="WhyTitle">
            <p>Why Us ?</p>
        </div>
        
        <div className="contentWhy">
            <p><BsDot />  Best Gym</p>
            <p><BsDot />  Experts Coach</p>
            <p><BsDot />  Good Workout Facilities</p>
            <p><BsDot />  Consultation With Experts</p>
        </div>

        <div >
            <img className="picwhy" src="./img/background/Rectangle 22.png" />
            <img className="picswhy" src="./img/background/Rectangle 23.png" />
        </div>

        <div ref={contactSection} className="Contact">
        <div className="ContactUs">
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

  )
}


export default MainPage 