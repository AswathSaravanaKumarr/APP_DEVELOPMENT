import React, { useState, useRef } from "react";
import { FaLinkedin, FaGoogle, FaFacebook } from "react-icons/fa";
import "../Landingcss/Signup.css";
import axios from 'axios';
import { GoogleLogin } from '@react-oauth/google';
import {jwtDecode} from 'jwt-decode'; // Fixed import

const Signup = ({ toggleForm, role }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const googleButtonRef = useRef(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== cpassword) {
      alert("Passwords do not match");
      return;
    }
    const userData = {
      username,
      email,
      password,
    };
    try {
      const response = await axios.post('http://localhost:8080/api/users/register', userData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log('Signup success:', response.data);
      alert("Signup successful! Redirecting to login page...");
      toggleForm("login", role);
    } catch (error) {
      console.error('Signup error:', error.response?.status, error.response?.data);
      alert(`Signup failed: ${error.response?.data?.message || 'Please try again.'}`);
    }
  };

  const handleGoogleLoginSuccess = (credentialResponse) => {
    const decodedToken = jwtDecode(credentialResponse.credential);
    setEmail(decodedToken.email);
    setUsername(decodedToken.name);
    console.log('Google login success:', decodedToken);
  };

  const handleGoogleLoginFailure = (error) => {
    console.error('Google login failed:', error);
  };

  const handleCustomButtonClick = () => {
    if (googleButtonRef.current) {
      googleButtonRef.current.click();
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSubmit(event);
    }
  };

  return (
    <div className="outer">
      <div className="Loginbox">
        <button className="close-button" onClick={() => toggleForm(null)}>
          &#10006;
        </button>
        <div className="loginh1">
          <h1>{role === "Recruiter" ? "Recruiter Signup" : "User Signup"}</h1>
        </div>
        <div className="line"></div>
        <button className="social-button lkd">
          <FaLinkedin className="icon" /> <span>Sign up With LinkedIn</span>
        </button>
        <button className="social-button gl">
          <FaFacebook className="icon" /> <span>Sign up With Facebook</span>
        </button>
        <GoogleLogin
          onSuccess={handleGoogleLoginSuccess}
          onError={handleGoogleLoginFailure}
          render={(renderProps) => (
            <button
              className="social-button google"
              onClick={() => handleCustomButtonClick()}
              ref={googleButtonRef}
              disabled={renderProps.disabled}
            >
              <FaGoogle className="icon" /> <span>Sign up With Google</span>
            </button>
          )}
        />
        <div className="line"></div>
        <form onSubmit={handleSubmit}>
          <div className="inputbox1">
            <label>Username</label>
            <input
              type="text"
              placeholder="Username"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              onKeyPress={handleKeyPress}
            />
          </div>
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
          <div className="inputbox2">
            <label>Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm password"
              required
              value={cpassword}
              onChange={(e) => setCpassword(e.target.value)}
              onKeyPress={handleKeyPress}
            />
          </div>
          <div className="signup">
            <label>
              Already have an account?{" "}
              <a href="#" onClick={() => toggleForm("login", role)}>
                Log in
              </a>
            </label>
          </div>
          <div className="submitb">
            <button className="submit" type="submit">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
