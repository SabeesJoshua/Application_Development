import React from 'react';
import { useNavigate } from 'react-router-dom';
import './profile.css';

const Profile = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div className="profile-container">
      <header className="profile-header">
        <h1>Profile</h1>
        <button onClick={handleLogout} className="logout-button"><b>Logout</b></button>
      </header>
      <main className="profile-content">
        <h2>Employee Profile</h2>
        <div className="profile-details">
          <p><strong>Name:</strong> John Doe</p>
          <p><strong>Email:</strong> john.doe@example.com</p>
          <p><strong>Position:</strong> Software Developer</p>
          <p><strong>Department:</strong> Engineering</p>
        </div>
      </main>
    </div>
  );
};

export default Profile;
