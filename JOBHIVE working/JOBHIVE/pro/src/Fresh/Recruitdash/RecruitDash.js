import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faFileAlt, faUser, faChartBar, faSignOutAlt, faNewspaper } from '@fortawesome/free-solid-svg-icons';
import './SideNav.css';

const RecruitDash = () => {
  return (
    <>
    <div className="topspace"></div><div className="Cantop">
        <h1>Employer Dashboard</h1>
      
      </div>
      <div className='candid'>
    <div className="sidenav">
      <div className="sidenav-links">
        <a href="#dashboard" className="sidenav-link active">
          <FontAwesomeIcon icon={faNewspaper} className="sidenav-icon" />
          Manage Jobs
        </a>
        <a href="#reports" className="sidenav-link">
          <FontAwesomeIcon icon={faFileAlt} className="sidenav-icon" />
          Post Job
        </a>
        <a href="#profile" className="sidenav-link">
          <FontAwesomeIcon icon={faUser} className="sidenav-icon" />
          Profile
        </a>
        <a href="#analytics" className="sidenav-link">
          <FontAwesomeIcon icon={faChartBar} className="sidenav-icon" />
          Applications
        </a>
      </div>
    </div>
    <div className='candetails'><a href="#analytics" className="sidenav-link">
          <FontAwesomeIcon icon={faChartBar} className="sidenav-icon" />
          Applications
        </a></div>
    </div>
    </>
  );
};

export default RecruitDash;
