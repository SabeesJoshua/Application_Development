import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../styles/Home.css'; 
import Navbar from './Navbar';
import Footer from './Footer';
import img2 from '../assets/img2.png';
const Home = ({ user, onLogout }) => {
  const navigate = useNavigate();

  const redirectToDashboard = () => {
    if (user) {
      switch (user.role) {
        case 'admin':
          navigate('/admin-dashboard');
          break;
        case 'employee':
          navigate('/employee-dashboard');
          break;
        case 'hr':
          navigate('/hr-dashboard');
          break;
        case 'team_lead':
          navigate('/team-lead-dashboard');
          break;
        case 'product_manager':
          navigate('/product-manager-dashboard');
          break;
        default:
          navigate('/');
      }
    } else {
      navigate('/login');  
    }
  };


  return (
    <>
      <Navbar />
      <div className="home-container">
        <img src={img2} alt="Logo" />
        <div className="c1">
          <h1 className="h1">Effortless Staff Scheduling with <b>WorkCrew...</b></h1><br />
          <h1>Welcome {user ? user.role : 'Guest'}</h1><br />
          {user ? (
            <div className="user-actions">
              <button onClick={redirectToDashboard}><b>View Dashboard</b></button>
              <button onClick={onLogout}><b>Logout</b></button>
            </div>
          ) : (
            <div className="butt">
              <p>Click below to login:</p>
              <button onClick={() => navigate('/login')}><b>Login</b></button>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;