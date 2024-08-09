import "./JobCard.css";
import Apple from "./Images/applelogo.png";
import Apply from "../../Apply";
import Dell from "./Images/Dell.png";
import Facebook from "./Images/facebooklogo.png";
import Ford from "./Images/youtube.png";
import Hyundai from "./Images/Hyundai.png";
import Instagram from "./Images/instalogo.png";
import Qualcomm from "./Images/Qualcomm.png";
import React, { useState } from "react";
import Tesco from "./Images/Tescco.png";
import Whatsapp from "./Images/whatsappicon.png";
import { faBriefcase, faClock } from "@fortawesome/free-solid-svg-icons";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

 import Google from "./Images/Google.png";

// import "./JobCard.css";
// import Apple from "./Images/applelogo.png";
// import Dell from "./Images/Dell.png";
// import Facebook from "./Images/facebooklogo.png";
// import Ford from "./Images/youtube.png";
// import Hyundai from "./Images/Hyundai.png";
// import Instagram from "./Images/instalogo.png";
// import Qualcomm from "./Images/Qualcomm.png";
// import React from "react";
// import Tesco from "./Images/Tescco.png";
// import Whatsapp from "./Images/whatsappicon.png";
// import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
// import { faClock } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// const JobCard = ({ job, onApplyClick }) => {
//     const getCompanyLogo = (companyName) => {
//         switch (companyName) {
//             case "Apple":
//                 return Apple;
//             case "Dell":
//                 return Dell;
//             case "Facebook":
//                 return Facebook;
//             case "Tesco":
//                 return Tesco;
//             case "Whatsapp":
//                 return Whatsapp;
//             case "Qualcomm":
//                 return Qualcomm;
//             case "Ford":
//                 return Ford;
//             case "Hyundai":
//                  return Hyundai;
//             case "Instagram":
//                 return Instagram;
//             default:
//                 return null; 
//         }
//     };

//     return (
//         <div className="jobcard">
//             <div className="jobheader">
//                 <div className="companylogo">
//                     <img src={getCompanyLogo(job.companyName)} alt="Logo" />
//                 </div>
//                 <div className="jobtitle">
//                     <h3>{job.jobTitle}</h3>
//                     <p>{job.location}</p>
//                 </div>
//             </div>
//             <div className="jobdetails">
//                 <span className="badgejobtype">
//                     <FontAwesomeIcon icon={faClock} style={{ marginRight: '4px' }} />{job.jobType}
//                 </span>
//                 <span className="badgeworkmode">
//                     <FontAwesomeIcon icon={faBriefcase} style={{ marginRight: '4px' }}/> {job.workmode}
//                 </span>
//                 <p>{job.jobDescription}</p>
//             </div>
//             <div className="applybutton">
//                 <button onClick={onApplyClick}>Apply Now</button>
//             </div>
//         </div>
//     );
// };

// export default JobCard;

const JobCard = ({ job }) => {
    const [showForm, setShowForm] = useState(false);

    const getCompanyLogo = (companyName) => {
        switch (companyName) {
            case "Apple":
                return Apple;
            case "Dell":
                return Dell;
            case "Facebook":
                return Facebook;
            case "Tesco":
                return Tesco;
            case "Whatsapp":
                return Whatsapp;
            case "Qualcomm":
                return Qualcomm;
            case "Ford":
                return Ford;
            case "Hyundai":
                 return Hyundai;
            case "Instagram":
                return Instagram;
                case "Google":
                    return Google;
            default:
                return null; 
        }
    };

    const handleApplyClick = () => {
        setShowForm(true);
    };

    const closeForm = () => {
        setShowForm(false);
    };

    return (
        <div className="jobcard">
            <div className="jobheader">
                <div className="companylogo">
                    <img src={getCompanyLogo(job.companyName)} alt="Logo" />
                </div>
                <div className="jobtitle">
                    <h3>{job.jobTitle}</h3>
                    <p>{job.location}</p>
                </div>
            </div>
            <div className="jobdetails">
                <span className="badgejobtype">
                    <FontAwesomeIcon icon={faClock} style={{ marginRight: '4px' }} />{job.jobType}
                </span>
                <span className="badgeworkmode">
                    <FontAwesomeIcon icon={faBriefcase} style={{ marginRight: '4px' }}/> {job.workmode}
                </span>
                <span className="badgesalary">
    <FontAwesomeIcon icon={faDollarSign}  /> {job.salary}
</span>

                <p>{job.jobDescription}</p>
            </div>
            <div className="applybutton">
                <button onClick={handleApplyClick}>Apply Now</button>
            </div>
            {showForm && (
                <Apply
                    job={job}
                    closeForm={closeForm}
                />
            )}
        </div>
    );
};

export default JobCard;
