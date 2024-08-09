import "./Apply.css";
import React, { useState } from "react";
import axios from "axios";

const Apply = ({ job, closeForm }) => {
    console.log("Job in Apply component:", job);

    const [formValues, setFormValues] = useState({
        firstName: '',
        lastName: '',
        email: '',
        experience: '',
        address: '',
        city: '',
        pincode: '',
        date: '',
        cv: null,
        jobTitle: job.jobTitle,
        company: job.companyName,
        location: job.location
    });

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        setFormValues(prevValues => ({
            ...prevValues,
            [name]: type === 'file' ? files[0] : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { firstName, lastName, email, experience, address, city, pincode, date, cv, jobTitle, company, location } = formValues;

        if (!firstName || !lastName || !email || !experience || !address || !city || !pincode || !date || !cv) {
            alert("Please fill out all fields before submitting.");
            return;
        }

        const formData = new FormData();
        formData.append('firstName', firstName);
        formData.append('lastName', lastName);
        formData.append('email', email);
        formData.append('experience', experience);
        formData.append('address', address);
        formData.append('city', city);
        formData.append('pincode', pincode);
        formData.append('date', date);
        formData.append('cv', cv);
        formData.append('jobTitle', jobTitle);
        formData.append('company', company);
        formData.append('location', location);

        try {
            const response = await axios.post('http://localhost:8080/cdash/applications/api/jobapplications', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
            });

            console.log('Response:', response);
            alert("Form Submitted Successfully");
            closeForm();
        } catch (error) {
            console.error("Submission error:", error);
            alert("There was an error submitting the form!");
        }
    };

    return (
        <div className="applymaindiv">
            <div className="applyform">
                <button className="close1button" onClick={closeForm}>X</button>
                <h2>JOB APPLICATION FORM</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Job Title:</label>
                        <input type="text" value={formValues.jobTitle} readOnly />
                    </div>
                    <div>
                        <label>Company:</label>
                        <input
                            type="text"
                            name="company"
                            value={formValues.company}
                            readOnly
                        />
                    </div>
                    <div>
                        <label>Location:</label>
                        <input type="text" value={formValues.location} readOnly />
                    </div>
                    <div className="appflexrow">
                        <div className="appflex1">
                            <label>First Name*</label>
                            <input
                                type="text"
                                name="firstName"
                                placeholder="First Name"
                                value={formValues.firstName}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="appflex1">
                            <label>Last Name*</label>
                            <input
                                type="text"
                                name="lastName"
                                placeholder="Last Name"
                                value={formValues.lastName}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    <div className="appflexrow">
                        <div className="appflex1">
                            <label>Email*</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter email"
                                value={formValues.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="appflex1">
                            <label>Experience*</label>
                            <input
                                type="text"
                                name="experience"
                                placeholder="Enter in Years"
                                value={formValues.experience}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    <div className="adddiv">
                        <label>Address*</label>
                        <textarea
                            name="address"
                            rows="4"
                            placeholder="Enter your address here"
                            value={formValues.address}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="appflexrow">
                        <div className="appflex1">
                            <label>City*</label>
                            <input
                                type="text"
                                name="city"
                                placeholder="Enter City"
                                value={formValues.city}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="appflex1">
                            <label>Pincode*</label>
                            <input
                                type="text"
                                name="pincode"
                                placeholder="Enter Pincode"
                                value={formValues.pincode}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    <div className="appflexrow">
                        <div className="appDate">
                            <label>Date*</label>
                            <input
                                type="date"
                                name="date"
                                value={formValues.date}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    <div className="appflexrow">
                        <div className="cv">
                            <label>CV (PDF, DOC, or DOCX)*</label>
                            <input
                                type="file"
                                name="cv"
                                accept="application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    <div className="submitapply">
                        <button className="submitbutton" type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Apply;
