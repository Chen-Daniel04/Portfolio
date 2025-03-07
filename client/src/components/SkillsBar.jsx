import React, { useEffect } from 'react';
import './SkillsBar.css';

const SkillsBar = () => {
  useEffect(() => {
    const skillBars = document.querySelectorAll('.skill-progress');
    skillBars.forEach((bar) => {
      bar.style.width = bar.getAttribute('data-width');
    });
  }, []);

  return (
    <div className="skills-section">
      <h2 className="section-title">Technical Skills</h2>
      <div className="skills-container">
        {/* Skill 1 */}
        <div className="skill-item">
          <div className="skill-info">
            <span>Java (Backend Development)</span>
            <span>90%</span>
          </div>
          <div className="skill-bar">
            <div className="skill-progress" data-width="90%" style={{ backgroundColor: '#00CED1' }}></div>
          </div>
          <div className="skill-tooltip">Proficient in Java for backend development, including Spring Boot and Hibernate.</div>
        </div>

        {/* Skill 2 */}
        <div className="skill-item">
          <div className="skill-info">
            <span>Node.js & Express.js</span>
            <span>85%</span>
          </div>
          <div className="skill-bar">
            <div className="skill-progress" data-width="85%" style={{ backgroundColor: '#008080' }}></div>
          </div>
          <div className="skill-tooltip">Experienced in building scalable server-side applications with Node.js and Express.js.</div>
        </div>

        {/* Skill 3 */}
        <div className="skill-item">
          <div className="skill-info">
            <span>Firebase</span>
            <span>80%</span>
          </div>
          <div className="skill-bar">
            <div className="skill-progress" data-width="80%" style={{ backgroundColor: '#00CED1' }}></div>
          </div>
          <div className="skill-tooltip">Skilled in Firebase Authentication, Realtime Database, and Cloud Functions.</div>
        </div>

        {/* Skill 4 */}
        <div className="skill-item">
          <div className="skill-info">
            <span>MongoDB & NoSQL</span>
            <span>85%</span>
          </div>
          <div className="skill-bar">
            <div className="skill-progress" data-width="85%" style={{ backgroundColor: '#008080' }}></div>
          </div>
          <div className="skill-tooltip">Proficient in MongoDB for NoSQL database management and schema design.</div>
        </div>

        {/* Skill 5 */}
        <div className="skill-item">
          <div className="skill-info">
            <span>Oracle SQL & MySQL</span>
            <span>75%</span>
          </div>
          <div className="skill-bar">
            <div className="skill-progress" data-width="75%" style={{ backgroundColor: '#00CED1' }}></div>
          </div>
          <div className="skill-tooltip">Experienced in relational database management using Oracle SQL and MySQL.</div>
        </div>

        {/* Skill 6 */}
        <div className="skill-item">
          <div className="skill-info">
            <span>RESTful API Development</span>
            <span>90%</span>
          </div>
          <div className="skill-bar">
            <div className="skill-progress" data-width="90%" style={{ backgroundColor: '#008080' }}></div>
          </div>
          <div className="skill-tooltip">Expert in designing and implementing RESTful APIs for web and mobile applications.</div>
        </div>

        {/* Skill 7 */}
        <div className="skill-item">
          <div className="skill-info">
            <span>Authentication & Security</span>
            <span>95%</span>
          </div>
          <div className="skill-bar">
            <div className="skill-progress" data-width="95%" style={{ backgroundColor: '#00CED1' }}></div>
          </div>
          <div className="skill-tooltip">Skilled in implementing MFA, JWT, OAuth, and other security protocols.</div>
        </div>

        {/* Skill 8 */}
        <div className="skill-item">
          <div className="skill-info">
            <span>Data Structures & Algorithms</span>
            <span>80%</span>
          </div>
          <div className="skill-bar">
            <div className="skill-progress" data-width="80%" style={{ backgroundColor: '#008080' }}></div>
          </div>
          <div className="skill-tooltip">Strong foundation in DSA using Java for efficient problem-solving.</div>
        </div>
      </div>
    </div>
  );
};

export default SkillsBar;