import React, { useEffect, useState, useRef } from 'react';
import './SlideProfile.css';
import { BsDot } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function SlideProfile() {
    const [userData, setUserData] = useState(null);
    const [isUploading, setIsUploading] = useState(false);
    const fileInputRef = useRef();
    const go = useNavigate();

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user) {
            setUserData(user);
        }
    }, []);

    const handlePhotoUpload = async (e) => {
  const file = e.target.files[0];
  if (!file) return;

  setIsUploading(true);
  const formData = new FormData();
  formData.append('photo', file);

  try {
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
    };
    
    setUserData(updatedUser);
    localStorage.setItem('user', JSON.stringify(updatedUser));

  } catch (error) {
    console.error('Upload error:', error);
  } finally {
    setIsUploading(false);
  }
};

    const checkAndGo = () => {
        go('/Profile');
    }; // function : going to profile

    if (!userData) {
        return <div className="loading-text">Loading...</div>;
    }

    return (
        <div className="info-container-slide">
            <div className="photo-container-slide">
                <img 
                    className="pfp-slide" 
                    src={userData.photo || "/img/smiling-athletic-man-black-background_613910-9870.avif"}
                    onClick={() => fileInputRef.current.click()}
                    alt="Profile"/> 

                {/* showing the pic of the user */}
                <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handlePhotoUpload}
                    accept="image/*"
                    className="hidden-upload"
                />
                {isUploading && <div className="upload-indicator-slide">Updating...</div>} {/* The case where the pic is uploading */}
            </div>
            <div className="Name-p-slide">
                <p>{userData.familyName}</p>
                <p>{userData.surname}</p>
            </div>{/* familyname and surname of the user */}

            <div className="infoprofile-slide">
                <p><BsDot />Subscription Type : Bodybuilding for a month</p>
                <p><BsDot />Sessions left : 7</p>
                <p className='cursor' onClick={checkAndGo}><BsDot />access profile</p>
            </div> {/* access to the profile page */}
        </div>
    );
}

export default SlideProfile;