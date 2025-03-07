import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>SAMPLE PROJECTS</h2>
        <div className="project-list">
          <div className="project-item">
            <h3>MERN Stack User Authentication</h3>
            <p>Implemented secure user authentication system with login, registration, Multifactor-authentication, session management, and role-based access.</p>
          </div>
          <div className="project-item">
            <h3>Shopping List App (Mobile Java, Database-Firebase)</h3>
            <p>Created a mobile shopping list app with user-friendly UI and offline storage functionality, SMS notifications, and secured user authentications.</p>
          </div>
          <div className="project-item">
            <h3>Enhanced Deep Learning Approaches for Accurate Diagnosis of COVID-19 Using Medical Imaging</h3>
            <p>This research project aims to develop advanced deep learning models for the accurate diagnosis of COVID-19 using medical imaging data (e.g., X-rays, CT scans).</p>
          </div>
          <div className="project-item">
            <h3>Credit-Card Fraud Detection System with CNN (AI project)</h3>
            <p>This project develops a credit card fraud detection system using CNNs to identify fraudulent transactions.</p>
          </div>
          <div className="project-item">
            <h3>Online Job Employment System (Oracle SQL, MongoDB)</h3>
            <p>Designed and implemented a flexible online job employment system compatible with both relational and NoSQL databases to gain features like job searching, resume management.</p>
          </div>
          <div className="project-item">
            <h3>Grocery Store Inventory Management (Java)</h3>
            <p>Designed and implemented efficient DSA: ArrayList and Searching for managing inventory, product listings, inventory updates, product search, and order processing.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;