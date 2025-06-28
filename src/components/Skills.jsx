import React from 'react';
import './Skills.css';
import 'boxicons/css/boxicons.min.css';

function Skills() {
  return (
    <section className="skills" id="skills">
      <h2 className="section-title">My Technical Expertise</h2>

      <div className="skills-container">
        <div className="card">
          <i className='bx bx-code-alt'></i>
          <h3>Frontend</h3>
          <button>HTML</button>
          <button>CSS</button>
          <button>JavaScript</button>
          <button>React</button>
        </div>

        <div className="card">
          <i className='bx bx-minus-back'></i>
          <h3>Backend</h3>
          <button>Java</button>
          <button>Python</button>
          <button>Node.js</button>
        </div>

        <div className="card">
          <i className='bx bxs-coin-stack'></i>
          <h3>Database</h3>
          <button>MySQL</button>
          <button>Firebase</button>
          <button>PostgreSQL</button>
        </div>
      </div>
    </section>
  );
}

export default Skills;
