import React, { useState } from "react";
import { Link } from "react-router-dom";
import image from "../Assests/home3.svg";
import boy from "../Assests/boy.png";
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
import man from "../Assests/leftman.png";
import Contact from "./Contact";
import AdminLogin from "./Adminlogin";
import { FaLinkedin, FaFacebook, FaTwitter, FaPinterest, FaHome, FaGoogle, FaUser, FaBoxes, FaSearch, FaHSquare, FaPhone, FaIndustry } from "react-icons/fa";
import Start from "./Start";
import About from "./About";
import JobCategory from "./Jobcategory";
import Nav from "./Navbar";
import Selectlogin from "./Selectlogin";

const Land = () => {
    const [user, setUser] = useState({ loggedIn: false, email: "" });

    const toggleForm = (formType) => {
        console.log(`Toggling form: ${formType}`);
    };

    const handleLogout = () => {
        setUser({ loggedIn: false, email: "" });
    };

    return (
        <>
            <Nav />
            <Start />
            <JobCategory />
            <About />
            <Contact />
            <Selectlogin />
        </>
    );
}

export default Land;
