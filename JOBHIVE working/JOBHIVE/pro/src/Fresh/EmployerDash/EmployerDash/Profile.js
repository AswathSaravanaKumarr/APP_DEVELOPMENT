import "./Profile.css";
import React, { useState } from "react";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Profile = () => {
    const [name, setName] = useState("");
    const [company, setCompany] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [linkedin, setLinkedin] = useState("");
    const [bio, setBio] = useState("");
    const [profilePicture, setProfilePicture] = useState(null);

    const handlePictureChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setProfilePicture(URL.createObjectURL(file));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Profile Submitted", { name, company, email, phone, address, linkedin, bio, profilePicture });
    };

    return (
        <div className="profile-container">
            <div className="profile-content">
                <h2 style={{textAlign:"center"}}>My Profile</h2>
                <form onSubmit={handleSubmit} className="profile-form">
                    <div className="profile-picture-container">
                        <label htmlFor="profile-picture" className="profile-picture-label">
                            {profilePicture ? (
                                <img src={profilePicture} alt="Profile" className="profile-picture" />
                            ) : (
                                <FontAwesomeIcon icon={faCamera} className="camera-icon" />
                            )}
                        </label>
                        <input
                            type="file"
                            id="profile-picture"
                            accept="image/*"
                            onChange={handlePictureChange}
                            style={{ display: 'none' }}
                        />
                    </div>
                    <div className="form-group-horizontal">
                        <div className="form-group">
                            <label htmlFor="name">Name:</label>
                            <input
                                type="text"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="company">Company:</label>
                            <input
                                type="text"
                                id="company"
                                value={company}
                                onChange={(e) => setCompany(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    <div className="form-group-horizontal">
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone:</label>
                            <input
                                type="tel"
                                id="phone"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="address">Address:</label>
                        <input
                            type="text"
                            id="address"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="linkedin">LinkedIn Profile:</label>
                        <input
                            type="url"
                            id="linkedin"
                            value={linkedin}
                            onChange={(e) => setLinkedin(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="bio">Bio:</label>
                        <textarea
                            id="bio"
                            value={bio}
                            onChange={(e) => setBio(e.target.value)}
                            rows="4"
                            required
                        ></textarea>
                    </div>
                    <button type="submit" className="submit-button">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Profile;
