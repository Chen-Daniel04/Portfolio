import React from 'react';
import './AdditionalProjects.css';

const AdditionalProjects = () => {
  return (
    <div className="projects-section">
      <h2 className="section-title">Key Projects</h2>
      <div className="projects-container">
        {/* Project 1 */}
        <div className="project-item">
          <h3>Restaurant POS System</h3>
          <p>Developed a full-stack Point of Sale (POS) system for restaurants, featuring order management, billing, and inventory tracking. Built with Java (Backend), React (Frontend), and MongoDB.</p>
        </div>

        {/* Project 2 */}
        <div className="project-item">
          <h3>Commercial E-Learning Platform</h3>
          <p>Designed and implemented an e-learning platform with video uploading functionality. Added security features to disable video downloads and screen recording, ensuring content protection. Built with Node.js, Express.js, and Firebase.</p>
        </div>
      </div>
    </div>
  );
};

export default AdditionalProjects;