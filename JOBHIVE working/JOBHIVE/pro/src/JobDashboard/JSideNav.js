import "./JSideNav.css";
import React from "react";
import { faChartBar, faFileAlt, faNewspaper, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const JSideNav = () => {
  return (
    <>
      <div className="topspace"></div>
      <div className="Cantop">
        <h1>Employee Dashboard</h1>
      </div>
      <div className='sidenav'>
        <div className="sidenav-links">
         
          <Link to="/rdash/profile" className="sidenav-link">
            <FontAwesomeIcon icon={faFileAlt} className="sidenav-icon" />
            Profile
          </Link>
          <Link to="/rdash/resume" className="sidenav-link">
            <FontAwesomeIcon icon={faUser} className="sidenav-icon" />
            My Resume
          </Link>
          <Link to="/rdash/myapplications" className="sidenav-link">
            <FontAwesomeIcon icon={faChartBar} className="sidenav-icon" />
           My Applications
          </Link>
        </div>
      </div>
    </>
  );
};

export default JSideNav;
