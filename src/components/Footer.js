import React from 'react';
import VisitCounter from "./VisitCounter"; 


const Footer = () => {
  return (
    <footer className="text-center mt-5 py-3 bg-dark text-white">
      <div className="container">
        <p>&copy; 2025 Papakonstantinou Antonios - All Rights Reserved</p>
        <p>
          <a href="https://github.com/pantoine31" target="_blank" rel="noopener noreferrer" className="text-white me-3">
            <i className="bi bi-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/antonis-papakonstantinou-5316281b6/" target="_blank" rel="noopener noreferrer" className="text-white me-3">
            <i className="bi bi-linkedin"></i>
          </a>
          <a href="https://www.instagram.com/pantoine_/" target="_blank" rel="noopener noreferrer" className="text-white me-3">
            <i className="bi bi-instagram"></i>
          </a>
          <a href="https://www.facebook.com/Papakwnstantinouant/" target="_blank" rel="noopener noreferrer" className="text-white me-3">
            <i className="bi bi-facebook"></i>
          </a>
          <a href="mailto:antonhspap@icloud.com" target="_blank" rel="noopener noreferrer" className="text-white">
            <i className="bi bi-envelope"></i>
          </a>
        </p>
      </div>
      <img src="https://hits.sh/pantoine31.github.io/ppblog.svg?style=flat&label=Total%20Visitors%20Until%20Now" alt="visits" />


    </footer>
  );
};

export default Footer;
