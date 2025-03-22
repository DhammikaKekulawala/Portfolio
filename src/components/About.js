import React from 'react';
import my_image from '../assets/my_image.jpeg';

function About() {
  return (
    <section id="about" className="about section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-image">
            {/* You can add your image here */}
            <div className="placeholder-image"><img src={my_image} alt="My Image" className="actual-image" /></div>
          </div>
          <div className="about-text">
            <h3>Software Engineer & AI Enthusiast</h3>
            <p>
              Driven by a desire for excellence, I am committed to continuously honing my abilities and staying abreast of
              emerging trends in the ever-evolving field of Software engineering. I thrive in collaborative team environments,
              where I can leverage my expertise while also learning from and supporting my colleagues.
            </p>
            <div className="about-details">
              <div className="detail">
                <span className="label">Name:</span>
                <span className="value">Dhammika Kekulawala</span>
              </div>
              <div className="detail">
                <span className="label">Email:</span>
                <span className="value">dhammika96815@gmail.com</span>
              </div>
              <div className="detail">
                <span className="label">Location:</span>
                <span className="value">Kadawatha, Sri Lanka</span>
              </div>
              <div className="detail">
                <span className="label">Phone:</span>
                <span className="value">(+94) 767303622</span>
              </div>
            </div>
            <div className="social-links">
              <a href="https://linkedin.com/in/dhammika-kekulawala" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://github.com/dhammika-kekulawala" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;