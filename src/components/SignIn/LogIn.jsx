import './LogIn.css'
import React from "react";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

function LogIn() {

  const [email, setEmail] = useState('');

  const [checking, setChecking] = useState(false);

  const [pasw, setPasw] = useState('');

  const [affiche, setAffiche] = useState(false);

  const confirmEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const confirmPassword = pasw.length >= 8;

  const go = useNavigate();

  const disp = () => {
    setAffiche(!affiche);
  };


  const handleSubmit = async (e) => {
  e.preventDefault();
  setChecking(true);

  if (!confirmEmail || !confirmPassword) {
    console.log('Invalid email or password');
    return;
  }

  const datafront = {
    email,
    password: pasw
  };

  try {
    const res = await axios.post('http://localhost:4000/LogIn', datafront);
    console.log(res.data);

    if (res.data.token) {
      
      localStorage.setItem("token", res.data.token);

      if (res.data.gender === "male") {
        go('/Male');
      } else {
        go('/Female');
      }
    } else {
      alert("Invalid credentials");
    }
  } catch (err) {
    console.error('Error sending data:', err);
  }
};


  return (
    <div className='page-body'>
    <div className="Log">
    <div className="LogTitle">
      <div className='Title'><h2 >Log In</h2></div>
      <div id="welcome">
        <h2>Welcome</h2>
        <p>Please enter your personal informations</p>
      </div>
      </div>

      <form onSubmit={handleSubmit}>
  <div id="email">
    <p>Email</p>
    <input
      className="ekteb"
      placeholder="Enter your email"
      type="email"
      value={email}
      onChange={(e) => {
        setEmail(e.target.value);
        setChecking(false);
      }}
    />
  </div>

  {checking && (
    <p className='emailch' style={{ color: confirmEmail ? 'green' : 'red' }}>
      {confirmEmail ? '' : 'Email invalid'}
    </p>
  )}

  <div id="password">
    <p>Password</p>
    <input
      className="ekteb"
      placeholder="Enter your password"
      type={affiche ? "text" : "password"}
      value={pasw}
      onChange={(e) => {
        setPasw(e.target.value);
        setChecking(false);
      }}
    />
  </div>

  {checking && (
    <p className='paswch' style={{ color: confirmPassword ? '' : 'red' }}>
      {confirmPassword ? '' : 'Minimum 8 caractères'}
    </p>
  )}

  <div className="forgot">
    <label htmlFor="display" className="checkbox-display">
      <input type="checkbox" id="display" onClick={disp} />
      Display
    </label>
    <p className="forgot-link">Forget Password?</p>
  </div>

  <div className="forgot">
    <input
      type="submit"
      value="Sign In"
      className="submit-butn"
    />
  </div>
</form>

    </div>
    </div>
  );
}

export default LogIn;
