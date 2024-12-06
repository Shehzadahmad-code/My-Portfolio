import React from 'react';
import './footer.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Shehzad Ahmad. All rights reserved.</p>
        <div className="social-links">
          <a href="https://github.com/Shehzadahmad-code" target="_blank" rel="noopener noreferrer">
          <FaGithub size={20} style={{ marginRight: '6px' }} />  GitHub
          </a>
          <a href="https://www.linkedin.com/in/shahzad-ahmad-466639301" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={20} style={{ marginRight: '8px' }} /> LinkedIn
          </a>
          <a href="mailto:hkrshahzad@gmail.com">
          <FaEnvelope size={20} style={{ marginRight: '8px' }} />Email</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
