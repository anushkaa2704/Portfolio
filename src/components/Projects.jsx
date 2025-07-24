import React from 'react';
import './Projects.css';
import project1 from '../components/images/VBS.png';
import project2 from '../components/images/FSW.png';
import project3 from '../components/images/DLMS.png';

function Projects() {
  return (
    <section className="projects" id="projects">
      <h2 className="section-title">My Projects</h2>
      <div className="projects-container">

        <div className="project-card">
          <img src={project1} alt="Virtual Banking System" className="project-image" />
          <h3>Virtual Banking System</h3>
          <a href="https://github.com/anushkaa2704/Virtual-Banking-System" target="_blank" rel="noopener noreferrer">
            <button className="btn">Know More</button>
          </a>
        </div>

        <div className="project-card">
          <img src={project2} alt="Flower Shop Website" className="project-image" />
          <h3>PetalVerse- A Flower Shop Website</h3>
          <a href="https://github.com/anushkaa2704" target="_blank" rel="noopener noreferrer">
            <button className="btn">Know More</button>
          </a>
        </div>

        <div className="project-card">
          <img src={project3} alt="Travel Management System" className="project-image" />
          <h3>Digital Library Management System</h3>
          <a href="https://github.com/anushkaa2704" target="_blank" rel="noopener noreferrer">
            <button className="btn">Know More</button>
          </a>
        </div>

      </div>
    </section>
  );
}

export default Projects;
