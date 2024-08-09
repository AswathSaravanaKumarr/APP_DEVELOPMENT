import React, { useState, useEffect } from "react";
import { FaLinkedin, FaGoogle, FaFacebook } from "react-icons/fa";
import "../Landingcss/Login.css";
import axios from 'axios';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

const Login = ({ toggleForm, onLoginSuccess, role }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    console.log('onLoginSuccess:', onLoginSuccess);
    console.log('role:', role);
  }, [onLoginSuccess, role]);
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/users/login', { email, password });
      const user = response.data;
      alert("Login successful");
      onLoginSuccess({ username: user.username, role: user.role });
  
      // Close the login form
      toggleForm(null);
      
      // Redirect based on role
      if (user.role === 'Recruiter') {
        navigate('/recruiter-dashboard'); // Adjust path as needed
      } else if (user.role === 'User') {
        navigate('/user-dashboard'); // Adjust path as needed
      } else {
        navigate('/'); // Default path if no role matches
      }
      
      setEmail('');
      setPassword('');
    } catch (error) {
      alert('Invalid credentials');
      console.error('Login error:', error);
    }
  };

  const handleGoogleLoginSuccess = (credentialResponse) => {
    const decodedToken = jwtDecode(credentialResponse.credential);
    setEmail(decodedToken.email);
    console.log('Google login success:', decodedToken);
    onLoginSuccess({ username: decodedToken.name, role });
  };

  const handleGoogleLoginFailure = (error) => {
    console.error('Google login failed:', error);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSubmit(event);
    }
  };

  return (
    <div className="outer">
      <div className="Loginbox1">
        <button className="close-button" onClick={() => toggleForm(null)}>
          &#10006;
        </button>
        <div className="loginh1">
          <h1>{role === "Recruiter" ? "Recruiter Login" : "User Login"}</h1>
        </div>
        <div className="line"></div>
        <button className="social-button lkd">
          <FaLinkedin className="icon" style={{ color: "white" }} /> <span>Log in With LinkedIn</span>
        </button>
        <button className="social-button gl">
          <FaFacebook className="icon" /> <span>Log in With Facebook</span>
        </button>
        <GoogleLogin
          onSuccess={handleGoogleLoginSuccess}
          onError={handleGoogleLoginFailure}
          render={(renderProps) => (
            <button className="social-button google" onClick={renderProps.onClick} disabled={renderProps.disabled}>
              <FaGoogle className="icon" /> <span>Log in With Google</span>
            </button>
          )}
        />
        <div className="line"></div>
        <form onSubmit={handleSubmit}>
          <div className="inputbox1">
            <label>Email</label>
            <input
              type="email"
              placeholder="example@gmail.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyPress={handleKeyPress}
            />
          </div>
          <div className="inputbox2">
            <label>Password</label>
            <input
              type="password"
              placeholder="Your password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyPress={handleKeyPress}
            />
          </div>
          <div className="forget">
            <label>
              Don't have an account?{" "}
              <a href="#" onClick={() => toggleForm("signup", role)}>
                Sign up
              </a>
            </label>
          </div>
          <div className="submitb">
            <button className="submit" type="submit">
              Log In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
