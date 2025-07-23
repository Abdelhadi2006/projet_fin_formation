import './LogIn.css';
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function LogIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); // function : validation of the email syntax
  const isValidPassword = password.length >= 8; // function : validation of the password length

  const handleSubmit = async (e) => {
  e.preventDefault();
  setError('');
  setIsLoading(true);

  try {
    const response = await axios.post('http://localhost:4000/LogIn', {
      email,
      password
    }); // checking if the user account exist

    if (response.data.token) {
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));
      
      const userGender = response.data.user.gender;
      console.log("User gender:", userGender); 
      
      if (userGender === "male") {
        navigate('/Male');
      } else if (userGender === "female") {
        navigate('/Female');
      } else {
        navigate('/signup');
      }
    }
  } catch (err) {
  } finally {
    setIsLoading(false);
  }
};

  return (
    <div className='page-body'>
      <div className="Log">
        <div className="LogTitle">
          <div className='Title'><h2>Log In</h2></div>
          <div id="welcome">
            <h2>Welcome</h2>
            <p>Please enter your personal informations</p>
          </div>
        </div>

        {error && <p className="error-message">{error}</p>}

        <form onSubmit={handleSubmit}>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              className="form-input"
              placeholder="Enter your email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            {isLoading && !isValidEmail && (
              <p className="input-error">Please enter a valid email</p>
            )}
          </div>

          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              className="form-input"
              placeholder="Enter your password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength="8"
            />
            {isLoading && !isValidPassword && (
              <p className="input-error">Password must be at least 8 characters</p>
            )}
          </div>

          <div className="form-options">
            <label className="checkbox-label">
              <input 
                type="checkbox" 
                checked={showPassword}
                onChange={() => setShowPassword(!showPassword)} 
              />
              Show Password
            </label>
            <button type="button" className="forgot-password">
              Forgot Password?
            </button>
          </div>

          <button 
            type="submit" 
            className="submit-button"
            disabled={isLoading}
          >
            {isLoading ? 'Logging in...' : 'Log In'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default LogIn;