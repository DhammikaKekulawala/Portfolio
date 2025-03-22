import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <h3>Dhammika Kekulawala</h3>
            <p>Software Engineer & AI Enthusiast</p>
          </div>
          <div className="footer-links">
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#education">Education</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-social">
            <a href="https://linkedin.com/in/dhammika-kekulawala" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://github.com/dhammika-kekulawala" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {currentYear} Dhammika Kekulawala. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;