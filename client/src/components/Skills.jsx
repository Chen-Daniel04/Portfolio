import React from 'react';
import './Skills.css';

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2>SKILLS</h2>
        <div className="skills-grid">
          <div className="skill-item">Web Development (MERN stack)</div>
          <div className="skill-item">Mobile Development (Java, Kotlin, React Native)</div>
          <div className="skill-item">Design Thinking</div>
          <div className="skill-item">Strategic Planning</div>
          <div className="skill-item">Presentation Skills & Information Gathering</div>
        </div>
      </div>
    </section>
  );
};

export default Skills;