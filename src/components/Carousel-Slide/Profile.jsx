import React, { useEffect, useState, useRef } from "react";
import './Profile.css';
import { BsDot } from "react-icons/bs";
import { IoExitOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function Profile() {  // i tried to integrate the upload pic but i dont know why it is not working
    const [userData, setUserData] = useState(null);
    const [isUploading, setIsUploading] = useState(false);
    const fileInputRef = useRef();
    const [error, setError] = useState(null);
    const go = useNavigate();

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user) {
            setUserData(user);
        }
    }, []);   // function : getting the user

    const handlePhotoUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setIsUploading(true);
    setError(null); 

    try {
    const formData = new FormData();
    formData.append('photo', file);

    const response = await axios.patch(
      'http://localhost:4000/api/users/upload-photo',
      formData,
      {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'multipart/form-data'
        }
      }
    );

    const updatedUser = { 
      ...userData, 
      photo: `${response.data.photo}?${Date.now()}`
    };   // function : update the user pic
    
    setUserData(updatedUser);
    localStorage.setItem('user', JSON.stringify(updatedUser));  // function : updating the user and stock in the localstorage

  } catch (error) {
    console.error('Upload error:', error);
    setError('Error in the downloading...Try again.');
  } finally {
    setIsUploading(false);
  }
};

    const checkAndGo = () => {
        go(userData?.gender === 'female' ? '/Female' : '/Male');
    };  // function : going to home according to the gender

    const goto = () => {
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        go('/LogIn');
    }; // function : deconnected user

    if (!userData) {
        return <div className="loading-text">Loading...</div>;
    }

    return (
        <div className="pfp-container">
            <div className="Workout-nav">
                <nav>
                    <div className="Workout-bar-P">
                        <img id="logoGym" src="./img/background/barbell.png" alt="Gym Logo"/>
                        <p className='cursor' onClick={checkAndGo}>Home</p>
                    </div>
                </nav>
            </div>
            <div className="info-container">
                <div className="photo-upload-container">
                    <img 
                        className="pfp" 
                        src={userData.photo || "/img/smiling-athletic-man-black-background_613910-9870.avif"}
                        onClick={() => fileInputRef.current.click()}
                        alt="Profile"
                    />  {/* showing the pic of the user */}
                    <input
                        type="file"
                        ref={fileInputRef}
                        onChange={handlePhotoUpload}
                        accept="image/*"
                        className="hidden-upload"
                    />
                    {isUploading && <div className="upload-indicator">Updating Profile...</div>}  {/* The case where the pic is uploading */}
                </div>
                <div className="Name-p">
                    <p>{userData.familyName}</p>
                    <p>{userData.surname}</p>
                </div>  {/* familyname and surname of the user */}
                <div className="infoprofile">
                    <p><BsDot />Subscription Type : Bodybuilding for a month</p>
                    <p><BsDot />Sessions left : 7</p>
                    <p><BsDot />Starting day : 01-01-2025</p>
                    <p><BsDot />Finishing day : 01-02-2025</p>
                </div>
            </div>
            {error && (
            <div className="error-message" style={{ color: 'red', margin: '10px 0' }}>
            {error}
            </div>
            )}
            <div className="disconnectpfp">
                <p className="cursor" onClick={goto}>Disconnect ? </p> 
                <IoExitOutline className="cursor" onClick={goto}/>
            </div>  {/* deconnect the user */}
        </div>
    );
}

export default Profile;