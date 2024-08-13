import React from 'react';
import Navbar from './Navbar';
import { Facebook, Twitter, Instagram } from '@mui/icons-material';
import '../styles/About.css';
import illustration from '../assets/illu-2.png';
import Footer from './Footer.jsx';

const About = () => {
  return (
    <>
      <Navbar />
      <div className="about">
      <div className="about-content">
        <img src={illustration} alt="Illustration" className="about-image" />
        <div className="about-text">
          <h1>About Us</h1>
          <p>Welcome to <b>WorkCrew</b>, where we simplify staff scheduling and management for teams of all sizes. Our platform offers seamless integration and a user-friendly interface designed to streamline your scheduling processes.</p>
          <p>At <b>WorkCrew</b>, we are committed to providing the best scheduling solutions to help your team stay organized and efficient. Learn more about our services and how we can assist you in achieving your goals.</p>
          <div className="social-icons1">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <Facebook />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <Twitter />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Instagram />
            </a>
          </div>
        </div>
      </div>
    </div>
      <Footer />
    </>
  );
};

export default About;
