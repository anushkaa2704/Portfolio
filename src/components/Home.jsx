import React from 'react';
import './Home.css';
import myPhoto from '../components/images/home-img.jpeg'; // ✅ Replace with your actual image file

function Home() {
  return (
    <div className="home-section" id="home">
      <div className="home-content">
        <div className="home-left">
          <h1>Hi, <span className="highlight">Anushkaa</span> Here!</h1>
          <h2>I'm a Developer</h2>
          <p>Turning Complexity into Clarity.</p>
          <button className="hire-btn" onClick={() => window.open('https://www.linkedin.com/in/anushkaapatil/', '_blank')}>Know more</button>
        </div>
        <div className="home-right">
          <div className="image-container">
            <img src={myPhoto} alt="Anushkaa" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
