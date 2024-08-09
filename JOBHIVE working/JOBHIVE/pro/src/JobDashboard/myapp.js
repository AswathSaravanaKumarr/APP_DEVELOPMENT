import "./myapp.css";
import Google from "../Fresh/JobDetail/Images/Google.png";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Ford from "../Fresh/JobDetail/Images/ford.png";
import Hyundai  from "../Fresh/JobDetail/Images/Hyundai.png";


const MyApp = () => {
    const [applications, setApplications] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/cdash/applications")
            .then(response => {
                setApplications(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the data!", error);
            });
    }, []);

    const getCompanyLogo = (company) => {
        if (!company) return null;
        switch (company.toLowerCase()) {
            case "google":
                return Google;
            case "ford":
                return Ford;
            case "hyundai":
                return Hyundai;
            // Add more cases for other companies
            default:
                return null;
        }
    };

    return (
        <div>
            <h1>My Applications</h1>
            <div className="applications-list">
                {applications.map(application => (
                    <div key={application.id} className="application-card">
                        {getCompanyLogo(application.company) && (
                            <img
                                src={getCompanyLogo(application.company)}
                                alt={`${application.company} logo`}
                                className="company-logo"
                            />
                        )}
                        <div className="application-info">
                            <h3>{application.jobTitle ? application.jobTitle : "Job Title Not Available"}</h3>
                            <p><strong>Company:</strong> {application.company ? application.company : "Company Not Available"}</p>
                            <p><strong>Status:</strong> {application.status}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyApp;
