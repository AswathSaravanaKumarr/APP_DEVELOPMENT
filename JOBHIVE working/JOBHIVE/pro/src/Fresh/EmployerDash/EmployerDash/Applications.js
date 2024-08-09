import "./Applications.css";
import Ford from "./images/Google.png";
import React, { useEffect, useState } from "react";
import axios from "axios";

// import MicrosoftLogo from "./images/Microsoft.png";

// import AmazonLogo from "./images/Amazon.png";

const Applications = () => {
    const [applications, setApplications] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchApplications = async () => {
            try {
                const response = await axios.get("http://localhost:8080/cdash/applications");
                setApplications(response.data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching applications:", error);
                if (error.response) {
                    setError("Error fetching applications: " + error.response.data.message);
                } else if (error.request) {
                    setError("Error fetching applications: No response from server.");
                } else {
                    setError("Error fetching applications: " + error.message);
                }
                setLoading(false);
            }
        };

        fetchApplications();
    }, []);

    const handleAccept = async (id) => {
        try {
            await axios.put(`http://localhost:8080/cdash/applications/${id}/status`, { status: 'accepted' });
            setApplications(prevApps =>
                prevApps.map(app => (app.id === id ? { ...app, status: 'accepted' } : app))
            );
        } catch (error) {
            console.error("Error updating application:", error);
        }
    };

    const handleReject = async (id) => {
        try {
            await axios.put(`http://localhost:8080/cdash/applications/${id}/status`, { status: 'rejected' });
            setApplications(prevApps =>
                prevApps.map(app => (app.id === id ? { ...app, status: 'rejected' } : app))
            );
        } catch (error) {
            console.error("Error rejecting application:", error);
        }
    };

    const getCompanyLogo = (companyName) => {
        if (!companyName) return null; // Handle null or undefined
        switch (companyName.toLowerCase()) {
            case 'ford':
                return Ford;
            // case 'amazon':
            //     return AmazonLogo;
            // case 'microsoft':
            //     return MicrosoftLogo;
            default:
                return null; 
        }
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="applicationsmaindiv">
            <h1>Applications</h1>
            <div className="applications-list">
                {applications.map(app => (
                    <div key={app.id} className="application-card">
                        <div className="application-image">
                            <img src={getCompanyLogo(app.company)} alt={`${app.company} logo`} />
                        </div>
                        <div className="application-details">
                            <h2>{app.jobTitle}</h2>
                            <p><strong>Applicant:</strong> {app.firstName+"  "}{app.lastName}</p>
                            <p><strong>Company:</strong> {app.company}</p>
                            <p><strong>Date:</strong> {app.date}</p>
                            {app.status === 'accepted' && <p className="status-text accepted">Accepted</p>}
                            {app.status === 'rejected' && <p className="status-text rejected">Rejected</p>}
                        </div>
                        <div className="application-actions">
                            {app.status === 'accepted' ? (
                                <button className="accept-btn disabled" disabled>Accepted</button>
                            ) : app.status === 'rejected' ? (
                                <button className="reject-btn disabled" disabled>Rejected</button>
                            ) : (
                                <>
                                    <button onClick={() => handleAccept(app.id)} className="accept-btn">Accept</button>
                                    <button onClick={() => handleReject(app.id)} className="reject-btn">Reject</button>
                                </>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Applications;
