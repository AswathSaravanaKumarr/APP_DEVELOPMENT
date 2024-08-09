
import React from 'react';
import './Land.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <header className="header">
        <div className="logo">CONNECT</div>
        <nav className="nav">
          <a href="#find-freelancers">Find freelancers</a>
          <a href="#find-jobs">Find jobs</a>
          <a href="#about">About</a>
          <a href="#solutions">Solutions</a>
        </nav>
        <div className="auth-buttons">
          <button className="login">Log in</button>
          <button className="join">Join us</button>
        </div>
      </header>
      <main className="main-content">
        <div className="intro">
          <h1>FREELANCE</h1>
          <div className="search-bar">
            <input type="text" placeholder="Search for any services..." />
            <button className="search-button">→</button>
          </div>
          <div className="popular-skills">
            <span>Popular skills:</span>
            <button>web design</button>
            <button>ui/ux design</button>
            <button>databases</button>
            <button>business cards</button>
          </div>
          <p>A freelance service web portal connects businesses with freelancers, facilitating project collaboration and hiring.</p>
          <div className="trusted-freelancers">
            <h2>Trusted Freelancers</h2>
            <div className="freelancers">
              {/* Add the freelancer images here */}
            </div>
            <span>200+ Satisfied Customers</span>
          </div>
        </div>
        <div className="freelancer-highlight">
          <img src="freelancer.jpg" alt="Freelancer" />
          <div className="freelancer-info">
            <span>@jenny</span>
            <span>Ui/Ux Designer</span>
            <span>80+ projects completed</span>
            <span>$30 per hour</span>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LandingPage;
