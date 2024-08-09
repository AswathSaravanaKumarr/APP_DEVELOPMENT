import "./Manage.css";
import Apple from "../JobDetail/Images/applelogo.png";
import Dell from "../JobDetail/Images/Dell.png";
import Facebook from "../JobDetail/Images/facebooklogo.png";
import Ford from "../JobDetail/Images/ford.png";
import Google from "../JobDetail/Images/Google.png";
import Hyundai from "../JobDetail/Images/Hyundai.png";
import Instagram from "../JobDetail/Images/instalogo.png";
import Qualcomm from "../JobDetail/Images/Qualcomm.png";
import React, { useEffect, useState } from "react";
import Samsung from "../JobDetail/Images/Samsung.png";
import Tesco from "../JobDetail/Images/Tescco.png";
import WhatsApp from "../JobDetail/Images/whatsappicon.png";
import axios from "axios";

const Manage = () => {
    const [jobs, setJobs] = useState([]);
    const [editingJob, setEditingJob] = useState(null);
    const [formData, setFormData] = useState({
        jobTitle: '',
        jobDescription: '',
        location: '',
        workmode: '',
        salary: '',
        jobType: '',
    });
    const getCompanyLogo = (companyName) => {
        if (!companyName) return null; 
        switch (companyName.toLowerCase()) {
            case "apple":
                return Apple;
            case "dell":
                return Dell;
            case "facebook":
                return Facebook;
            case "tesco":
                return Tesco;
            case "whatsapp":
                return WhatsApp;
            case "qualcomm":
                return Qualcomm;
            case "ford":
                return Ford;
            case "hyundai":
                return Hyundai;
            case "instagram":
                return Instagram;
            case "google":
                return Google;
            default:
                return null;
        }
    };
    

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const response = await axios.get("http://localhost:8080/jobs");
                setJobs(response.data);
                console.log(response.data);
            } catch (error) {
                console.error("Error fetching jobs:", error);
                if (error.response) {
                    console.error("Response data:", error.response.data);
                    console.error("Response status:", error.response.status);
                    console.error("Response headers:", error.response.headers);
                } else if (error.request) {
                    console.error("Request data:", error.request);
                } else {
                    console.error("Error message:", error.message);
                }
            }
        };

        fetchJobs();
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const startEditing = (job) => {
        setEditingJob(job.id);
        setFormData({
            jobTitle: job.jobTitle,
            jobDescription: job.jobDescription,
            location: job.location,
            workmode: job.workmode,
            salary: job.salary,
            jobType: job.jobType
        });
    };

    const saveJob = async () => {
        try {
            const response = await axios.put(`http://localhost:8080/jobs/${editingJob}`, formData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const updatedJob = response.data;
            setJobs(prevJobs =>
                prevJobs.map(job => (job.id === editingJob ? updatedJob : job))
            );
            setEditingJob(null);
            setFormData({
                jobTitle: '',
                jobDescription: '',
                location: '',
                workmode: '',
                salary: '',
                jobType: '',
            });
        } catch (error) {
            console.error("Error updating job:", error);
            if (error.response) {
                console.error("Response data:", error.response.data);
                console.error("Response status:", error.response.status);
                console.error("Response headers:", error.response.headers);
            } else if (error.request) {
                console.error("Request data:", error.request);
            } else {
                console.error("Error message:", error.message);
            }
        }
    };

    const cancelEditing = () => {
        setEditingJob(null);
        setFormData({
            jobTitle: '',
            jobDescription: '',
            location: '',
            workmode: '',
            salary: '',
            jobType: '',
        });
    };

    return (
        <div className="manage-jobs-container">
            <h1>Manage Jobs</h1>
            {editingJob ? (
                <div className="edit-job-form">
                    <h2>Edit Job</h2>
                    <label>
                        Job Title:
                        <input
                            type="text"
                            name="jobTitle"
                            value={formData.jobTitle}
                            onChange={handleInputChange}
                        />
                    </label>
                    <label>
                        Job Description:
                        <textarea
                            name="jobDescription"
                            value={formData.jobDescription}
                            onChange={handleInputChange}
                        />
                    </label>
                    <label>
                        Location:
                        <input
                            type="text"
                            name="location"
                            value={formData.location}
                            onChange={handleInputChange}
                        />
                    </label>
                    <label>
                        Workmode:
                        <input
                            type="text"
                            name="workmode"
                            value={formData.workmode}
                            onChange={handleInputChange}
                        />
                    </label>
                    <label>
                        Salary:
                        <input
                            type="text"
                            name="salary"
                            value={formData.salary}
                            onChange={handleInputChange}
                        />
                    </label>
                    <label>
                        Job Type:
                        <input
                            type="text"
                            name="jobType"
                            value={formData.jobType}
                            onChange={handleInputChange}
                        />
                    </label>
                    <button onClick={saveJob}>Save</button>
                    <button onClick={cancelEditing}>Cancel</button>
                </div>
            ) : (
                <div className="jobs-list">
                {jobs.map(job => (
                    <div key={job.id} className="job-card">
                        <div className="logo-container">
                            <img src={getCompanyLogo(job.companyName)} alt={`${job.company} logo`} />
                        </div>
                        <div className="details-container">
                            <h3>{job.jobTitle}</h3>
                            <p>{job.jobDescription}</p>
                            <p><strong>Location:</strong> {job.location}</p>
                            <p><strong>Workmode:</strong> {job.workmode}</p>
                            <p><strong>Salary:</strong> {job.salary}</p>
                            <p><strong>Job Type:</strong> {job.jobType}</p>
                            <button onClick={() => startEditing(job)}>Edit</button>
                        </div>
                    </div>
                ))}
            </div>
            
            )}
        </div>
    );
};

export default Manage;
