import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createRoot } from 'react-dom/client';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Nav from './Fresh/Landingjs/Navbar';


import { UserProvider } from './UserContext/UserContext';
import Manage from './Manage';
const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
  <GoogleOAuthProvider clientId="927910245578-ej0ochoddhp1kboshn1rphl2subtcm06.apps.googleusercontent.com">
  <UserProvider>
        <App />
      </UserProvider>
  </GoogleOAuthProvider>
  </React.StrictMode>
);