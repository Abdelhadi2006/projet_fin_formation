import './SignUp.css';
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function SignUp() {
  const [email, setEmail] = useState('');
  const [checking, setChecking] = useState(false);
  const [pasw, setPasw] = useState('');
  const [affiche, setAffiche] = useState(false);
  const [value, setValue] = useState('male');
  const [familyName, setFamilyName] = useState('');
  const [surname, setSurname] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const confirmEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const confirmPassword = pasw.length >= 8;
  const go = useNavigate();

  const disp = () => setAffiche(!affiche);

  const LogInPage = () => go('/LogIn');

  const [haveAccount, setHaveAccount] = useState(false);

  const checkIfUserExists = async () => {
    const res = await axios.get(`http://localhost:4000/check-user/SignUp`);
    setAlreadyRegistered(res.data.exists);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setChecking(true);

    if (!confirmEmail || !confirmPassword) {
      console.log('Invalid email or password');
      return;
    }

    const newUser = {
      familyName,
      surname,
      email,
      password: pasw,
      gender: value
    };

    try {
      const res = await axios.post('http://localhost:4000/SignUp', newUser);
      if (res.data.message === "Email already exists") {
      return("this account already exists");
    }
      console.log(res.data);
      localStorage.setItem('user', JSON.stringify(newUser));

      if (value === 'male') {
        go('/Male');
      } else if(value === 'female') {
        go('/Female');
      }
    } catch (err) {
      console.error('Error sending data:', err);
    }
  };

  return (
    <div className='page-body'>
      <div className="Sign">
        <div className="LogTitle">
          <div className='Title'><h2>Sign Up</h2></div>
          <div id="welcome">
            <h2>Welcome</h2>
            <p>Please enter your personal informations</p>
          </div>
        </div>
        {errorMessage && <p className="error">{errorMessage}</p>}
        <form onSubmit={handleSubmit}>
          <div className='input'>
            <p>Family Name</p>
            <input
              className="ekteb"
              placeholder="Enter your Family Name"
              type="text"
              value={familyName}
              onChange={(e) => setFamilyName(e.target.value)}
            />
          </div>

          <div className='input'>
            <p>Surname</p>
            <input
              className="ekteb"
              placeholder="Enter your Surname"
              type="text"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
            />
          </div>

          <div className='input'>
            <label htmlFor="choix">Gender : </label>
            <select id="choix" value={value} onChange={(e) => setValue(e.target.value)}>
              <option value='male'>Male</option>
              <option value='female'>Female</option>
            </select>
          </div>

          <div className='input'>
            <p>Email</p>
            <input
              className="ekteb"
              placeholder="Enter your email"
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setHaveAccount(false);
                setChecking(false);
              }}
            />

            {haveAccount && (
              <p style={{ color: "red" }}>
                already exists
              </p>
            )}

          </div>

          {checking && (
            <p className='emailch' style={{ color: confirmEmail ? 'green' : 'red' }}>
              {confirmEmail ? '' : ' Email invalid'}
            </p>
          )}

          <div className='input'>
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
              {confirmPassword ? '' : ' Minimum 8 caractères '}
            </p>
          )}

          <div id="forgot" className="input">
            <label htmlFor="display" className="checkbox-display">
              <input type="checkbox" id="display" onClick={disp} />
              Display
            </label>
            <p className="forgot-link" onClick={LogInPage}>You already have an account ?</p>
          </div>

          <div className="forgot">
            <button type="submit" className="submit-btn">
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
