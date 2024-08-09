import "./Manage.css";
import React, { useEffect, useState } from "react";
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

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const response = await axios.get("http://localhost:8080/jobs");
                setJobs(response.data);
                console.log(response.data);
            } catch (error) {
                console.error("Error fetching jobs:", error);
                if (error.response) {
                    // The request was made and the server responded with a status code
                    console.error("Response data:", error.response.data);
                    console.error("Response status:", error.response.status);
                    console.error("Response headers:", error.response.headers);
                } else if (error.request) {
                    // The request was made but no response was received
                    console.error("Request data:", error.request);
                } else {
                    // Something happened in setting up the request that triggered an Error
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
                // The request was made and the server responded with a status code
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
                            <h3>{job.jobTitle}</h3>
                            <p>{job.jobDescription}</p>
                            <p><strong>Location:</strong> {job.location}</p>
                            <p><strong>Workmode:</strong> {job.workmode}</p>
                            <p><strong>Salary:</strong> {job.salary}</p>
                            <p><strong>Job Type:</strong> {job.jobType}</p>
                            <button onClick={() => startEditing(job)}>Edit</button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Manage;
