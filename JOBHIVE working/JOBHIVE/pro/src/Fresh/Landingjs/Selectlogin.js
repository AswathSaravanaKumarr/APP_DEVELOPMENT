import React, { useState } from "react";
import "../Landingcss/Selectlogin.css";
import women from "../Assests/womenn.png";
import AdminLogin from "./Adminlogin";
import Login from './Login';
import Signup from './Signup';

function Selectlogin({ toggleForm }) {
  const [selectedRole, setSelectedRole] = useState(null);
  const [formType, setFormType] = useState(null);

  // Function to handle role selection and form type
  const handleRoleSelection = (role, type) => {
    setSelectedRole(role);
    setFormType(type);
    toggleForm(type, role); // Ensure this function updates state to trigger re-render
  };
  
  // Render the appropriate form based on selectedRole and formType
  const renderForm = () => {
    if (formType === 'login') {
      return (
        <Login 
          toggleForm={toggleForm} 
          role={selectedRole} 
          onLoginSuccess={(user) => console.log(`${selectedRole} logged in:`, user)} 
        />
      );
    }
    if (formType === 'signup') {
      return (
        <Signup 
          toggleForm={toggleForm} 
          role={selectedRole} 
        />
      );
    }
    if (selectedRole === 'Admin') {
      return <AdminLogin onClose={() => setSelectedRole(null)} />;
    }
    return null;
  };

  return (
    <div className="ssbox">
      <div className="topspace"></div>
      <div className="topspace"></div>
      <div className="topspace"></div>
      <div className="sbox">
        <div className="sbl">
          <h1 className="s1">
            Find a Job
            <a onClick={() => handleRoleSelection('Candidate', 'login')}>Login</a>
            <a onClick={() => handleRoleSelection('Candidate', 'signup')}>Signup</a>
            <br /> With JobHive
          </h1>
          <h1 className="s2">
            Hire a Talent
            <a onClick={() => handleRoleSelection('Recruiter', 'login')}>Login</a>
            <a onClick={() => handleRoleSelection('Recruiter', 'signup')}>Signup</a>
            <br /> as recruiter
          </h1>
          <h1 className="s3">Admin here</h1>
        </div>
        <div className="sbr">
          <img className="womens" src={women} alt="Women" />
        </div>
      </div>
      {renderForm()} {/* This should render the selected form */}
    </div>
  );
}

export default Selectlogin;
