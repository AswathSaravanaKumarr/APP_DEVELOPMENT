import React, { useState, useEffect } from "react";
import "../Landingcss/JobCategory.css";
import usericon1 from "../Assests/Icons/user icon.svg";
import usericon2 from "../Assests/resumeicon.svg";
import usericon3 from "../Assests/Icons/job.svg";
import j1 from "../Assests/Icons/tech.svg";
import j2 from "../Assests/Icons/business.svg";
import j3 from "../Assests/Icons/j3.svg";
import j4 from "../Assests/Icons/j4.svg";
import j5 from "../Assests/Icons/j5.svg";
import j6 from "../Assests/Icons/j6.svg";
import j7 from "../Assests/Icons/j7.svg";
import j8 from "../Assests/Icons/j8.svg";

function JobCategory() {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                } else {
                    entry.target.classList.remove('animate');
                }
            });
        }, { threshold: 0.1 }); // 10% of the element is visible

        const jobcContainer = document.querySelector('.jobc');
        if (jobcContainer) {
            observer.observe(jobcContainer);
        }

        return () => {
            if (jobcContainer) {
                observer.unobserve(jobcContainer);
            }
        };
    }, []);
      
    return (
        <>
            <div className="steps">
                <div>
                    <img className="stepicon" src={usericon1} alt="Register" />
                    <p>
                        <span>Register Your Account</span>
                    </p>
                </div>
                <div>
                    <img className="stepicon" src={usericon2} alt="Upload Resume" />
                    <p>
                        <span>Upload Your Resume</span>
                    </p>
                </div>
                <div>
                    <img className="stepicon" src={usericon3} alt="Apply Job" />
                    <p>
                        <span>Apply for a Job</span>
                    </p>
                </div>
            </div>
            <div className="jobcat">
                <div className="jobccover"></div>
                <div className="jobcat1">
                    <h1>
                        <span className="joblogo">Job Category</span> <br /> Choose Your
                        Desired Category
                    </h1>
                </div>
                <div className="jobc">
                    <div className="jobc1">
                        <div>
                            <img className="jobsicon" src={j1} alt="Technical Support" />
                            <h2>
                                Technical <br />
                                Support
                            </h2>
                        </div>
                        <div>
                            <img className="jobsicon" src={j2} alt="Business Development" />
                            <h2>
                                Business
                                <br /> Development
                            </h2>
                        </div>
                        <div>
                            <img className="jobsicon" src={j3} alt="Real Estate" />
                            <h2>Real Estate</h2>
                        </div>
                        <div>
                            <img className="jobsicon" src={j4} alt="Finance & Banking" />
                            <h2>
                                Finance & Banking <br /> Service
                            </h2>
                        </div>
                    </div>
                    <div className="jobc2">
                        <div>
                            <img className="jobsicon" src={j5} alt="IT & Networking" />
                            <h2>
                                IT & Networking <br /> Services
                            </h2>
                        </div>
                        <div>
                            <img className="jobsicon" src={j6} alt="Restaurant Services" />
                            <h2>
                                Restaurant
                                <br /> Services
                            </h2>
                        </div>
                        <div>
                            <img
                                className="jobsicon"
                                src={j7}
                                alt="Share Market Analysis"
                            />
                            <h2>
                                Share Market
                                <br /> Analysis
                            </h2>
                        </div>
                        <div>
                            <img
                                className="jobsicon"
                                src={j8}
                                alt="Defence & Fire Service"
                            />
                            <h2>
                                Defence & Fire <br /> Service
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default JobCategory;
