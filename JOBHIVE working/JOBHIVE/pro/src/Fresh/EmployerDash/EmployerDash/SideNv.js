import "./SideNav.css";
import React from "react";
import { faChartBar, faFileAlt, faNewspaper, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

// src/Fresh/CandidDash/SideNv.js

const SideNv = () => {
  return (
    <>
      <div className="topspace"></div>
      <div className="Cantop">
        <h1>Employer Dashboard</h1>
      </div>
      <div className='sidenav'>
        <div className="sidenav-links">
          <Link to="/cdash/managejobs" className="sidenav-link">
            <FontAwesomeIcon icon={faNewspaper} className="sidenav-icon" />
            Manage Jobs
          </Link>
          <Link to="/cdash/postjob" className="sidenav-link">
            <FontAwesomeIcon icon={faFileAlt} className="sidenav-icon" />
            Post Job
          </Link>
          <Link to="/cdash/profile" className="sidenav-link">
            <FontAwesomeIcon icon={faUser} className="sidenav-icon" />
            Profile
          </Link>
          <Link to="/cdash/applications" className="sidenav-link">
            <FontAwesomeIcon icon={faChartBar} className="sidenav-icon" />
            Applications
          </Link>
        </div>
      </div>
    </>
  );
};

export default SideNv;
