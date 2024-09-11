import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CSS/LoginSignup.css';
import loginSignupImage from '../Components/Assets/image/login-signup-image.png'; // Updated path

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const handleLogin = () => {
    // Add your login logic here
    // If login is successful, navigate to the shop page
    navigate('/shop');
  };

  const handleSignup = () => {
    // Add your signup logic here
    // If signup is successful, toggle back to login form
    toggleForm();
  };

  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <div className="loginsignup-image">
          <img src={loginSignupImage} alt="Background" />
        </div>
        <div className="loginsignup-form">
          {isLogin ? (
            <>
              <h1>Login</h1>
              <div className="loginsignup-fields">
                <input type="email" placeholder='Email Address' />
                <input type="password" placeholder='Password' />
              </div>
              <button className="loginsignup-btn" onClick={handleLogin}>Login</button>
              <p className="loginsignup-toggle">
                Don't have an account? <span onClick={toggleForm}>Sign Up here</span>
              </p>
            </>
          ) : (
            <>
              <h1>Sign Up</h1>
              <div className="loginsignup-fields">
                <input type="text" placeholder='Your Name' />
                <input type="email" placeholder='Email Address' />
                <input type="password" placeholder='Password' />
              </div>
              <button className="loginsignup-btn" onClick={handleSignup}>Continue</button>
              <p className="loginsignup-toggle">
                Already have an account? <span onClick={toggleForm}>Login here</span>
              </p>
              <div className="loginsignup-agree">
                <input type="checkbox" id="agree" />
                <label htmlFor="agree">By continuing, I agree to the terms of use & privacy policy.</label>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
