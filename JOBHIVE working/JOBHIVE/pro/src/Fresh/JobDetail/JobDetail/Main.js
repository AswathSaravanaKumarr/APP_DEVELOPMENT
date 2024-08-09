import "./Main.css";
import JobList from "./JobList";
import React from "react";

function Main({ filters, onFilterChange, jobs }) {
  return (
    <>
    <div className="topspace"></div>
            <div className="Contacth">
                <h1>Find Your Job</h1>
                <div className="line"></div>
                <p>
                    Digital platform that connects employers with job seekers, <br />{" "}
                    providing a space for posting job listings and applying for positions,
                    To get a Dream job
                </p>
            </div>
    <div className="main">      
      <div className="joblistdiv">
        <JobList jobs={jobs} />
      </div>
    </div>
    </>
  );
}

export default Main;