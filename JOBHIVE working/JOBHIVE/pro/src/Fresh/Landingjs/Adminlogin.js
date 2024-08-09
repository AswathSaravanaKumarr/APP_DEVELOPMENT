import React, { useState } from "react";
import { FaLinkedin, FaGoogle, FaFacebook } from "react-icons/fa";
import "../Landingcss/Login.css";
import axios from 'axios';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom"; // Import useNavigate

  const AdminLogin = ({ onClose }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
  
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      try {
        const response = await axios.post('http://localhost:8080/api/admin/login', {
          username,
          password
        });
  
        if (response.status === 200) {
          alert("Admin login successful");
          navigate('/adminPanel'); // Navigate to the admin panel on successful login
        }
      } catch (error) {
        if (error.response && error.response.status === 401) {
          alert("Invalid admin credentials");
        } else {
          console.error("There was an error!", error);
          alert("Error during admin login. Please try again.");
        }
      }
    };
  const handleGoogleLoginSuccess = (credentialResponse) => {
    const decodedToken = jwtDecode(credentialResponse.credential);
    setUsername(decodedToken.name);
    console.log('Google login success:', decodedToken);
    // You might want to handle Google login success here as well
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
    <div className="overlay" style={{ backgroundColor: "blue" }}>
      <div className="Loginbox1">
        <div className="topspace"></div>
        <button className="close-button" onClick={onClose}>
          &#10006;
        </button>
        <div className="loginh1">
          <h1>Admin Login</h1>
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
        />
        <div className="line"></div>
        <div className="inputbox1">
          <label>Username</label>
          <input
            type="text"
            placeholder="Your username"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            onKeyPress={handleKeyPress}
          />
        </div>

        <div className="inputbox2">
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter the password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyPress={handleKeyPress}
          />
        </div>
        <div className="submitb">
          <button className="submit" type="submit" onClick={handleSubmit}>
            Login
          </button>
        </div>
      </div>
      <div className="topspace"></div>
    </div>
  );
};

export default AdminLogin;
