import React from 'react';
import 'animate.css';
import './Header.css';
import profilePic from '../assets/profile.jpg';

const Header = () => {
  return (
    <header className="header animate__animated animate__fadeIn">
      <div className="header-content">
        <img src={profilePic} alt="Pyi Hein Aung" className="profile-pic animate__animated animate__bounceIn" />
        <h1 className="animate__animated animate__fadeInDown">PYI HEIN AUNG</h1>
        <h2 className="animate__animated animate__fadeInUp">RESEARCHER & FULLSTACK DEVELOPER (WEB & MOBILE)</h2>
        <div className="header-buttons">
          <a href="#contact" className="btn animate__animated animate__fadeInLeft">Contact Me</a>
          <a href="#projects" className="btn btn-outline animate__animated animate__fadeInRight">View Projects</a>
        </div>
      </div>
    </header>
  );
};

export default Header;