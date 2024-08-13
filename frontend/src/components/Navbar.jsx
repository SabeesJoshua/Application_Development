import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <nav>
      <ul className='ul'>
        <li className='li1'>
          <Link to="/" className='nav-title'>WorkCrew</Link>
        </li>
        <li className='li' onClick={() => handleNavigation('/')}>
          <span className='link'>Home</span>
        </li>
        <li className='li' onClick={() => handleNavigation('/about')}>
          <span className='link'>About Us</span>
        </li>
        <li className='li' onClick={() => handleNavigation('/contact')}>
          <span className='link'>Contact</span>
        </li>
        <li className='li' onClick={() => handleNavigation('/signup')}>
          <span className='link'>Signup</span>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
