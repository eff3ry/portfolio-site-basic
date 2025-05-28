import React from 'react';
import '../styles/Footer.css';
// Note: You'll need to install react-icons with: npm install react-icons
import { FaTwitter, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="social-footer">
      <div className="social-links">
        <a href="https://https://github.com/eff3ry/" target="_blank" rel="noopener noreferrer" className="social-link">
          <FaGithub className="icon-placeholder"/>
        </a>
        <a href="https://www.linkedin.com/in/jeffery-tolmie/" target="_blank" rel="noopener noreferrer" className="social-link">
          <FaLinkedin className="icon-placeholder"/>
        </a>
        <a href="mailto:placeholder@jefferyt.me" target="_blank" rel="noopener noreferrer" className="social-link">
          <FaEnvelope className="icon-placeholder"/>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
