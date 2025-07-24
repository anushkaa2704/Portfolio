import React, { useState } from 'react';
import './Certifications.css';

// Importing images (recommended for Vite/React projects)
import databaseCert from './images/databaseCert.png';
import pythonCert from './images/pythonCert.png';
import sqlCert from './images/sqlCert.png';
import javaFundamentalsCert from './images/sqlCert.png';
import genAICert from './images/sqlCert.png';

const certificates = [
   {
    title: 'Introduction to Generative AI',
    description: 'Certified by: Google Cloud ',
    year: '2025',
    image: genAICert,
  },
   {
    title: 'Java Fundamentals',
    description: 'Certified by: Infosys Springboard ',
    year: '2025',
    image: javaFundamentalsCert,
  },
  {
    title: 'Databases For Developers',
    description: 'Certified by: Oracle Corporation',
    year: '2025',
    image: databaseCert,
  },
  {
    title: 'Python Programming',
    description: 'Certified by: Udemy',
    year: '2025',
    image: pythonCert,
  },
  {
    title: 'SQL',
    description: 'Certified by: OneRoadmap ',
    year: '2025',
    image: sqlCert,
  },
  
];


function Certifications() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="certifications" id="certifications">
      <h2 className="section-title">My Certifications</h2>
      <div className="timeline">
        {certificates.map((cert, index) => (
          <div className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`} key={index}>
            <div className="timeline-content">
              <h3>{cert.title}</h3>
              <p className="desc">{cert.description}</p>
              <p className="year">{cert.year}</p>
              <button onClick={() => setSelectedImage(cert.image)}>View Certificate</button>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="modal" onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} alt="Certificate" />
        </div>
      )}
    </section>
  );
}

export default Certifications;
