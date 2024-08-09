import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Login from "./Fresh/Landingjs/Login";
import Signup from "./Fresh/Landingjs/Signup";
import Land from "./Fresh/Landingjs/Landing";
import About from "./Fresh/Landingjs/About";
import Resume from "../src/JobDashboard/resume";
import Profile from "../src/Fresh/EmployerDash/Profile"
import Applications from "../src/Fresh/EmployerDash/Applications";
import MyApplications from "../src/JobDashboard/myapp";
import Manage from "./Manage";
import Postjobb from "../src/Fresh/EmployerDash/Postjob";
import Nav from "./Fresh/Landingjs/Navbar";
import Footer from "./Fresh/Landingjs/Footer";
import AdminLogin from "./Fresh/Landingjs/Adminlogin";
import SideNav from "./Fresh/EmployerDash/SideNv";
// import RecruitDash from "./Fresh/Recruitdash/RecruitDash";
import Main from "./Fresh/JobDetail/Main";
import Contact from "./Fresh/Landingjs/Contact";
import { UserProvider } from './UserContext/UserContext';
import JSideNav from "./JobDashboard/JSideNav";

const Layout = ({ children }) => {
  const location = useLocation();
  const pathsWithoutFooter = ["/cdash", "/browse", "/applications", "/cdash/profile","/cdash/postjob", "/cdash/applications", "/cdash/managejobs","/rdash/profile","/rdash/myapplications","/rdash/resume","/rdash"];

  return (
    <>
      {children}
      {!pathsWithoutFooter.includes(location.pathname) && <Footer />}
    </>
  );
};

const CandidLayout = () => {
  return (
    <>
 <JSideNav/>
      <div className="candid-content">
        <Routes>
          {/* rdash*/}
          <Route path="/resume" element={<Resume />} />

          <Route path="/profile" element={<Profile />} />
          <Route path="/myapplications" element={<MyApplications />} />
        </Routes>
      </div>
    </>
  );
};
const JobLayout = () => {
  return (
    <>
           <SideNav/>
      <div className="candid-content">
        <Routes>
          <Route path="/managejobs" element={<Manage />} />
          <Route path="/postjob" element={<Postjobb />} />
          {/* cdash*/}
          <Route path="/profile" element={<Profile />} />

          <Route path="/applications" element={<Applications />} />
        </Routes>
      </div>
    </>
  );
};


const App = () => {
  const [formType, setFormType] = useState(null);
  const [role, setRole] = useState(null);

  const toggleForm = (type, role) => {
    setFormType(type);
    setRole(role);
  };

  const handleLoginSuccess = ({ username, role }) => {
    console.log(`Logged in as ${username} with role ${role}`);
  };

  return (
    <UserProvider>
      <Router>
        <Nav toggleForm={toggleForm} />
        <Layout>
          <Routes>
            <Route path="/" element={<Land />} />
            <Route path="/login" element={<Login toggleForm={toggleForm} handleLoginSuccess={handleLoginSuccess} role={role} />} />
            <Route path="/Admin" element={<AdminLogin />} />
            <Route path="/signup" element={<Signup toggleForm={toggleForm} role={role} />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/browse" element={<Main />} />
            <Route path="/rdash/*" element={<CandidLayout/>} />
            <Route path="/cdash/*" element={<JobLayout />} />
            <Route path="/adminportal" element={<Contact />} />
           
          </Routes>
        </Layout>
      </Router>
    </UserProvider>
  );
};

export default App;
