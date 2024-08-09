import "./Postjobb.css";
import React, { useState } from "react";

const Postjobb = () => {
  const [formData, setFormData] = useState({
    jobTitle: "",
    workmode: "",
    jobType: "",
    applicationDeadline: "",
    salary: "",
    jobDescription: "",
    companyName: "",
    companyWebsite: "",
    location: "",  
    facebookPage: "",
    linkedinPage: "",
    twitterPage: "",
    instagramPage: "",
    companyDescription: "",
    recruiterName: "",
    recruiterEmail: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(formData); // Log formData to check if the state is correctly captured

    try {
      const response = await fetch("http://localhost:8080/jobs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Job posted successfully!");
      } else {
        alert("Failed to post job.");
      }
    } catch (error) {
      console.error("Error posting job:", error);
      alert("An error occurred while posting the job.");
    }
  };

  return (
    <>
     
       <div className="postjobmaindiv" > 
       <form onSubmit={handleSubmit}>     
              <div className="postjobjobinfosub">
                <h1>Job Information</h1>
                <div className="jobtitle">
                  <label>Job Title*</label>
                  <input
                    type="text"
                    className="styled"
                    name="jobTitle"
                    value={formData.jobTitle}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="flexrow">
                  <div className="innerflexrow">
                    <label>Work Mode*</label>
                    <select
                      name="workmode"
                      value={formData.workmode}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select Work Mode</option>
                      <option value="On-Site">On-Site</option>
                      <option value="Remote">Remote</option>
                      <option value="Hybrid">Hybrid</option>
                    </select>
                  </div>
                  <div className="innerflexrow">
                    <label>Job Type*</label>
                    <select
                      name="jobType"
                      value={formData.jobType}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select Job Type</option>
                      <option value="full-time">Full Time</option>
                      <option value="part-time">Part Time</option>
                      <option value="internship">Internship</option>
                      <option value="office">Office</option>
                    </select>
                  </div>
                </div>
                <div className="flexrow">
                  <div className="innerflexrow">
                    <label>Application Deadline</label>
                    <input
                      type="date"
                      className="styled"
                      name="applicationDeadline"
                      value={formData.applicationDeadline}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="innerflexrow">
                    <label>Salary</label>
                    <select
                      name="salary"
                      value={formData.salary}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select Salary Range</option>
                      <option value="default">Default</option>
                      <option value="10000-20000">10000-20000</option>
                      <option value="20000-30000">20000-30000</option>
                      <option value="30000-40000">30000-40000</option>
                    </select>
                  </div>
                </div>
                <div className="formgroup">
                  <label htmlFor="jobDescription">Job Description*</label>
                  <textarea
                    className="taofjobdes"
                    id="jobDescription"
                    name="jobDescription"
                    placeholder="Enter the job description here"
                    value={formData.jobDescription}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <h1>Company Information</h1>
                <div className="jobtitle">
                  <label>Company Name</label>
                  <input
                    type="text"
                    className="styled"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                  />
                </div>
                <div className="flexrow">
                  <div className="innerflexrow">
                    <label>Website</label>
                    <input
                      type="text"
                      className="styled"
                      name="companyWebsite"
                      value={formData.companyWebsite}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="innerflexrow">
                    <label>Location</label>
                    <input
                      type="text"
                      className="styled"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="flexrow">
                  <div className="innerflexrow">
                    <label>Facebook Page (Link)</label>
                    <input
                      type="text"
                      className="styled"
                      name="facebookPage"
                      value={formData.facebookPage}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="innerflexrow">
                    <label>LinkedIn Page (Link)</label>
                    <input
                      type="text"
                      className="styled"
                      name="linkedinPage"
                      value={formData.linkedinPage}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="flexrow">
                  <div className="innerflexrow">
                    <label>Twitter Page (Link)</label>
                    <input
                      type="text"
                      className="styled"
                      name="twitterPage"
                      value={formData.twitterPage}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="innerflexrow">
                    <label>Instagram Page (Link)</label>
                    <input
                      type="text"
                      className="styled"
                      name="instagramPage"
                      value={formData.instagramPage}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="formgroup">
                  <label htmlFor="companyDescription">Company Description*</label>
                  <textarea
                    id="companyDescription"
                    name="companyDescription"
                    placeholder="Enter the company description here"
                    value={formData.companyDescription}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <div>
                  <h1>Recruiter Information</h1>
                  <div className="flexrow">
                    <div className="innerflexrow">
                      <label>Full Name</label>
                      <input
                        type="text"
                        className="styled"
                        name="recruiterName"
                        value={formData.recruiterName}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="innerflexrow">
                      <label>Email</label>
                      <input
                        type="email"
                        className="styled"
                        name="recruiterEmail"
                        value={formData.recruiterEmail}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>

                <div className="submit-btn">
                  <button type="submit" className="submit-btn">
                    Post A Job
                  </button>
                </div>
             
            </div>
            </form>      
        </div>
    
    </>
  );
};

export default Postjobb;