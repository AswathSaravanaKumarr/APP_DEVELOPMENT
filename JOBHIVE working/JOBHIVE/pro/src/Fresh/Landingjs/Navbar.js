import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../Landingcss/Navbar.css";
import Selectlogin from "./Selectlogin";
import Login from "./Login";
import Signup from "./Signup";
import { FaUser } from "react-icons/fa";
import { useUser } from "../../UserContext/UserContext";

const Nav = () => {
  const { isLoggedIn, username, handleLoginSuccess, handleLogout } = useUser();
  const [formType, setFormType] = useState(null);
  const [selectedRole, setSelectedRole] = useState("");

  const toggleForm = (type, role = "") => {
    setFormType((prevFormType) => (prevFormType === type ? null : type));
    setSelectedRole(role);
  };

  useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector('.desktopnav');
      if (nav) {
        if (window.scrollY > 0) {
          nav.classList.add('shadow');
        } else {
          nav.classList.remove('shadow');
        }
      }

    };
    

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className="Landtop">
        {formType === 'select' && (
          <Selectlogin toggleForm={toggleForm} />
        )}

        {(formType === 'login' || formType === 'signup') && (
          formType === 'login' ? (
            <Login toggleForm={toggleForm} onLoginSuccess={handleLoginSuccess} role={selectedRole} />
          ) : (
            <Signup toggleForm={toggleForm} role={selectedRole} />
          )
        )}

        <div className="desktopnav">
          <h1 className="logo">JobHive</h1>
          <ul className="nav-links">
            <li className="link">
              <Link to="/">Home</Link>
            </li>
            {isLoggedIn && (
              <li className="link">
                <Link to="/browse">Jobs</Link>
              </li>
            )}
            <li className="link">
              <Link to="/about">About</Link>
            </li>
            <li className="link">
              <Link to="/contact">Contact</Link>
            </li>
            {isLoggedIn && (
    <li className="link" style={{ marginRight: "50px" }}>
        <Link to={selectedRole === 'Recruiter' ? '/cdash':'/rdash/profile' }>
            Dashboard
        </Link>
    </li>
)}

          </ul>
          {!isLoggedIn ? (
            <div className="navibutton">
              <button className="sbutton1" onClick={() => toggleForm("select")}>Login</button>
              <button className="sbutton" onClick={() => toggleForm("select")}>Signup</button>
            </div>
          ) : (
            <div className="user-info">
              <FaUser style={{ height: '30px', color: "black" }} />
              <span>{username}</span>
              <button onClick={handleLogout}>Logout</button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Nav;
