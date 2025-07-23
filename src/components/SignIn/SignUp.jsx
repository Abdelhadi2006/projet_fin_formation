import './SignUp.css';
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function SignUp() {
  const [email, setEmail] = useState('');
  const [checking, setChecking] = useState(false);
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [gender, setGender] = useState('male');
  const [familyName, setFamilyName] = useState('');
  const [surname, setSurname] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); // function : validation of the email syntax
  const isValidPassword = password.length >= 8; // function : validation of the password length

  const PasswordVisibility = () => setShowPassword(!showPassword); // function : show the password
  const goToLogin = () => navigate('/LogIn'); // function : going to the login page if the user have already an account

  const handleSubmit = async (e) => {
  e.preventDefault();
  setChecking(true);
  setErrorMessage('');

  if (!isValidEmail || !isValidPassword || !familyName || !surname) {
    setErrorMessage('Please fill all the fields'); // error function : if the user didnt fill the forms correctly
    setChecking(false);
    return;
  }

  try {
    const response = await axios.post('http://localhost:4000/signup', {
      familyName,
      surname,
      gender,
      email,
      password
    }); // creating an new user

    localStorage.setItem('user', JSON.stringify(response.data.user)); // stock the user data in the localstorage
    localStorage.setItem('token', response.data.token); // stock the token in the localstorage

    navigate(gender === 'male' ? '/Male' : '/Female'); // function : navigate according to the user gender

  } catch (error) {
    setChecking(false);
    if (error.response) {
      setErrorMessage(error.response.data.message || 'Registration failed');
    } else {
      setErrorMessage('Network error. Please check your connection.');
    }
    console.error('Registration error:', error);
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
        
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        
        <form onSubmit={handleSubmit}>
          <div className='input'>
            <p>Family Name</p>
            <input
              className="ekteb"
              placeholder="Enter your Family Name"
              type="text"
              value={familyName} // collecting the family name value
              onChange={(e) => setFamilyName(e.target.value)}
              required
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
              required
            />
          </div>

          <div className='input'>
            <label htmlFor="gender">Gender : </label>
            <select 
              id="gender" 
              value={gender} 
              onChange={(e) => setGender(e.target.value)}>
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
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            {checking && !isValidEmail && (
              <p className='email-error'>Please enter a valid email</p>
            )}
          </div>

          <div className='input'>
            <p>Password</p>
            <input
              className="ekteb"
              placeholder="Enter your password (min 8 characters)"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength="8"
            />
            {checking && !isValidPassword && (
              <p className='password-error'>Password must be at least 8 characters</p>
            )}
          </div>

          <div id='showLog' className="input">
            <label htmlFor="showPassword" className="checkbox-display">
              <input 
                type="checkbox" 
                id="showPassword" 
                checked={showPassword}
                onChange={PasswordVisibility} 
              />
              Show Password
            </label>
            <p className="login-link" onClick={goToLogin}>
              Already have an account?
            </p>
          </div>

          <div className="submit-container">
            <button 
              type="submit" 
              className="submit-btn"
              disabled={checking}
            >
              {checking ? 'Creating account...' : 'Sign Up'} 
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;